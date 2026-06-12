'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 border-b border-[#2D2D4A]"
      style={{ backgroundColor: 'rgba(13, 13, 20, 0.8)' }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/" className="text-2xl font-bold text-[#7C3AED] hover:text-[#A855F7] transition-colors">
              NeoForge
            </Link>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-[#B8B5C9] hover:text-[#F5F3FF] transition-colors">
              Home
            </Link>
            <Link href="#features" className="text-[#B8B5C9] hover:text-[#F5F3FF] transition-colors">
              Features
            </Link>
            <Link href="#contact" className="text-[#B8B5C9] hover:text-[#F5F3FF] transition-colors">
              Contact
            </Link>
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/auth/login"
                className="px-6 py-2 text-[#F5F3FF] border border-[#2D2D4A] rounded-lg hover:border-[#7C3AED] transition-colors"
              >
                Login
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/auth/register"
                className="px-6 py-2 rounded-lg font-semibold text-white"
                style={{
                  background: 'linear-gradient(135deg, #7C3AED 0%, #A855F7 100%)',
                }}
              >
                Get Started
              </Link>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-2 text-[#F5F3FF]"
            onClick={() => setMobileOpen(!mobileOpen)}
            whileTap={{ scale: 0.9 }}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <motion.div
            className="md:hidden mt-4 pt-4 border-t border-[#2D2D4A]"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            <div className="flex flex-col gap-4">
              <Link href="/" className="text-[#B8B5C9] hover:text-[#F5F3FF] transition-colors">
                Home
              </Link>
              <Link href="#features" className="text-[#B8B5C9] hover:text-[#F5F3FF] transition-colors">
                Features
              </Link>
              <Link href="#contact" className="text-[#B8B5C9] hover:text-[#F5F3FF] transition-colors">
                Contact
              </Link>
              <div className="flex gap-3 pt-4">
                <Link
                  href="/auth/login"
                  className="flex-1 px-4 py-2 text-center text-[#F5F3FF] border border-[#2D2D4A] rounded-lg hover:border-[#7C3AED] transition-colors"
                >
                  Login
                </Link>
                <Link
                  href="/auth/register"
                  className="flex-1 px-4 py-2 text-center rounded-lg font-semibold text-white"
                  style={{
                    background: 'linear-gradient(135deg, #7C3AED 0%, #A855F7 100%)',
                  }}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
