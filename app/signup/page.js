"use client";

import Link from "next/link";

export default function Signup() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-green-100 px-4">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-center text-green-600 mb-6">
          Create Your AfyaConnect Account
        </h1>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full border border-green-400 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 bg-white text-gray-800 placeholder-gray-500"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full border border-green-400 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 bg-white text-gray-800 placeholder-gray-500"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full border border-green-400 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 bg-white text-gray-800 placeholder-gray-500"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full border border-green-400 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 bg-white text-gray-800 placeholder-gray-500"
          />
          <button
            type="submit"
            className="w-full bg-green-600 text-white rounded py-2 hover:bg-green-700 transition"
          >
            Sign Up
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link href="/login" className="text-green-600 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </main>
  );
}
