'use client';

import { motion } from 'framer-motion';

export default function DashboardSettingsPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <motion.div
      className="max-w-4xl"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-4xl font-extrabold text-white mb-8">
        Settings
      </h1>

      <motion.div
        className="space-y-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Privacy Section */}
        <motion.div
          variants={itemVariants}
          className="bg-[#1A1A2E] border border-[#2D2D4A] rounded-xl p-6"
        >
          <h2 className="text-xl font-bold text-white mb-4">Privacy</h2>
          <div className="space-y-4">
            <label className="flex items-center gap-4 cursor-pointer">
              <input
                type="checkbox"
                defaultChecked
                className="w-4 h-4 rounded"
              />
              <div>
                <p className="text-white font-medium">Make profile public</p>
                <p className="text-[#6B6882] text-sm">
                  Allow others to view your portfolio
                </p>
              </div>
            </label>
            <label className="flex items-center gap-4 cursor-pointer">
              <input
                type="checkbox"
                defaultChecked
                className="w-4 h-4 rounded"
              />
              <div>
                <p className="text-white font-medium">Show email</p>
                <p className="text-[#6B6882] text-sm">
                  Display your email publicly
                </p>
              </div>
            </label>
          </div>
        </motion.div>

        {/* Notifications Section */}
        <motion.div
          variants={itemVariants}
          className="bg-[#1A1A2E] border border-[#2D2D4A] rounded-xl p-6"
        >
          <h2 className="text-xl font-bold text-white mb-4">
            Notifications
          </h2>
          <div className="space-y-4">
            <label className="flex items-center gap-4 cursor-pointer">
              <input
                type="checkbox"
                defaultChecked
                className="w-4 h-4 rounded"
              />
              <div>
                <p className="text-white font-medium">Email notifications</p>
                <p className="text-[#6B6882] text-sm">
                  Receive updates via email
                </p>
              </div>
            </label>
            <label className="flex items-center gap-4 cursor-pointer">
              <input
                type="checkbox"
                defaultChecked
                className="w-4 h-4 rounded"
              />
              <div>
                <p className="text-white font-medium">Message alerts</p>
                <p className="text-[#6B6882] text-sm">
                  Get notified of new messages
                </p>
              </div>
            </label>
          </div>
        </motion.div>

        {/* Danger Zone */}
        <motion.div
          variants={itemVariants}
          className="bg-[#1A1A2E] border border-red-500 rounded-xl p-6"
        >
          <h2 className="text-xl font-bold text-red-500 mb-4">
            Danger Zone
          </h2>
          <motion.button
            type="button"
            className="px-6 py-2 border border-red-500 text-red-500 rounded-lg hover:bg-red-500/10 transition-colors font-medium"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Delete Account
          </motion.button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
