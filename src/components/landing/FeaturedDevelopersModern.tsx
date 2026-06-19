'use client';

import { motion } from 'framer-motion';

const FEATURED = [
  { 
    name: 'Linus Torvalds', 
    username: 'torvalds', 
    bio: 'Creator of Linux and Git • Open Source Pioneer', 
    repos: 8, 
    followers: '220k', 
    github: 'https://github.com/torvalds', 
    initials: 'LT',
    tags: ['Linux', 'Git', 'C'],
  },
  { 
    name: 'Dan Abramov', 
    username: 'gaearon', 
    bio: 'Working on React at Meta • Redux Creator', 
    repos: 248, 
    followers: '87k', 
    github: 'https://github.com/gaearon', 
    initials: 'DA',
    tags: ['React', 'JavaScript', 'Redux'],
  },
  { 
    name: 'Sindre Sorhus', 
    username: 'sindresorhus', 
    bio: 'Full-time open-sourcerer • 1000+ npm packages', 
    repos: 1200, 
    followers: '68k', 
    github: 'https://github.com/sindresorhus', 
    initials: 'SS',
    tags: ['TypeScript', 'Node.js', 'Swift'],
  },
  { 
    name: 'Evan You', 
    username: 'yyx990803', 
    bio: 'Creator of Vue.js and Vite • Independent Developer', 
    repos: 198, 
    followers: '91k', 
    github: 'https://github.com/yyx990803', 
    initials: 'EY',
    tags: ['Vue.js', 'Vite', 'JavaScript'],
  },
  { 
    name: 'Addy Osmani', 
    username: 'addyosmani', 
    bio: 'Engineering Manager at Google Chrome', 
    repos: 218, 
    followers: '56k', 
    github: 'https://github.com/addyosmani', 
    initials: 'AO',
    tags: ['JavaScript', 'Performance', 'Chrome'],
  },
  { 
    name: 'TJ Holowaychuk', 
    username: 'tj', 
    bio: 'Creator of Express.js, Koa, and many more', 
    repos: 302, 
    followers: '48k', 
    github: 'https://github.com/tj', 
    initials: 'TJ',
    tags: ['Node.js', 'Go', 'Express'],
  },
];

