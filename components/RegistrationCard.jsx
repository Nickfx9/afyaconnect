"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

export default function RegisterCard({ onClose }) {
  const router = useRouter();
  const [formData, setFormData] = useState({
    fullName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setMessage("Passwords do not match.");
      return;
    }

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error(`HTTP ${res.status}`);

      const data = await res.json();

      if (data.user && data.user._id) {
        Cookies.set("userId", data.user._id, { expires: 7 });
        Cookies.set("username", data.user.username, { expires: 7 });
        Cookies.set("fullName", data.user.fullName, { expires: 7 });
        Cookies.set("email", data.user.email, { expires: 7 });

        setSuccess(true);
        setMessage("Account created successfully! Redirecting...");

        setTimeout(() => router.push("/dashboard"), 1000);
      } else {
        setMessage("Registration failed: Missing user info.");
      }
    } catch (err) {
      setMessage(`Registration failed: ${err.message}`);
      console.error(err);
    }
  };

  // Ensure onClose is always a function, fallback to a no-op if not provided
  const handleCancel = () => {
    if (typeof onClose === "function") {
      onClose();
    } else {
      // fallback: reloads the page or hides modal if parent does not provide onClose
      if (window && window.location) window.location.reload();
    }
  };

  return (
    <div className="fixed inset-0 bg-white flex items-center justify-center z-50">
      <div className="bg-blue-900 p-10 rounded-3xl w-full max-w-md shadow-lg text-white relative">
        <h2 className="text-3xl font-bold mb-6 text-center">Create Account</h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-cyan-400 text-gray-900 bg-white placeholder-gray-400"
          />
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-cyan-400 text-gray-900 bg-white placeholder-gray-400"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-cyan-400 text-gray-900 bg-white placeholder-gray-400"
          />
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-cyan-400 text-gray-900 bg-white placeholder-gray-400"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-2 text-gray-600 text-sm"
              tabIndex={-1}
              aria-label="Toggle Password Visibility"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
          <input
            type={showPassword ? "text" : "password"}
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-cyan-400 text-gray-900 bg-white placeholder-gray-400"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone (optional)"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-cyan-400 text-gray-900 bg-white placeholder-gray-400"
          />

          <button
            type="submit"
            className="w-full py-3 mt-2 rounded-lg bg-cyan-500 hover:bg-cyan-600 font-bold transition"
            disabled={success}
          >
            {success ? "Redirecting..." : "Create Account"}
          </button>
        </form>

        {message && (
          <p className={`mt-3 text-center ${success ? "text-green-400" : "text-red-400"}`}>
            {message}
          </p>
        )}

        <button
          onClick={handleCancel}
          className="mt-6 w-full text-cyan-400 hover:underline text-sm"
          type="button"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}