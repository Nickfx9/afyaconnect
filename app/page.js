"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Services from "../components/Services";
import WhyChooseUs from "../components/WhyChooseUs";
import HowItWorks from "../components/HowItWorks";
import FAQs from "../components/FAQs";
import Footer from "../components/Footer";







export default function Home() {
  const [showSignup, setShowSignup] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      <Navbar />
      <main className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/doctor-hero.jpg"
            alt="Doctor video call with patient"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-blue-900 opacity-30"></div>
        </div>

        {/* Translucent dots */}
        <div className="absolute w-72 h-72 bg-white opacity-20 rounded-full top-32 left-10 blur-3xl z-1"></div>
        <div className="absolute w-96 h-96 bg-white opacity-15 rounded-full bottom-20 right-20 blur-3xl z-1"></div>

        {/* Content */}
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
            Welcome to AfyaConnect
          </h1>
          <p className="text-lg md:text-xl max-w-xl mx-auto mb-6 drop-shadow-md">
            Seamless online healthcare consultations with licensed doctors at your convenience.
          </p>
          <div className="space-x-4">
            <button
              onClick={() => setShowSignup(true)}
              className="mt-6 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition drop-shadow"
            >
              Get Started
            </button>
            <button
              onClick={() => setShowLogin(true)}
              className="mt-6 px-6 py-3 bg-yellow-400 text-white rounded-lg hover:bg-yellow-500 transition drop-shadow"
            >
              Login
            </button>
          </div>
        </div>

        {/* Signup Modal */}
        {showSignup && (
          <div className="fixed inset-0 bg-gradient-to-br from-blue-200 via-blue-300 to-blue-400 bg-opacity-60 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 w-full max-w-sm">
              <h2 className="text-xl font-bold mb-4 text-green-600 text-center">Sign Up</h2>
              <form className="space-y-3">
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
              <button
                onClick={() => setShowSignup(false)}
                className="mt-4 w-full text-green-600 hover:underline text-sm"
              >
                Cancel
              </button>
            </div>
          </div>
        )}

        {/* Login Modal */}
        {showLogin && (
          <div className="fixed inset-0 bg-red bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 w-full max-w-sm">
              <h2 className="text-xl font-bold mb-4 text-yellow-600 text-center">Login</h2>
              <form className="space-y-3">
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
              <button
                onClick={() => setShowLogin(false)}
                className="mt-4 w-full text-yellow-600 hover:underline text-sm"
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </main>
       {/* Our Services Section */}
      <Services />
      <WhyChooseUs />
      <HowItWorks />
      <FAQs />
      <Footer />

    </>
  );
}
