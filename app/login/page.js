"use client";

import Link from "next/link";

export default function Login() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-yellow-50 to-yellow-100 px-4">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-center text-yellow-600 mb-6">
          Login to AfyaConnect
        </h1>
        <form className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full border border-yellow-400 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-white text-gray-800 placeholder-gray-500"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full border border-yellow-400 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-white text-gray-800 placeholder-gray-500"
          />
          <button
            type="submit"
            className="w-full bg-yellow-400 text-white rounded py-2 hover:bg-yellow-500 transition"
          >
            Login
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-600">
          Don&apos;t have an account?{" "}
          <Link href="/signup" className="text-yellow-600 hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </main>
  );
}
