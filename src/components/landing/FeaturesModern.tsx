'use client';

import { motion } from 'framer-motion';

const FEATURES = [
  { 
    icon: '🎨', 
    title: 'Beautiful Portfolios', 
    desc: 'Create stunning, responsive portfolios with customizable themes that showcase your work professionally.',
    gradient: 'linear-gradient(135deg, rgba(124,58,237,0.2), rgba(168,85,247,0.1))',
  },
  { 
    icon: '🔗', 
    title: 'GitHub Integration', 
    desc: 'Auto-sync repositories, commits, and contribution graphs directly to your portfolio in real-time.',
    gradient: 'linear-gradient(135deg, rgba(168,85,247,0.2), rgba(192,132,252,0.1))',
  },
  { 
    icon: '👥', 
    title: 'Developer Network', 
    desc: 'Connect with developers worldwide, share updates, collaborate on projects, and grow your community.',
    gradient: 'linear-gradient(135deg, rgba(192,132,252,0.2), rgba(124,58,237,0.1))',
  },
  { 
    icon: '🔍', 
    title: 'Get Discovered', 
    desc: 'Increase visibility with SEO-optimized portfolios. Get found by recruiters searching for your skills.',
    gradient: 'linear-gradient(135deg, rgba(124,58,237,0.2), rgba(168,85,247,0.1))',
  },
  { 
    icon: '📊', 
    title: 'Advanced Analytics', 
    desc: 'Track portfolio views, visitor demographics, popular projects, and engagement metrics in real-time.',
    gradient: 'linear-gradient(135deg, rgba(168,85,247,0.2), rgba(192,132,252,0.1))',
  },
  { 
    icon: '🌍', 
    title: 'Dev World Feed', 
    desc: 'Stay updated with curated content from GitHub Trending, HackerNews, Dev.to, and more in one place.',
    gradient: 'linear-gradient(135deg, rgba(192,132,252,0.2), rgba(124,58,237,0.1))',
  },
  { 
    icon: '🤖', 
    title: 'AI-Powered Tools', 
    desc: 'Generate professional bios, project descriptions, and content using advanced AI assistance.',
    gradient: 'linear-gradient(135deg, rgba(124,58,237,0.2), rgba(168,85,247,0.1))',
  },
  { 
    icon: '📁', 
    title: 'Media Management', 
    desc: 'Upload and organize code snippets, screenshots, documents, and media files with ease.',
    gradient: 'linear-gradient(135deg, rgba(168,85,247,0.2), rgba(192,132,252,0.1))',
  },
  { 
    icon: '🚀', 
    title: 'Instant Publishing', 
    desc: 'Share your portfolio with a custom URL instantly. No account needed for viewers to access your work.',
    gradient: 'linear-gradient(135deg, rgba(192,132,252,0.2), rgba(124,58,237,0.1))',
  },
];

