// app/api/login/route.js
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { cookies } from "next/headers";
import {
  findUserByEmail,
  findUserByUsername,
  findUserByPhone,
} from "@/lib/mockDB";

export async function POST(req) {
  try {
    const { usernameOrEmail, password } = await req.json();

    if (!usernameOrEmail || !password) {
      return NextResponse.json(
        { success: false, message: "Missing credentials." },
        { status: 400 }
      );
    }

    const lookup = usernameOrEmail.toString().trim();

    // try email -> username -> phone
    let user = await findUserByEmail(lookup);
    if (!user) user = await findUserByUsername(lookup);
    if (!user) user = await findUserByPhone(lookup);

    if (!user) {
      return NextResponse.json(
        { success: false, message: "Invalid credentials." },
        { status: 401 }
      );
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return NextResponse.json(
        { success: false, message: "Invalid credentials." },
        { status: 401 }
      );
    }

    // set cookie (same style your register used)
    cookies().set(
      "user",
      JSON.stringify({
        id: user._id.toString(),
        fullName: user.fullName,
        email: user.email,
        role: user.role || "patient",
      }),
      { httpOnly: true, path: "/" }
    );

    // prepare safe user to return
    const safeUser = {
      _id: user._id.toString(),
      fullName: user.fullName,
      username: user.username,
      email: user.email,
      phone: user.phone,
      role: user.role || "patient",
    };

    return NextResponse.json({ success: true, user: safeUser }, { status: 200 });
  } catch (err) {
    console.error("Login error:", err);
    return NextResponse.json(
      { success: false, message: "Login failed. Server error." },
      { status: 500 }
    );
  }
}
