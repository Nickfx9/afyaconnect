// pages/api/auth/register.js
import { createUser, findUserByEmail, findUserByPhone } from '@/models/User';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { serialize } from 'cookie';

const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret_here';
const TOKEN_NAME = 'afyaconnectToken';
const TOKEN_MAX_AGE = 7 * 24 * 60 * 60; // 7 days

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ message: 'Method not allowed' });

  try {
    const { fullName, email, phone, password, role } = req.body;

    // 1️⃣ Validation
    if (!fullName || !email || !phone || !password) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    // 2️⃣ Prevent duplicates
    if (await findUserByEmail(email) || await findUserByPhone(phone)) {
      return res.status(409).json({ message: 'User already exists with this email or phone' });
    }

    // 3️⃣ Hash password
    const hashedPassword = await bcrypt.hash(password, 10);
    const userRole = role && typeof role === 'string' ? role.toLowerCase() : 'patient';

    // 4️⃣ Create user (assuming Mongoose, returns doc directly)
    const newUser = await createUser({
      fullName,
      email,
      phone,
      password: hashedPassword,
      role: userRole,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    // 5️⃣ Sign token with id + role + name
    const token = jwt.sign(
      { id: newUser._id.toString(), role: newUser.role, fullName: newUser.fullName },
      JWT_SECRET,
      { expiresIn: '7d' }
    );

    // 6️⃣ Set cookie
    res.setHeader('Set-Cookie', serialize(TOKEN_NAME, token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: process.env.NODE_ENV === 'production' ? 'strict' : 'lax',
      maxAge: TOKEN_MAX_AGE,
      path: '/',
    }));

    // 7️⃣ Return safe user object
    return res.status(201).json({
      message: 'User registered and logged in',
      user: {
        id: newUser._id.toString(),
        fullName: newUser.fullName,
        email: newUser.email,
        phone: newUser.phone,
        role: newUser.role,
      },
    });
  } catch (err) {
    console.error('Register API error:', err);
    return res.status(500).json({ message: 'Server error' });
  }
}
