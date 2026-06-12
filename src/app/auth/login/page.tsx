'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Placeholder for authentication logic
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  return (
    <motion.div
      className="w-full max-w-md"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="bg-[#1A1A2E] border border-[#2D2D4A] rounded-2xl p-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-extrabold bg-gradient-to-r from-[#7C3AED] to-[#A855F7] bg-clip-text text-transparent mb-2">
            NeoForge
          </h1>
          <p className="text-[#B8B5C9]">Welcome back to your portfolio</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-white mb-2">
              Email
            </label>
            <input
              type="email"
              required
              className="w-full px-4 py-2 bg-[#252541] border border-[#2D2D4A] rounded-lg text-white placeholder-[#6B6882] focus:border-[#7C3AED] outline-none transition-colors"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-white mb-2">
              Password
            </label>
            <input
              type="password"
              required
              className="w-full px-4 py-2 bg-[#252541] border border-[#2D2D4A] rounded-lg text-white placeholder-[#6B6882] focus:border-[#7C3AED] outline-none transition-colors"
              placeholder="••••••••"
            />
          </div>

          {error && (
            <motion.div
              className="p-4 bg-red-500/10 border border-red-500 text-red-500 rounded-lg text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {error}
            </motion.div>
          )}

          <motion.button
            type="submit"
            disabled={isLoading}
            className="w-full py-3 text-white font-bold rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed mt-6"
            style={{
              background: 'linear-gradient(135deg, #7C3AED 0%, #A855F7 100%)',
            }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {isLoading ? 'Signing in...' : 'Sign In'}
          </motion.button>
        </form>

        {/* Divider */}
        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-[#2D2D4A]" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-[#1A1A2E] text-[#6B6882]">Or continue with</span>
          </div>
        </div>

        {/* OAuth Buttons */}
        <div className="space-y-3">
          <motion.button
            type="button"
            className="w-full py-2 border border-[#2D2D4A] rounded-lg text-white hover:border-[#7C3AED] transition-colors font-medium"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            GitHub
          </motion.button>
          <motion.button
            type="button"
            className="w-full py-2 border border-[#2D2D4A] rounded-lg text-white hover:border-[#7C3AED] transition-colors font-medium"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Google
          </motion.button>
        </div>

        {/* Footer */}
        <p className="text-center text-[#6B6882] text-sm mt-6">
          Don't have an account?{' '}
          <Link href="/auth/register" className="text-[#7C3AED] hover:text-[#A855F7] transition-colors font-medium">
            Sign up
          </Link>
        </p>
      </div>
    </motion.div>
  );
}
