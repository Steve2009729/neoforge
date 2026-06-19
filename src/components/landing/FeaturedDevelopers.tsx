'use client';

import { motion } from 'framer-motion';

const FEATURED = [
  { name: 'Linus Torvalds', username: 'torvalds', bio: 'Creator of Linux and Git', repos: 8, followers: '220k', github: 'https://github.com/torvalds', initials: 'LT' },
  { name: 'Dan Abramov', username: 'gaearon', bio: 'Working on React at Meta', repos: 248, followers: '87k', github: 'https://github.com/gaearon', initials: 'DA' },
  { name: 'Sindre Sorhus', username: 'sindresorhus', bio: 'Full-time open-sourcerer', repos: 1200, followers: '68k', github: 'https://github.com/sindresorhus', initials: 'SS' },
  { name: 'Evan You', username: 'yyx990803', bio: 'Creator of Vue.js and Vite', repos: 198, followers: '91k', github: 'https://github.com/yyx990803', initials: 'EY' },
  { name: 'Addy Osmani', username: 'addyosmani', bio: 'Engineering Manager at Google', repos: 218, followers: '56k', github: 'https://github.com/addyosmani', initials: 'AO' },
  { name: 'TJ Holowaychuk', username: 'tj', bio: 'Creator of Express.js and more', repos: 302, followers: '48k', github: 'https://github.com/tj', initials: 'TJ' },
];

export const FeaturedDevelopers = () => (
  <section id="developers" style={{ padding: '80px 24px', backgroundColor: '#0D0D14' }}>
    <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{ marginBottom: '48px' }}
      >
        <h2 style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: '800', color: 'white', marginBottom: '12px' }}>
          Popular Developers
        </h2>
        <p style={{ color: '#B8B5C9', fontSize: '16px' }}>World-class engineers making an impact</p>
      </motion.div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '24px' }}>
        {FEATURED.map((dev, i) => (
          <motion.a
            key={dev.username}
            href={dev.github}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            whileHover={{ y: -4, boxShadow: '0 0 30px rgba(124,58,237,0.3)' }}
            style={{
              display: 'block', textDecoration: 'none',
              backgroundColor: '#1A1A2E', borderRadius: '16px',
              border: '1px solid rgba(124,58,237,0.3)', padding: '24px',
              transition: 'all 0.3s', cursor: 'pointer',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '12px' }}>
              <div style={{
                width: '52px', height: '52px', borderRadius: '50%', flexShrink: 0,
                background: 'linear-gradient(135deg, #7C3AED, #a855f7)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontWeight: '700', color: 'white', fontSize: '16px',
                border: '2px solid rgba(124,58,237,0.5)',
              }}>
                {dev.initials}
              </div>
              <div>
                <div style={{ fontWeight: '700', color: 'white', fontSize: '16px' }}>{dev.name}</div>
                <div style={{ fontSize: '13px', color: '#a855f7' }}>@{dev.username}</div>
              </div>
            </div>
            <p style={{ fontSize: '14px', color: '#B8B5C9', marginBottom: '16px', lineHeight: 1.6 }}>{dev.bio}</p>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', color: '#6B6882' }}>
              <span>{dev.followers} followers</span>
              <span>{dev.repos} repos</span>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  </section>
);
