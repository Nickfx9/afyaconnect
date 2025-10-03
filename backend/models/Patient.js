const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
  fullName: { type: String, required: true, trim: true },
  phone:    { type: String, required: true, trim: true },
  email:    { type: String, required: true, unique: true, lowercase: true, trim: true },
  password: { type: String, required: true },
  dob:      { type: Date,   required: true },
  gender:   { type: String, required: true, enum: ['Male','Female','Other'] },
  location: { type: String, required: true, trim: true },

  // ✅ Added role
  role:     { type: String, enum: ['patient', 'doctor'], default: 'patient' }
}, { timestamps: true });

module.exports = mongoose.model('Patient', patientSchema);
