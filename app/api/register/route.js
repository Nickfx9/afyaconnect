// app/api/register/route.js
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { cookies } from "next/headers";
import { addUser, findUserByEmail, findUserByUsername } from "@/lib/mockDB";

export async function POST(req) {
  try {
    const { fullName, username, email, phone, password } = await req.json();

    if (!fullName || !username || !email || !password) {
      return NextResponse.json(
        { success: false, message: "All required fields are required." },
        { status: 400 }
      );
    }

    // check if email or username already exists
    if (email) {
      const existingEmail = await findUserByEmail(email);
      if (existingEmail) {
        return NextResponse.json(
          { success: false, message: "Email already in use." },
          { status: 409 }
        );
      }
    }

    const existingUsername = await findUserByUsername(username);
    if (existingUsername) {
      return NextResponse.json(
        { success: false, message: "Username already in use." },
        { status: 409 }
      );
    }

    // hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // create user object
    const newUser = {
      fullName,
      username,
      email,
      phone: phone || "",
      password: hashedPassword,
      role: "patient",
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    // insert into MongoDB
    const result = await addUser(newUser);

    // set cookie (all user info in one cookie)
    cookies().set(
      "user",
      JSON.stringify({
        id: result.insertedId.toString(),
        fullName,
        username,
        email,
        role: "patient",
      }),
      { httpOnly: true, path: "/" }
    );

    return NextResponse.json(
      {
        success: true,
        message: "Registration successful!",
        user: {
          _id: result.insertedId.toString(),
          fullName,
          username,
          email,
          phone,
        },
      },
      { status: 201 }
    );
  } catch (err) {
    console.error("Register error:", err);
    return NextResponse.json(
      { success: false, message: "Registration failed." },
      { status: 500 }
    );
  }
}
