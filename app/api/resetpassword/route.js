// app/api/resetpassword/route.js     
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import nodemailer from "nodemailer"; // ✅ add this import
import {
  findUserByResetToken,
  clearResetPasswordToken,
  updateUserById,
} from "@/models/User";

export async function POST(req) {
  try {
    const { token, password } = await req.json();

    if (!token || !password) {
      return NextResponse.json({ error: "Invalid request" }, { status: 400 });
    }

    // 1️⃣ Find user by reset token (helper checks expiry)
    const user = await findUserByResetToken(token);
    if (!user) {
      return NextResponse.json(
        { error: "Invalid or expired token" },
        { status: 400 }
      );
    }

    // 2️⃣ Hash new password
    const hashedPassword = await bcrypt.hash(password, 10);

    // 3️⃣ Update user password
    await updateUserById(user._id, { password: hashedPassword });

    // 4️⃣ Clear reset token
    await clearResetPasswordToken(user._id);

    // 5️⃣ Send confirmation email (NEW)
    await sendPasswordResetSuccessEmail(user.email, user.name);

    // 6️⃣ Respond success
    return NextResponse.json({ message: "Password reset successful" });
  } catch (err) {
    console.error("Reset Password Error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

// ✅ Helper: send confirmation email
async function sendPasswordResetSuccessEmail(email, name = "") {
  try {
    // ✅ Updated: use Gmail credentials from your .env
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

    const html = `
      <div style="font-family: Arial, sans-serif; color: #0f172a; padding: 20px;">
        <h2 style="color:#007bff;">Password Changed Successfully</h2>
        <p>Hi ${name || "there"},</p>
        <p>This is to confirm that your <strong>AfyaConnect</strong> account password was successfully updated.</p>
        <p>If this was you, you can safely ignore this message.</p>
        <p>If you did not request this change, please contact our support team immediately.</p>
        <br/>
        <a href="${baseUrl}/login"
           style="display:inline-block;padding:10px 20px;background-color:#007bff;
                  color:white;text-decoration:none;border-radius:6px;">
          Go to Login
        </a>
        <br/><br/>
        <p>– The AfyaConnect Team</p>
      </div>
    `;

    await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to: email,
      subject: "AfyaConnect — Password successfully changed",
      html,
    });

    console.log(`✅ Confirmation email sent to ${email}`);
  } catch (error) {
    console.error("❌ Error sending success email:", error);
  }
}
