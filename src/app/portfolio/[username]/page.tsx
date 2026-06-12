'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import Navbar from '@/components/shared/Navbar';
import Footer from '@/components/landing/Footer';

export default function PortfolioPage({
  params,
}: {
  params: { username: string };
}) {
  const { username } = params;

  // Placeholder data - would be fetched from API in production
  const profile = {
    username,
    name: 'John Developer',
    bio: 'Full-stack developer passionate about building amazing things.',
    avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${username}`,
    followers: 1234,
    following: 567,
    projects: 12,
    skills: ['React', 'TypeScript', 'Node.js', 'PostgreSQL'],
  };

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
    <div className="min-h-screen bg-[#0D0D14]">
      <Navbar />

      <div className="pt-20 pb-12">
        {/* Hero Section */}
        <motion.div
          className="bg-gradient-to-b from-[#7C3AED]/10 to-transparent py-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
              {/* Avatar */}
              <motion.img
                src={profile.avatar}
                alt={profile.name}
                className="rounded-full w-40 h-40 object-cover border-4 border-[#7C3AED]"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              />

              {/* Info */}
              <motion.div
                className="flex-1 text-center md:text-left"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                <motion.h1
                  variants={itemVariants}
                  className="text-4xl font-extrabold text-white mb-2"
                >
                  {profile.name}
                </motion.h1>
                <motion.p
                  variants={itemVariants}
                  className="text-[#B8B5C9] text-lg mb-4"
                >
                  @{username}
                </motion.p>
                <motion.p
                  variants={itemVariants}
                  className="text-[#B8B5C9] mb-6 max-w-2xl"
                >
                  {profile.bio}
                </motion.p>

                {/* Stats */}
                <motion.div
                  variants={itemVariants}
                  className="flex gap-8 justify-center md:justify-start mb-6"
                >
                  <div>
                    <p className="text-[#6B6882] text-sm">Followers</p>
                    <p className="text-2xl font-bold text-white">
                      {profile.followers.toLocaleString()}
                    </p>
                  </div>
                  <div>
                    <p className="text-[#6B6882] text-sm">Following</p>
                    <p className="text-2xl font-bold text-white">
                      {profile.following}
                    </p>
                  </div>
                  <div>
                    <p className="text-[#6B6882] text-sm">Projects</p>
                    <p className="text-2xl font-bold text-white">
                      {profile.projects}
                    </p>
                  </div>
                </motion.div>

                {/* Actions */}
                <motion.div
                  variants={itemVariants}
                  className="flex gap-4 justify-center md:justify-start flex-wrap"
                >
                  <motion.button
                    type="button"
                    className="px-6 py-2 text-white font-bold rounded-lg transition-all"
                    style={{
                      background: 'linear-gradient(135deg, #7C3AED 0%, #A855F7 100%)',
                    }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Follow
                  </motion.button>
                  <motion.button
                    type="button"
                    className="px-6 py-2 border border-[#7C3AED] text-[#7C3AED] font-bold rounded-lg hover:bg-[#7C3AED]/10 transition-all"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Message
                  </motion.button>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          className="max-w-6xl mx-auto px-4 py-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold text-white mb-6">Skills</h2>
          <motion.div
            className="flex flex-wrap gap-3"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {profile.skills.map((skill) => (
              <motion.span
                key={skill}
                variants={itemVariants}
                className="px-4 py-2 bg-[#1A1A2E] border border-[#7C3AED] text-[#A855F7] rounded-lg"
                whileHover={{ scale: 1.05 }}
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>

        {/* Projects Section */}
        <motion.div
          className="max-w-6xl mx-auto px-4 py-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold text-white mb-6">
            Featured Projects
          </h2>
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[1, 2, 3].map((idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="bg-[#1A1A2E] border border-[#2D2D4A] rounded-xl overflow-hidden hover:border-[#7C3AED] transition-all"
              >
                <div className="w-full h-40 bg-gradient-to-br from-[#2D2D4A] to-[#0D0D14] flex items-center justify-center">
                  <p className="text-[#6B6882]">Project Image</p>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-white mb-2">
                    Project {idx}
                  </h3>
                  <p className="text-[#B8B5C9] text-sm mb-4">
                    Brief description of the project and technologies used.
                  </p>
                  <Link
                    href="#"
                    className="text-[#7C3AED] hover:text-[#A855F7] font-medium transition-colors"
                  >
                    View Project →
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
}
