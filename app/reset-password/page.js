"use client";

import { useState, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { motion } from "framer-motion";

function ResetPasswordContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [strength, setStrength] = useState({ level: "", color: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  useEffect(() => {
    if (!token) {
      setMessage({
        type: "error",
        text: "Invalid or missing reset link. Please request again.",
      });
    }
  }, [token]);

  function evaluateStrength(value) {
    let level = "";
    let color = "";
    const strongRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    const mediumRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;

    if (strongRegex.test(value)) {
      level = "Strong";
      color = "bg-green-500";
    } else if (mediumRegex.test(value)) {
      level = "Medium";
      color = "bg-yellow-400";
    } else if (value.length > 0) {
      level = "Weak";
      color = "bg-red-500";
    } else {
      level = "";
      color = "";
    }

    setStrength({ level, color });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setMessage(null);

    if (password !== confirmPassword) {
      return setMessage({ type: "error", text: "Passwords do not match." });
    }

    if (strength.level !== "Strong") {
      return setMessage({
        type: "error",
        text: "Password must be strong (8+ chars, upper/lowercase, number, symbol).",
      });
    }

    setLoading(true);
    try {
      const res = await fetch("/api/resetpassword", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token, password }),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage({
          type: "success",
          text: "Password reset successful! You can now go back to login.",
        });
        setPassword("");
        setConfirmPassword("");
      } else {
        setMessage({
          type: "error",
          text: data.error || "Failed to reset password. Try again.",
        });
      }
    } catch (err) {
      setMessage({ type: "error", text: "Network error. Try again later." });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-[#020617] via-[#0a2540] to-[#000000] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(0,255,255,0.15),_transparent_50%),_radial-gradient(circle_at_bottom_right,_rgba(0,128,255,0.25),_transparent_50%)] animate-pulse"></div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full max-w-md bg-[#0a2540]/70 backdrop-blur-xl border border-cyan-400/60 shadow-[0_0_25px_rgba(0,255,255,0.3)] rounded-2xl p-8"
      >
        <h1 className="text-3xl font-semibold text-center mb-4 text-cyan-300 drop-shadow-lg">
          Reset Your Password
        </h1>
        <p className="text-center text-sm text-cyan-100 mb-6">
          Enter your new password below. Choose a strong one for security.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* New Password */}
          <div className="relative">
            <label className="text-sm font-medium text-cyan-100">
              New Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                evaluateStrength(e.target.value);
              }}
              required
              placeholder="Enter new password"
              className="mt-1 w-full rounded-md bg-[#000000]/40 border border-cyan-400/50 p-2 text-white focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 outline-none placeholder-gray-400 transition-all"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-2 top-8 text-cyan-200 text-sm font-semibold hover:text-cyan-400"
            >
              {showPassword ? "Hide" : "Show"}
            </button>

            {strength.level && (
              <div className="mt-2">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-xs text-gray-300">
                    Strength:{" "}
                    <span className="font-semibold text-cyan-200">
                      {strength.level}
                    </span>
                  </span>
                </div>
                <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                  <div
                    className={`h-2 ${strength.color} transition-all duration-500`}
                    style={{
                      width:
                        strength.level === "Weak"
                          ? "33%"
                          : strength.level === "Medium"
                          ? "66%"
                          : "100%",
                    }}
                  ></div>
                </div>
              </div>
            )}
          </div>

          {/* Confirm Password */}
          <div className="relative">
            <label className="text-sm font-medium text-cyan-100">
              Confirm Password
            </label>
            <input
              type={showConfirm ? "text" : "password"}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              placeholder="Confirm new password"
              className="mt-1 w-full rounded-md bg-[#000000]/40 border border-cyan-400/50 p-2 text-white focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 outline-none placeholder-gray-400 transition-all"
            />
            <button
              type="button"
              onClick={() => setShowConfirm(!showConfirm)}
              className="absolute right-2 top-8 text-cyan-200 text-sm font-semibold hover:text-cyan-400"
            >
              {showConfirm ? "Hide" : "Show"}
            </button>
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-2 rounded-md text-white font-medium transition-all duration-300 ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-cyan-600 hover:bg-cyan-700 shadow-[0_0_15px_rgba(0,255,255,0.3)]"
            }`}
          >
            {loading ? "Resetting..." : "Reset Password"}
          </button>
        </form>

        {message && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className={`mt-4 p-4 rounded-xl text-center text-sm backdrop-blur-md shadow-lg ${
              message.type === "success"
                ? "bg-green-400/10 border border-green-400 text-green-300"
                : "bg-red-500/20 border border-red-400 text-red-300"
            }`}
          >
            <p className="mb-2">{message.text}</p>

            {message.type === "success" && (
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 20px rgba(0,255,255,0.6)",
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => router.push("/login")}
                className="mt-3 px-6 py-2 rounded-lg bg-cyan-600/80 hover:bg-cyan-500/90 text-white font-medium shadow-[0_0_10px_rgba(0,255,255,0.4)] transition-all"
              >
                Go Back to Login
              </motion.button>
            )}
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}

export default function ResetPassword() {
  return (
    <Suspense
      fallback={
        <div className="text-white text-center p-10 animate-pulse">
          Loading reset page...
        </div>
      }
    >
      <ResetPasswordContent />
    </Suspense>
  );
}
