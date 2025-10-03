// send-test-email.js

import dotenv from "dotenv";
import transporter from "./lib/email.js";

// ✅ Load environment variables from .env.local
dotenv.config({ path: ".env.local" });

const testEmail = async () => {
  try {
    // Log to confirm env vars are being read
    console.log("EMAIL_USER:", process.env.EMAIL_USER);
    console.log("EMAIL_FROM:", process.env.EMAIL_FROM);

    const info = await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_USER, // send a test email to yourself
      subject: "✅ Nodemailer Test from AfyaConnect",
      text: "Hello Nick! This is a test email sent using Nodemailer + Gmail App Password.",
    });

    console.log("✅ Email sent successfully:", info.response);
  } catch (err) {
    console.error("❌ Test email failed:", err);
  }
};

testEmail();
