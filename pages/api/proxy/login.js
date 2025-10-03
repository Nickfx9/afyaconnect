// pages/api/proxy/login.js
import { serialize } from "cookie";

const TOKEN_NAME = "afyaconnectToken";
const TOKEN_MAX_AGE = 7 * 24 * 60 * 60; // 7 days

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    // Forward request to backend
    const backendRes = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(req.body),
    });

    const data = await backendRes.json();

    // ✅ If backend gave us a token, set it as an HttpOnly cookie
    if (backendRes.ok && data.token) {
      res.setHeader(
        "Set-Cookie",
        serialize(TOKEN_NAME, data.token, {
          httpOnly: true,
          secure: process.env.NODE_ENV === "production",
          sameSite: "lax",
          maxAge: TOKEN_MAX_AGE,
          path: "/",
        })
      );
    }

    res.status(backendRes.status).json(data);
  } catch (error) {
    console.error("Login proxy error:", error);
    res.status(500).json({ error: "Login proxy failed" });
  }
}
