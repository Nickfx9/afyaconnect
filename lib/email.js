// lib/email.js
import nodemailer from "nodemailer";
import dotenv from "dotenv";

// Ensure .env.local is loaded (important when running scripts directly)
dotenv.config({ path: ".env.local" });

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || "smtp.gmail.com",
  port: process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : 587,
  secure: false, // true = port 465, false = 587
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export default transporter;
