'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-[#0D0D14]/80 backdrop-blur-md border-b border-[#2D2D47] z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="text-2xl font-extrabold bg-gradient-to-r from-[#7C3AED] to-[#A855F7] bg-clip-text text-transparent">
            NeoForge
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            <Link href="/" className="text-[#D1D5DB] hover:text-white transition-colors">
              Home
            </Link>
            <a href="#features" className="text-[#D1D5DB] hover:text-white transition-colors">
              Features
            </a>
            <a href="#contact" className="text-[#D1D5DB] hover:text-white transition-colors">
              Contact
            </a>
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex gap-4">
            <Link
              href="/auth/login"
              className="px-6 py-2 text-[#7C3AED] border border-[#7C3AED] rounded-lg hover:bg-[#7C3AED]/10 transition-colors"
            >
              Sign In
            </Link>
            <Link
              href="/auth/register"
              className="px-6 py-2 bg-gradient-to-r from-[#7C3AED] to-[#A855F7] text-white rounded-lg hover:shadow-[0_0_20px_rgba(124,58,237,0.5)] transition-all"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white text-2xl"
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-4 border-t border-[#2D2D47]">
            <Link href="/" className="block text-[#D1D5DB] hover:text-white py-2">
              Home
            </Link>
            <a href="#features" className="block text-[#D1D5DB] hover:text-white py-2">
              Features
            </a>
            <a href="#contact" className="block text-[#D1D5DB] hover:text-white py-2">
              Contact
            </a>
            <div className="flex gap-4 pt-4">
              <Link
                href="/auth/login"
                className="flex-1 px-4 py-2 text-center text-[#7C3AED] border border-[#7C3AED] rounded-lg"
              >
                Sign In
              </Link>
              <Link
                href="/auth/register"
                className="flex-1 px-4 py-2 text-center bg-gradient-to-r from-[#7C3AED] to-[#A855F7] text-white rounded-lg"
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
