// pages/forgot-password.js
"use client";

import { useState } from "react";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setMessage(null);

    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      setMessage({ type: "error", text: "Please enter a valid email address." });
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/forgotpassword", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json().catch(() => ({}));

      if (res.ok) {
        setMessage({
          type: "success",
          text: data.message || "If that email exists, a reset link was sent.",
        });
        setEmail("");
      } else {
        setMessage({
          type: "error",
          text: data.error || data.message || "Failed to send reset link.",
        });
      }
    } catch (err) {
      console.error("forgot-password fetch error:", err);
      setMessage({ type: "error", text: "Network error. Try again." });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-semibold mb-4">Forgot Password</h1>
        <p className="text-sm text-gray-600 mb-4">
          Enter the email address for your account and we'll send a link to reset your password.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <label className="block">
            <span className="text-sm font-medium text-gray-700">Email</span>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              required
              className="mt-1 block w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </label>

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-2 rounded-md text-white ${
              loading ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {loading ? "Sending..." : "Send reset link"}
          </button>
        </form>

        {message && (
          <div
            className={`mt-4 p-3 rounded ${
              message.type === "success" ? "bg-green-50 border border-green-200" : "bg-red-50 border border-red-200"
            }`}
            role="status"
          >
            <p className={`text-sm ${message.type === "success" ? "text-green-800" : "text-red-800"}`}>
              {message.text}
            </p>
          </div>
        )}

        <p className="text-xs text-gray-400 mt-4">
          Tip: If you don't receive an email, check your spam folder or try again.
        </p>
      </div>
    </div>
  );
}
