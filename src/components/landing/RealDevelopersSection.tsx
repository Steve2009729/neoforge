'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const FALLBACK_DEVS = [
  {
    login: 'torvalds',
    name: 'Linus Torvalds',
    bio: 'Creator of Linux',
    avatar_url: 'https://avatars.githubusercontent.com/u/1024588?v=4',
    public_repos: 5,
    followers: 200000,
  },
  {
    login: 'dan_abramov',
    name: 'Dan Abramov',
    bio: 'React Core Team',
    avatar_url: 'https://avatars.githubusercontent.com/u/810438?v=4',
    public_repos: 50,
    followers: 150000,
  },
  {
    login: 'sindresorhus',
    name: 'Sindre Sorhus',
    bio: 'Open source enthusiast',
    avatar_url: 'https://avatars.githubusercontent.com/u/170270?v=4',
    public_repos: 1000,
    followers: 100000,
  },
  {
    login: 'gvanrossum',
    name: 'Guido van Rossum',
    bio: 'Creator of Python',
    avatar_url: 'https://avatars.githubusercontent.com/u/6524?v=4',
    public_repos: 20,
    followers: 180000,
  },
  {
    login: 'fabpot',
    name: 'Fabien Potencier',
    bio: 'Creator of Symfony',
    avatar_url: 'https://avatars.githubusercontent.com/u/57456?v=4',
    public_repos: 200,
    followers: 80000,
  },
  {
    login: 'octocat',
    name: 'The Octocat',
    bio: 'GitHub Mascot',
    avatar_url: 'https://avatars.githubusercontent.com/u/1?v=4',
    public_repos: 2,
    followers: 10000,
  },
];

export default function RealDevelopersSection() {
  const [developers, setDevelopers] = useState(FALLBACK_DEVS);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDevs = async () => {
      try {
        const response = await fetch('/api/github/stats');
        if (response.ok) {
          const data = await response.json();
          setDevelopers(data);
        }
      } catch (error) {
        console.error('Failed to fetch developers:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchDevs();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
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
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Featured Developers
          </h2>
          <p className="text-[#B8B5C9]">
            Discover amazing developers in our community
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {developers.map((dev, idx) => (
            <motion.div key={idx} variants={itemVariants}>
              <Link href={`/portfolio/${dev.login}`}>
                <motion.div
                  className="p-6 rounded-xl border border-[#2D2D4A] hover:border-[#7C3AED] transition-all cursor-pointer h-full"
                  style={{ backgroundColor: '#1A1A2E' }}
                  whileHover={{
                    boxShadow: '0 0 30px rgba(124, 58, 237, 0.3)',
                    borderColor: '#7C3AED',
                  }}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={dev.avatar_url}
                      alt={dev.name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-[#7C3AED]"
                    />
                    <div>
                      <h3 className="text-white font-semibold text-lg">{dev.name}</h3>
                      <p className="text-[#7C3AED] text-sm">@{dev.login}</p>
                    </div>
                  </div>

                  {dev.bio && (
                    <p className="text-[#B8B5C9] text-sm mb-4">{dev.bio}</p>
                  )}

                  <div className="flex gap-4 text-sm">
                    <div>
                      <p className="text-[#A855F7] font-semibold">{dev.public_repos}</p>
                      <p className="text-[#6B6882] text-xs">Projects</p>
                    </div>
                    <div>
                      <p className="text-[#A855F7] font-semibold">
                        {dev.followers > 1000 ? `${(dev.followers / 1000).toFixed(1)}k` : dev.followers}
                      </p>
                      <p className="text-[#6B6882] text-xs">Followers</p>
                    </div>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
