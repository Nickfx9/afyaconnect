"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-blue-900 bg-opacity-60 backdrop-blur-sm transition">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-white hover:text-blue-200 transition">
          AFYACONNECT
        </Link>
        <div className="hidden md:flex space-x-6 text-white">
          <Link href="/" className="hover:text-blue-300 transition">Home</Link>
          <Link href="#services" className="hover:text-blue-300 transition">Services</Link>
          <Link href="#contact" className="hover:text-blue-300 transition">Contact</Link>
          <Link href="#login" className="hover:text-blue-300 transition">Login</Link>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor"
              viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-blue-900 bg-opacity-90 backdrop-blur-sm px-4 py-2 space-y-2 text-white">
          <Link href="/" className="block hover:text-blue-300 transition">Home</Link>
          <Link href="#services" className="block hover:text-blue-300 transition">Services</Link>
          <Link href="#contact" className="block hover:text-blue-300 transition">Contact</Link>
          <Link href="#login" className="block hover:text-blue-300 transition">Login</Link>
        </div>
      )}
    </nav>
  );
}
