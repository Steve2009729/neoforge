'use client';

import { useState } from 'react';
import Link from 'next/link';

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
      setError('');
    }, 1000);
  };

  return (
    <div className="w-full max-w-md">
      <div className="bg-[#1A1A2E] border border-[#2D2D47] rounded-2xl p-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-extrabold bg-gradient-to-r from-[#7C3AED] to-[#A855F7] bg-clip-text text-transparent mb-2">
            NeoForge
          </h1>
          <p className="text-[#D1D5DB]">Welcome back to your portfolio</p>
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
              className="w-full px-4 py-2 bg-[#252541] border border-[#2D2D47] rounded-lg text-white placeholder-[#9CA3AF] focus:border-[#7C3AED] outline-none transition-colors"
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
              className="w-full px-4 py-2 bg-[#252541] border border-[#2D2D47] rounded-lg text-white placeholder-[#9CA3AF] focus:border-[#7C3AED] outline-none transition-colors"
              placeholder="••••••••"
            />
          </div>

          {error && (
            <div className="p-4 bg-[#EF4444]/10 border border-[#EF4444] text-[#EF4444] rounded-lg text-sm">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-3 bg-gradient-to-r from-[#7C3AED] to-[#A855F7] text-white font-bold rounded-lg hover:shadow-[0_0_30px_rgba(124,58,237,0.5)] transition-all disabled:opacity-50 disabled:cursor-not-allowed mt-6"
          >
            {isLoading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>

        {/* Divider */}
        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-[#2D2D47]" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-[#1A1A2E] text-[#9CA3AF]">Or continue with</span>
          </div>
        </div>

        {/* OAuth Buttons */}
        <div className="space-y-3">
          <button className="w-full py-2 border border-[#2D2D47] rounded-lg text-white hover:border-[#7C3AED] transition-colors font-medium">
            GitHub
          </button>
          <button className="w-full py-2 border border-[#2D2D47] rounded-lg text-white hover:border-[#7C3AED] transition-colors font-medium">
            Google
          </button>
        </div>

        {/* Footer */}
        <p className="text-center text-[#9CA3AF] text-sm mt-6">
          Don't have an account?{' '}
          <Link href="/auth/register" className="text-[#7C3AED] hover:text-[#A855F7] transition-colors font-medium">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
