import cookie from "cookie";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const backendRes = await fetch("http://localhost:5000/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(req.body),
    });

    const data = await backendRes.json();

    if (!backendRes.ok) {
      return res.status(backendRes.status).json(data);
    }

    const { token, user } = data;

    if (!token || !user) {
      return res.status(500).json({ message: "Invalid backend response: missing token or user" });
    }

    // ✅ Safer cookie setup
    res.setHeader("Set-Cookie",
      cookie.serialize("afyaconnectToken", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production", // ❌ disable Secure on localhost
        sameSite: "strict",
        path: "/",
        maxAge: 60 * 60 * 24 * 7, // 7 days
      })
    );

    return res.status(201).json({ user });
  } catch (err) {
    console.error("Proxy error:", err);
    res.status(500).json({ message: "Proxy request failed" });
  }
}
