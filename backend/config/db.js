// backend/config/db.js
const mongoose = require('mongoose');

const connectDB = async () => {
  const uri = process.env.MONGO_URI;
  if (!uri) {
    console.error('❌ MONGO_URI is missing in .env');
    process.exit(1);
  }

  try {
    await mongoose.connect(uri); // Mongoose v6+ needs no extra opts
    const { host, name } = mongoose.connection;
    console.log(`✅ MongoDB connected: ${host}/${name}`);
  } catch (err) {
    console.error('❌ MongoDB connection error:', err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
