// pages/api/me.js
export default async function handler(req, res) {
  try {
    const cookiesHeader = req.headers?.cookie || "";
    const match = cookiesHeader.match(/afyaconnectToken=([^;]+)/);
    if (!match) return res.status(401).json({ message: "No token found" });

    const token = match[1];

    // Proxy request to backend
    const backendRes = await fetch("http://localhost:5000/api/auth/me", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await backendRes.json();
    res.status(backendRes.status).json(data);
  } catch (err) {
    console.error("API /me proxy error:", err);
    res.status(500).json({ message: "Internal server error" });
  }
}
