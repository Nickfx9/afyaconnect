// pages/api/auth/login.js
import { findUserByEmail, findUserByPhone } from '@/models/User';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import cookie from 'cookie';

const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret_here';
const TOKEN_NAME = 'afyaconnectToken';
const TOKEN_MAX_AGE = 7 * 24 * 60 * 60; // 7 days

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { emailOrPhone, password } = req.body;

    if (!emailOrPhone || !password) {
      return res.status(400).json({ message: 'Missing email/phone or password' });
    }

    // ✅ Check user by email OR phone
    let user = await findUserByEmail(emailOrPhone);
    if (!user) {
      user = await findUserByPhone(emailOrPhone);
    }
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // ✅ Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // ✅ Sign JWT
    const userId = user._id.toString();
    const token = jwt.sign(
      { userId, role: user.role || 'patient' },
      JWT_SECRET,
      { expiresIn: '7d' }
    );

    // ✅ Set HttpOnly cookie
    res.setHeader(
      'Set-Cookie',
      cookie.serialize(TOKEN_NAME, token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        maxAge: TOKEN_MAX_AGE,
        path: '/',
      })
    );

    // ✅ Clean user (no password)
    const safeUser = {
      id: userId,
      fullName: user.fullName,
      email: user.email,
      phone: user.phone,
      role: user.role || 'patient',
    };

    return res.status(200).json({
      message: 'Login successful',
      user: safeUser,
    });
  } catch (err) {
    console.error('Login API error:', err);
    return res.status(500).json({ message: 'Server error' });
  }
}
