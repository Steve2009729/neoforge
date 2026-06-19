'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export const Hero = () => {
  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '80px 24px 40px',
      backgroundColor: '#0D0D14',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Glow blobs */}
      <div style={{ position: 'absolute', top: '20%', right: '15%', width: '400px', height: '400px', background: 'rgba(124,58,237,0.15)', borderRadius: '50%', filter: 'blur(80px)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '20%', left: '10%', width: '300px', height: '300px', background: 'rgba(168,85,247,0.1)', borderRadius: '50%', filter: 'blur(80px)', pointerEvents: 'none' }} />

      {/* Grid background */}
      <div style={{
        position: 'absolute', inset: 0, opacity: 0.04, pointerEvents: 'none',
        backgroundImage: 'linear-gradient(rgba(124,58,237,1) 1px, transparent 1px), linear-gradient(90deg, rgba(124,58,237,1) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
      }} />

      <div style={{ position: 'relative', zIndex: 10, maxWidth: '900px', width: '100%', textAlign: 'center' }}>

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '32px' }}
        >
          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            padding: '8px 20px', borderRadius: '100px',
            background: 'rgba(124,58,237,0.15)',
            border: '1px solid rgba(124,58,237,0.4)',
            color: '#c4b5fd', fontSize: '14px', fontWeight: '500',
          }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#a855f7', animation: 'pulse 2s ease-in-out infinite' }} />
            The Developer Portfolio Platform
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          style={{ fontSize: 'clamp(40px, 7vw, 80px)', fontWeight: '800', lineHeight: 1.1, marginBottom: '24px', color: 'white' }}
        >
          Build Your{' '}
          <span style={{ background: 'linear-gradient(135deg, #c4b5fd, #7C3AED, #a855f7)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
            Portfolio
          </span>
          <br />
          Land Your{' '}
          <span style={{ background: 'linear-gradient(135deg, #c4b5fd, #7C3AED, #a855f7)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
            Dream Role
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          style={{ fontSize: 'clamp(16px, 2.5vw, 20px)', color: '#B8B5C9', marginBottom: '40px', maxWidth: '600px', margin: '0 auto 40px', lineHeight: 1.7 }}
        >
          NeoForge is the platform where developers build stunning portfolios,
          sync their GitHub, connect with the community, and get discovered by
          employers worldwide.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '60px' }}
        >
          <Link href="/auth/register" style={{ textDecoration: 'none' }}>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(124,58,237,0.6)' }}
              whileTap={{ scale: 0.95 }}
              style={{
                padding: '16px 32px', borderRadius: '12px', fontWeight: '700',
                fontSize: '18px', color: 'white', border: 'none', cursor: 'pointer',
                background: 'linear-gradient(135deg, #7C3AED, #a855f7)',
                boxShadow: '0 0 30px rgba(124,58,237,0.4)',
              }}
            >
              Get Started Free →
            </motion.button>
          </Link>
          <motion.a
            href="#features"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            style={{
              padding: '16px 32px', borderRadius: '12px', fontWeight: '600',
              fontSize: '18px', color: '#c4b5fd', border: '2px solid rgba(124,58,237,0.5)',
              cursor: 'pointer', textDecoration: 'none', display: 'inline-block',
              transition: 'all 0.2s',
            }}
          >
            See Features
          </motion.a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          style={{ display: 'flex', justifyContent: 'center', gap: '48px', flexWrap: 'wrap' }}
        >
          {[
            { value: '500+', label: 'Developers' },
            { value: '1,200+', label: 'Portfolios' },
            { value: '50+', label: 'Countries' },
          ].map(stat => (
            <div key={stat.label} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '28px', fontWeight: '800', color: '#a855f7', marginBottom: '4px' }}>{stat.value}</div>
              <div style={{ fontSize: '14px', color: '#6B6882' }}>{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
