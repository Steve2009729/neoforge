'use client';

import { motion } from 'framer-motion';

export default function DashboardProjectsPage() {
  const projects = [1, 2, 3, 4];

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
      className="max-w-7xl"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-4xl font-extrabold text-white mb-2">
            Your Projects
          </h1>
          <p className="text-[#B8B5C9]">Manage and showcase your work</p>
        </div>
        <motion.button
          type="button"
          className="px-6 py-3 text-white font-bold rounded-lg transition-all"
          style={{
            background: 'linear-gradient(135deg, #7C3AED 0%, #A855F7 100%)',
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Add Project
        </motion.button>
      </div>

      <motion.div
        className="grid md:grid-cols-2 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {projects.map((idx) => (
          <motion.div
            key={idx}
            variants={itemVariants}
            whileHover={{ y: -5 }}
            className="bg-[#1A1A2E] border border-[#2D2D4A] rounded-xl p-6 hover:border-[#7C3AED] transition-all"
          >
            <div className="w-full h-40 bg-gradient-to-br from-[#2D2D4A] to-[#0D0D14] rounded-lg mb-4 flex items-center justify-center">
              <p className="text-[#6B6882]">Project Image</p>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">
              Project {idx}
            </h3>
            <p className="text-[#B8B5C9] text-sm mb-4">
              Brief project description goes here
            </p>
            <button className="text-[#7C3AED] hover:text-[#A855F7] font-medium transition-colors">
              Edit Project
            </button>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
