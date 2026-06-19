'use client';

import { motion } from 'framer-motion';

const FEATURES = [
  { icon: '🎨', title: 'Beautiful Portfolio', desc: 'Create a stunning portfolio that showcases your best work and impresses employers instantly.' },
  { icon: '🔗', title: 'GitHub Sync', desc: 'Auto-sync your repos, commits, and contribution graph directly to your portfolio.' },
  { icon: '👥', title: 'Social Network', desc: 'Post updates, connect with developers, like, comment, and build your community.' },
  { icon: '🔍', title: 'Discovery', desc: 'Get found by employers and collaborators searching for your exact skill set.' },
  { icon: '📊', title: 'Analytics', desc: 'Track who views your portfolio, from where, and which projects get the most attention.' },
  { icon: '🌍', title: 'Dev World Feed', desc: 'Latest from GitHub trending, HackerNews, Dev.to and more — all in one place.' },
  { icon: '🤖', title: 'AI Bio Generator', desc: 'Let AI craft a professional bio from your skills, experience and specialization.' },
  { icon: '📁', title: 'File Upload', desc: 'Drag and drop code files, screenshots, and documents directly to your projects.' },
  { icon: '🚀', title: 'Public Portfolio', desc: 'Share your portfolio URL with anyone — no account needed to view your work.' },
];

export const Features = () => (
  <section id="features" style={{ padding: '100px 24px', backgroundColor: '#0D0D14' }}>
    <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{ textAlign: 'center', marginBottom: '64px' }}
      >
        <h2 style={{ fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: '800', color: 'white', marginBottom: '16px' }}>
          Everything You Need
        </h2>
        <p style={{ color: '#B8B5C9', fontSize: '18px', maxWidth: '600px', margin: '0 auto', lineHeight: 1.7 }}>
          One platform. All the tools you need to build, share, and grow your developer brand.
        </p>
      </motion.div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '24px' }}>
        {FEATURES.map((f, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            whileHover={{ y: -4, boxShadow: '0 0 30px rgba(124,58,237,0.2)' }}
            style={{
              padding: '32px', backgroundColor: '#1A1A2E', borderRadius: '16px',
              border: '1px solid rgba(124,58,237,0.25)',
              transition: 'all 0.3s', cursor: 'default',
            }}
          >
            <div style={{ fontSize: '40px', marginBottom: '20px' }}>{f.icon}</div>
            <h3 style={{ fontSize: '20px', fontWeight: '700', color: 'white', marginBottom: '12px' }}>{f.title}</h3>
            <p style={{ color: '#B8B5C9', fontSize: '15px', lineHeight: 1.7 }}>{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
