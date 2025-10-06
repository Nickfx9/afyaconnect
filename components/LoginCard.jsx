"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { FaUserCircle, FaRobot } from "react-icons/fa";

export default function LoginCard({ onClose }) {
  const [formData, setFormData] = useState({ usernameOrEmail: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");
  const router = useRouter();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) {
        const text = await res.text();
        throw new Error(`HTTP ${res.status}: ${text}`);
      }
      const data = await res.json();
      if (data.success && data.user) {
        Cookies.set("userId", data.user._id, { expires: 7 });
        Cookies.set("username", data.user.username, { expires: 7 });
        Cookies.set("fullName", data.user.fullName, { expires: 7 });
        Cookies.set("email", data.user.email, { expires: 7 });
        setMessage("Login successful! Redirecting...");
        setTimeout(() => router.push("/dashboard"), 1000);
      } else {
        // Improved error message
        setMessage(data.message || "Invalid username or password. Please try again.");
      }
    } catch (err) {
      console.error("Login fetch error:", err);
      setMessage(`Login failed: ${err.message}`);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-100 bg-opacity-70 z-50">
      <div className="flex flex-col md:flex-row w-full max-w-4xl rounded-2xl shadow-2xl overflow-hidden h-auto md:h-[500px]">
        {/* Register Panel */}
        <div className="flex-1 bg-white p-6 md:p-10 flex flex-col justify-center items-center">
          <FaUserCircle className="text-8xl text-cyan-400 mb-6" />
          <p className="text-xl text-gray-700 font-semibold text-center">
            Don&apos;t have an account?<br />
            <span className="font-normal text-gray-500">Register now to get started!</span>
          </p>
        </div>

        {/* Divider / curved design */}
        <div className="hidden md:block w-10 relative">
          <svg
            className="absolute top-0 left-0 h-full w-full"
            viewBox="0 0 100 500"
            preserveAspectRatio="none"
          >
            <path d="M0,0 Q50,250 0,500 L100,500 L100,0 Z" fill="#16213e" />
          </svg>
        </div>

        {/* Login Panel */}
        <div className="flex-1 bg-[#16213e] p-6 md:p-10 flex flex-col justify-center text-white">
          <h2 className="text-3xl font-bold mb-6">Login</h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="usernameOrEmail"
              placeholder="Username or Email"
              value={formData.usernameOrEmail}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg border border-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 text-gray-900 bg-white placeholder-gray-400"
            />
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg border border-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 text-gray-900 bg-white placeholder-gray-400"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-2 text-gray-600 text-sm"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
            <button
              type="submit"
              className="w-full py-3 mt-2 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-bold hover:from-blue-500 hover:to-cyan-400 transition-all"
            >
              Login
            </button>
          </form>

          {/* Forgot Password Link */}
          <div className="flex justify-end mt-2">
            <button
              type="button"
              className="text-cyan-300 hover:underline text-sm"
              onClick={() => router.push("/forgot-password")}
            >
              Forgot Password?
            </button>
          </div>

          {/* Message Display */}
          {message && (
            <div
              className={`mt-3 p-2 rounded-lg text-sm text-center flex items-center justify-center space-x-2 ${
                message.includes("successful")
                  ? "bg-green-100 text-green-800 border border-green-300"
                  : "bg-red-100 text-red-800 border border-red-300"
              }`}
            >
              {message.includes("successful") && <span className="text-green-600 font-bold">✅</span>}
              <span>{message}</span>
            </div>
          )}

          <button
            onClick={onClose}
            className="mt-4 w-full text-cyan-400 hover:underline text-sm"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
