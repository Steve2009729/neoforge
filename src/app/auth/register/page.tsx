'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function RegisterPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');

    // Validation
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (formData.password.length < 8) {
      setError('Password must be at least 8 characters');
      return;
    }

    setIsLoading(true);

    // Placeholder for registration logic
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
          <p className="text-[#D1D5DB]">Create your developer portfolio</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-white mb-2">
              Username
            </label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-[#252541] border border-[#2D2D47] rounded-lg text-white placeholder-[#9CA3AF] focus:border-[#7C3AED] outline-none transition-colors"
              placeholder="john_dev"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-white mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
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
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-[#252541] border border-[#2D2D47] rounded-lg text-white placeholder-[#9CA3AF] focus:border-[#7C3AED] outline-none transition-colors"
              placeholder="••••••••"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-white mb-2">
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
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
            {isLoading ? 'Creating account...' : 'Create Account'}
          </button>
        </form>

        {/* Divider */}
        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-[#2D2D47]" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-[#1A1A2E] text-[#9CA3AF]">Or sign up with</span>
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
          Already have an account?{' '}
          <Link href="/auth/login" className="text-[#7C3AED] hover:text-[#A855F7] transition-colors font-medium">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
