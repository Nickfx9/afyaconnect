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
          <Link href="#home" scroll={false}>HOME</Link>
          <Link href="#about" scroll={false}>ABOUT</Link>
          <Link href="#services" scroll={false}>SERVICES</Link>
          <Link href="#company" scroll={false}>COMPANY</Link>
          <Link href="#contact" scroll={false}>CONTACT</Link>
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
        <div className="md:hidden px-4 pb-4 text-white bg-blue bg-opacity-80">
          <div className="flex flex-col space-y-4">
            <Link href="#home" scroll={false} onClick={() => setIsMenuOpen(false)}>HOME</Link>
            <Link href="#about" scroll={false} onClick={() => setIsMenuOpen(false)}>ABOUT</Link>
            <Link href="#services" scroll={false} onClick={() => setIsMenuOpen(false)}>SERVICES</Link>
            <Link href="#company" scroll={false} onClick={() => setIsMenuOpen(false)}>COMPANY</Link>
            <Link href="#contact" scroll={false} onClick={() => setIsMenuOpen(false)}>CONTACT</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
