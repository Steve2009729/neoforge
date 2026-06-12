'use client';

import { motion } from 'framer-motion';

export default function DashboardPage() {
  const stats = [
    { title: 'Profile Views', value: '1,234', icon: '👁️' },
    { title: 'Projects', value: '12', icon: '🚀' },
    { title: 'Followers', value: '567', icon: '👥' },
  ];

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
    <div className="max-w-7xl">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-8"
      >
        <h1 className="text-4xl font-extrabold text-white mb-2">
          Welcome to Your Dashboard
        </h1>
        <p className="text-[#B8B5C9]">
          Manage your profile and portfolio here.
        </p>
      </motion.div>

      <motion.div
        className="grid md:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {stats.map((card, idx) => (
          <motion.div
            key={idx}
            variants={itemVariants}
            whileHover={{ y: -5 }}
            className="bg-[#1A1A2E] border border-[#2D2D4A] rounded-xl p-6 hover:border-[#7C3AED] transition-colors"
          >
            <div className="text-4xl mb-4">{card.icon}</div>
            <p className="text-[#6B6882] text-sm mb-2">{card.title}</p>
            <p className="text-3xl font-bold text-white">{card.value}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
