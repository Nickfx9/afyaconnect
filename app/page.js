"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Services from "../components/Services";
import WhyChooseUs from "../components/WhyChooseUs";
import HowItWorks from "../components/HowItWorks";
import FAQs from "../components/FAQs";
import Footer from "../components/Footer";

// Import the new reusable modals
import RegistrationCard from "../components/RegistrationCard";
import LoginCard from "../components/LoginCard";

export default function Home() {
  const [showRegister, setShowRegister] = useState(false);
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
              onClick={() => setShowRegister(true)}
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

        {/* Render new modals */}
        {showRegister && <RegistrationCard onClose={() => setShowRegister(false)} />}
        {showLogin && <LoginCard onClose={() => setShowLogin(false)} />}
      </main>

      {/* Our Services Section */}
      <section id="services">
        <Services />
      </section>

      <WhyChooseUs />
      <HowItWorks />
      <FAQs />

      <section id="contact">
        <Footer />
      </section>
    </>
  );
}
