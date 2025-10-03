// app/api/resetpassword/route.js
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
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

    // 1. Find user by reset token (helper checks expiry too)
    const user = await findUserByResetToken(token);
    if (!user) {
      return NextResponse.json(
        { error: "Invalid or expired token" },
        { status: 400 }
      );
    }

    // 2. Hash new password
    const hashedPassword = await bcrypt.hash(password, 10);

    // 3. Update user password
    await updateUserById(user._id, { password: hashedPassword });

    // 4. Clear reset token
    await clearResetPasswordToken(user._id);

    return NextResponse.json({ message: "Password reset successful" });
  } catch (err) {
    console.error("Reset Password Error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