export const FeaturedDevelopersModern = () => (
  <section id="developers" style={{ 
    padding: '120px 24px', 
    backgroundColor: '#0D0D14',
    position: 'relative',
    overflow: 'hidden',
  }}>
    {/* Background glow */}
    <div style={{
      position: 'absolute',
      top: '20%',
      right: '10%',
      width: '600px',
      height: '600px',
      background: 'radial-gradient(circle, rgba(168,85,247,0.1) 0%, transparent 70%)',
      borderRadius: '50%',
      filter: 'blur(100px)',
      pointerEvents: 'none',
    }} />

    <div style={{ maxWidth: '1400px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{ marginBottom: '64px' }}
      >
        {/* Section badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          style={{ marginBottom: '24px', textAlign: 'center' }}
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
            FEATURED DEVELOPERS
          </span>
        </motion.div>

        <h2 style={{ 
          fontSize: 'clamp(32px, 5vw, 56px)', 
          fontWeight: '900', 
          color: 'white', 
          marginBottom: '16px',
          textAlign: 'center',
          letterSpacing: '-0.02em',
        }}>
          Join{' '}
          <span style={{
            background: 'linear-gradient(135deg, #c4b5fd, #7C3AED, #a855f7)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>
            World-Class
          </span>{' '}
          Developers
        </h2>
        <p style={{ 
          color: '#D1D5DB', 
          fontSize: '18px', 
          textAlign: 'center',
          maxWidth: '600px',
          margin: '0 auto',
        }}>
          Showcase your work alongside industry leaders and innovators
        </p>
      </motion.div>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', 
        gap: '28px' 
      }}>
        {FEATURED.map((dev, i) => (
          <motion.a
            key={dev.username}
            href={dev.github}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.5 }}
            whileHover={{ 
              y: -8,
              scale: 1.02,
            }}
            style={{
              display: 'block', 
              textDecoration: 'none',
              position: 'relative',
              backgroundColor: 'rgba(26,26,46,0.5)', 
              backdropFilter: 'blur(20px)',
              borderRadius: '20px',
              border: '1px solid rgba(124,58,237,0.2)', 
              padding: '28px',
              transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
              cursor: 'pointer',
              overflow: 'hidden',
            }}
          >
            {/* Hover gradient overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'linear-gradient(135deg, rgba(124,58,237,0.1), rgba(168,85,247,0.1))',
                pointerEvents: 'none',
                borderRadius: '20px',
              }}
            />

            {/* Border glow on hover */}
            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              style={{
                position: 'absolute',
                top: -1,
                left: -1,
                right: -1,
                bottom: -1,
                background: 'linear-gradient(135deg, rgba(124,58,237,0.5), rgba(168,85,247,0.5))',
                borderRadius: '20px',
                filter: 'blur(8px)',
                zIndex: -1,
                pointerEvents: 'none',
              }}
            />

            <div style={{ position: 'relative', zIndex: 1 }}>
              {/* Header with avatar and name */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  style={{
                    width: '56px', 
                    height: '56px', 
                    borderRadius: '14px', 
                    flexShrink: 0,
                    background: 'linear-gradient(135deg, #7C3AED, #a855f7)',
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    fontWeight: '800', 
                    color: 'white', 
                    fontSize: '18px',
                    border: '2px solid rgba(124,58,237,0.3)',
                    boxShadow: '0 4px 16px rgba(124,58,237,0.3)',
                  }}
                >
                  {dev.initials}
                </motion.div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ 
                    fontWeight: '700', 
                    color: 'white', 
                    fontSize: '18px',
                    marginBottom: '4px',
                    letterSpacing: '-0.01em',
                  }}>
                    {dev.name}
                  </div>
                  <div style={{ 
                    fontSize: '14px', 
                    color: '#a855f7',
                    fontWeight: '600',
                  }}>
                    @{dev.username}
                  </div>
                </div>
              </div>

              {/* Bio */}
              <p style={{ 
                fontSize: '15px', 
                color: '#D1D5DB', 
                marginBottom: '16px', 
                lineHeight: 1.6,
                minHeight: '48px',
              }}>
                {dev.bio}
              </p>

              {/* Tags */}
              <div style={{ 
                display: 'flex', 
                flexWrap: 'wrap', 
                gap: '8px', 
                marginBottom: '16px' 
              }}>
                {dev.tags.map(tag => (
                  <span 
                    key={tag}
                    style={{
                      padding: '4px 12px',
                      borderRadius: '6px',
                      background: 'rgba(124,58,237,0.15)',
                      border: '1px solid rgba(124,58,237,0.3)',
                      color: '#c4b5fd',
                      fontSize: '12px',
                      fontWeight: '600',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Stats */}
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                paddingTop: '16px',
                borderTop: '1px solid rgba(124,58,237,0.15)',
              }}>
                <div>
                  <div style={{ 
                    fontSize: '20px', 
                    fontWeight: '800', 
                    background: 'linear-gradient(135deg, #a855f7, #7C3AED)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}>
                    {dev.followers}
                  </div>
                  <div style={{ fontSize: '12px', color: '#9CA3AF', fontWeight: '500' }}>
                    Followers
                  </div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ 
                    fontSize: '20px', 
                    fontWeight: '800', 
                    background: 'linear-gradient(135deg, #a855f7, #7C3AED)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}>
                    {dev.repos}
                  </div>
                  <div style={{ fontSize: '12px', color: '#9CA3AF', fontWeight: '500' }}>
                    Repositories
                  </div>
                </div>
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  </section>
);
