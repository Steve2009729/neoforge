'use client';

import { motion } from 'framer-motion';

const FEATURES = [
  {
    title: 'Smart Portfolio',
    description: 'Automatically sync your GitHub repos and showcase your best work',
    icon: '🚀',
  },
  {
    title: 'Community Feed',
    description: 'Connect with developers, share updates, and stay inspired',
    icon: '💬',
  },
  {
    title: 'Job Opportunities',
    description: 'Get discovered by companies looking for talented developers',
    icon: '💼',
  },
  {
    title: 'Code Snippets',
    description: 'Share and discover useful code snippets with the community',
    icon: '📝',
  },
  {
    title: 'Real-time Notifications',
    description: 'Stay updated with likes, comments, and new connections',
    icon: '🔔',
  },
  {
    title: 'Dark Mode',
    description: 'Eye-friendly dark theme for comfortable browsing',
    icon: '🌙',
  },
  {
    title: 'Analytics Dashboard',
    description: 'Track profile views, project popularity, and engagement metrics',
    icon: '📊',
  },
  {
    title: 'Skill Showcase',
    description: 'Highlight your technical skills and expertise',
    icon: '⭐',
  },
  {
    title: 'Global Network',
    description: 'Connect with developers from around the world',
    icon: '🌍',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
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

export default function Features() {
  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Everything You Need
          </h2>
          <p className="text-[#B8B5C9] text-lg">
            Powerful features to build and showcase your developer portfolio
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {FEATURES.map((feature, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="p-8 rounded-xl border border-[#2D2D4A] hover:border-[#7C3AED] transition-all"
              style={{
                backgroundColor: '#1A1A2E',
              }}
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-[#B8B5C9]">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
