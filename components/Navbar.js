'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react'; // Optional: You can use any icon

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [bgColor, setBgColor] = useState('bg-transparent');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 20);

      if (scrollY < 100) {
        setBgColor('bg-transparent');
      } else if (scrollY < 300) {
        setBgColor('bg-purple-900 bg-opacity-90');
      } else if (scrollY < 600) {
        setBgColor('bg-blue-900 bg-opacity-90');
      } else {
        setBgColor('bg-green-800 bg-opacity-90');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${bgColor} shadow-md`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
        <Link href="/" className="text-white font-bold text-xl">
          AfyaConnect
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 text-white">
          <Link href="/Home">HOME</Link>
          <Link href="/about">ABOUT</Link>
          <Link href="/services">SERVICES</Link>
          <Link href="/testimonials">COMPANY</Link>
          <Link href="/contact">CONTACT</Link>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white focus:outline-none"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Links */}
      {isMenuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-4 text-white bg-black bg-opacity-80">
          <Link href="/Home" onClick={() => setIsMenuOpen(false)}>HOME</Link>
          <Link href="/about" onClick={() => setIsMenuOpen(false)}>ABOUT</Link>
          <Link href="/services" onClick={() => setIsMenuOpen(false)}>SERVICES</Link>
          <Link href="/testimonials" onClick={() => setIsMenuOpen(false)}>COMPANY</Link>
          <Link href="/contact" onClick={() => setIsMenuOpen(false)}>CONTACT</Link>
        </div>
      )}
    </nav>
  );
}
