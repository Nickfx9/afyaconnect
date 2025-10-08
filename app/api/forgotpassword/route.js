// app/api/forgotpassword/route.js
import { NextResponse } from "next/server";
import crypto from "crypto";
import transporter from "@/lib/email";
import dbConnect from "@/lib/dbConnect";

export async function POST(req) {
  try {
    const { db } = await dbConnect();
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      );
    }

    // Always act the same, even if email is not found
    const user = await db.collection("users").findOne({ email });

    if (user) {
      // Only send email if the user exists
      const resetToken = crypto.randomBytes(32).toString("hex");
      const resetTokenExpiry = Date.now() + 1000 * 60 * 15; // 15 minutes

      await db.collection("users").updateOne(
        { email },
        {
          $set: {
            resetPasswordToken: resetToken,
            resetPasswordExpiry: resetTokenExpiry,
          },
        }
      );

      // ✅ Use correct base URL for both local and production
      const baseUrl =
        process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

      // Updated link to point to /password-update
      const resetUrl = `${baseUrl}/password-update?token=${resetToken}`;

      const mailOptions = {
        from: process.env.EMAIL_FROM || process.env.EMAIL_USER,
        to: email,
        subject: "🔑 Reset Your AfyaConnect Password",
        html: `
          <p>Hello ${user.fullName || "User"},</p>
          <p>You requested a password reset for your AfyaConnect account.</p>
          <p>Click the link below to reset your password (valid for 15 minutes):</p>
          <p><a href="${resetUrl}">${resetUrl}</a></p>
          <br/>
          <p>If you didn’t request this, please ignore this email.</p>
        `,
      };

      await transporter.sendMail(mailOptions);
    }

    // Always return the same response
    return NextResponse.json({
      message:
        "If this email is registered, a password reset link has been sent.",
    });
  } catch (err) {
    console.error("Forgot Password Error:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again later." },
      { status: 500 }
    );
  }
}
