'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [bgColor, setBgColor] = useState('bg-transparent');

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 20);

      // Change colors based on scroll depth
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
        <div className="space-x-4 text-white">
          <Link href="/Home">HOME</Link>
          <Link href="/about">ABOUT</Link>
          <Link href="/services">SERVICES</Link>
          <Link href="/testimonials">COMPANY</Link>
          <Link href="/contact">CONTACT</Link>
        </div>
      </div>
    </nav>
  );
}