export const FeaturesModern = () => (
  <section id="features" style={{ 
    padding: '120px 24px', 
    backgroundColor: '#0D0D14',
    position: 'relative',
    overflow: 'hidden',
  }}>
    {/* Background elements */}
    <div style={{
      position: 'absolute',
      top: '10%',
      left: '50%',
      transform: 'translateX(-50%)',
      width: '800px',
      height: '800px',
      background: 'radial-gradient(circle, rgba(124,58,237,0.1) 0%, transparent 70%)',
      borderRadius: '50%',
      filter: 'blur(100px)',
      pointerEvents: 'none',
    }} />

    <div style={{ maxWidth: '1400px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{ textAlign: 'center', marginBottom: '80px' }}
      >
        {/* Section badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          style={{ marginBottom: '24px' }}
        >
          <span style={{
            display: 'inline-block',
            padding: '8px 20px',
            borderRadius: '100px',
            background: 'rgba(124,58,237,0.1)',
            border: '1px solid rgba(124,58,237,0.3)',
            color: '#c4b5fd',
            fontSize: '14px',
            fontWeight: '600',
            letterSpacing: '0.5px',
          }}>
            FEATURES
          </span>
        </motion.div>

        <h2 style={{ 
          fontSize: 'clamp(36px, 6vw, 64px)', 
          fontWeight: '900', 
          color: 'white', 
          marginBottom: '20px',
          letterSpacing: '-0.02em',
        }}>
          Everything You Need to{' '}
          <span style={{
            background: 'linear-gradient(135deg, #c4b5fd, #7C3AED, #a855f7)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>
            Succeed
          </span>
        </h2>
        <p style={{ 
          color: '#D1D5DB', 
          fontSize: '20px', 
          maxWidth: '700px', 
          margin: '0 auto', 
          lineHeight: 1.7,
          fontWeight: '400',
        }}>
          One powerful platform with all the tools to build, share, and grow your developer brand.
        </p>
      </motion.div>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', 
        gap: '28px',
      }}>
        {FEATURES.map((f, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05, duration: 0.5 }}
            whileHover={{ 
              y: -8, 
              scale: 1.02,
            }}
            style={{
              position: 'relative',
              padding: '36px 32px',
              background: 'rgba(26,26,46,0.5)',
              backdropFilter: 'blur(20px)',
              borderRadius: '20px',
              border: '1px solid rgba(124,58,237,0.2)',
              transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
              cursor: 'default',
              overflow: 'hidden',
            }}
          >
            {/* Gradient overlay on hover */}
            <motion.div
              whileHover={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: f.gradient,
                borderRadius: '20px',
                transition: 'opacity 0.4s',
                pointerEvents: 'none',
                zIndex: 0,
              }}
            />

            {/* Border glow effect */}
            <motion.div
              whileHover={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              style={{
                position: 'absolute',
                top: -1,
                left: -1,
                right: -1,
                bottom: -1,
                background: 'linear-gradient(135deg, rgba(124,58,237,0.5), rgba(168,85,247,0.5))',
                borderRadius: '20px',
                transition: 'opacity 0.4s',
                pointerEvents: 'none',
                zIndex: -1,
                filter: 'blur(8px)',
              }}
            />

            <div style={{ position: 'relative', zIndex: 1 }}>
              {/* Icon */}
              <motion.div 
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: 'spring', stiffness: 300 }}
                style={{ 
                  fontSize: '48px', 
                  marginBottom: '20px',
                  display: 'inline-block',
                }}
              >
                {f.icon}
              </motion.div>

              {/* Title */}
              <h3 style={{ 
                fontSize: '22px', 
                fontWeight: '700', 
                color: 'white', 
                marginBottom: '12px',
                letterSpacing: '-0.01em',
              }}>
                {f.title}
              </h3>

              {/* Description */}
              <p style={{ 
                color: '#D1D5DB', 
                fontSize: '15px', 
                lineHeight: 1.7,
                fontWeight: '400',
              }}>
                {f.desc}
              </p>

              {/* Learn more link */}
              <motion.div
                whileHover={{ x: 5 }}
                style={{
                  marginTop: '16px',
                  color: '#a855f7',
                  fontSize: '14px',
                  fontWeight: '600',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  cursor: 'pointer',
                }}
              >
                Learn more
                <span style={{ fontSize: '12px' }}>→</span>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA at bottom */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        style={{
          marginTop: '80px',
          textAlign: 'center',
        }}
      >
        <p style={{ 
          color: '#9CA3AF', 
          fontSize: '16px', 
          marginBottom: '24px' 
        }}>
          Ready to build your dream portfolio?
        </p>
        <motion.a
          href="/auth/register"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          style={{
            display: 'inline-block',
            padding: '16px 40px',
            borderRadius: '12px',
            background: 'linear-gradient(135deg, #7C3AED, #a855f7)',
            color: 'white',
            textDecoration: 'none',
            fontWeight: '700',
            fontSize: '18px',
            boxShadow: '0 0 30px rgba(124,58,237,0.4)',
          }}
        >
          Get Started Free →
        </motion.a>
      </motion.div>
    </div>
  </section>
);
