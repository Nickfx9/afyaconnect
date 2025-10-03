const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Patient = require('../models/Patient');

const signToken = (id) =>
  jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '7d' });

// ✅ Register Patient
exports.register = async (req, res) => {
  try {
    console.log("📩 Incoming registration data:", req.body);

    const { fullName, phone, email, password, dob, gender, location } = req.body;

    if (!fullName || !phone || !email || !password) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    const exist = await Patient.findOne({ email });
    if (exist) {
      return res.status(400).json({ message: 'Email already registered' });
    }

    const hashed = await bcrypt.hash(password, 10);
    const patient = await Patient.create({
      fullName,
      phone,
      email,
      password: hashed,
      dob: dob || null,
      gender: gender || null,
      location: location || null
    });

    const token = signToken(patient._id);
    const safe = patient.toObject();
    delete safe.password;

    // ✅ FIXED: frontend expects `user`, not `patient`
    res.status(201).json({
      message: 'Registered',
      user: safe,
      token
    });
  } catch (err) {
    console.error("❌ Registration error:", err);
    if (err.code === 11000) {
      return res.status(400).json({ message: 'Email already registered' });
    }
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

// ✅ Placeholder Login (ready for later)
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: 'Missing email or password' });
    }

    const patient = await Patient.findOne({ email });
    if (!patient) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const valid = await bcrypt.compare(password, patient.password);
    if (!valid) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const token = signToken(patient._id);
    const safe = patient.toObject();
    delete safe.password;

    res.status(200).json({
      message: 'Login successful',
      user: safe,   // ✅ keep response consistent
      token
    });
  } catch (err) {
    console.error("❌ Login error:", err);
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};
