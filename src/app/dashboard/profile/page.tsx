'use client';

import { motion } from 'framer-motion';

export default function DashboardProfilePage() {
  return (
    <motion.div
      className="max-w-4xl"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-4xl font-extrabold text-white mb-8">
        Profile Settings
      </h1>

      <div className="bg-[#1A1A2E] border border-[#2D2D4A] rounded-xl p-8 space-y-6">
        <div>
          <label className="block text-sm font-medium text-white mb-2">
            Username
          </label>
          <input
            type="text"
            defaultValue="john_dev"
            className="w-full px-4 py-2 bg-[#252541] border border-[#2D2D4A] rounded-lg text-white placeholder-[#6B6882] focus:border-[#7C3AED] outline-none transition-colors"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-white mb-2">
            Bio
          </label>
          <textarea
            defaultValue="Full-stack developer passionate about building amazing things."
            rows={4}
            className="w-full px-4 py-2 bg-[#252541] border border-[#2D2D4A] rounded-lg text-white placeholder-[#6B6882] focus:border-[#7C3AED] outline-none transition-colors resize-none"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-white mb-2">
              GitHub Username
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 bg-[#252541] border border-[#2D2D4A] rounded-lg text-white placeholder-[#6B6882] focus:border-[#7C3AED] outline-none transition-colors"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-white mb-2">
              Location
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 bg-[#252541] border border-[#2D2D4A] rounded-lg text-white placeholder-[#6B6882] focus:border-[#7C3AED] outline-none transition-colors"
            />
          </div>
        </div>

        <motion.button
          type="button"
          className="w-full py-3 text-white font-bold rounded-lg transition-all"
          style={{
            background: 'linear-gradient(135deg, #7C3AED 0%, #A855F7 100%)',
          }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Save Changes
        </motion.button>
      </div>
    </motion.div>
  );
}
