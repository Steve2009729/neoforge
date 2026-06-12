'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      {/* Animated background glows */}
      <div className="absolute -top-40 -left-40 w-80 h-80 rounded-full opacity-20 blur-3xl animate-float" style={{ background: 'linear-gradient(135deg, #7C3AED, #A855F7)' }} />
      <div className="absolute -bottom-40 -right-40 w-80 h-80 rounded-full opacity-20 blur-3xl animate-float" style={{ background: 'linear-gradient(135deg, #A855F7, #7C3AED)', animationDelay: '2s' }} />

      <div className="relative max-w-6xl mx-auto">
        {/* Eyebrow badge */}
        <motion.div
          className="flex justify-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block px-4 py-2 bg-[#1A1A2E] border border-[#7C3AED] rounded-full text-[#A855F7] text-sm font-semibold animate-pulse-glow">
            🚀 Join 1000+ developers
          </div>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white text-center mb-6 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          Build Your Developer{' '}
          <span className="bg-gradient-to-r from-[#7C3AED] to-[#A855F7] bg-clip-text text-transparent">
            Portfolio in Seconds
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          className="text-center text-lg text-[#B8B5C9] max-w-2xl mx-auto mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          NeoForge is the ultimate platform for developers to showcase their work, connect with the community, and land amazing opportunities.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex gap-4 justify-center mb-16 flex-wrap"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/auth/register"
              className="px-8 py-4 rounded-lg font-semibold text-white transition-all duration-300"
              style={{
                background: 'linear-gradient(135deg, #7C3AED 0%, #A855F7 100%)',
                boxShadow: '0 0 20px rgba(124, 58, 237, 0.4)',
              }}
            >
              Get Started
            </Link>
          </motion.div>
          <motion.button
            onClick={() => {
              const element = document.getElementById('features');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-8 py-4 border border-[#7C3AED] text-[#7C3AED] font-semibold rounded-lg hover:bg-[#7C3AED]/10 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Learn More
          </motion.button>
        </motion.div>

        {/* Demo section */}
        <motion.div
          className="relative rounded-xl overflow-hidden border border-[#2D2D4A]"
          style={{ backgroundColor: '#1A1A2E' }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          whileHover={{ boxShadow: '0 0 40px rgba(124, 58, 237, 0.3)' }}
        >
          <div className="p-6">
            <div className="aspect-video bg-gradient-to-br from-[#2D2D4A] to-[#0D0D14] rounded-lg flex items-center justify-center">
              <p className="text-[#6B6882]">Dashboard Preview Coming Soon</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
