'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/shared/Button';

export const HeroModern = () => {
  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '120px 24px 80px',
      backgroundColor: '#0D0D14',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Animated gradient orbs - Binance style */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut" 
        }}
        style={{ 
          position: 'absolute', 
          top: '10%', 
          right: '10%', 
          width: '500px', 
          height: '500px', 
          background: 'radial-gradient(circle, rgba(124,58,237,0.4) 0%, transparent 70%)', 
          borderRadius: '50%', 
          filter: 'blur(80px)', 
          pointerEvents: 'none' 
        }} 
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{ 
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
        style={{ 
          position: 'absolute', 
          bottom: '10%', 
          left: '5%', 
          width: '400px', 
          height: '400px', 
          background: 'radial-gradient(circle, rgba(168,85,247,0.3) 0%, transparent 70%)', 
          borderRadius: '50%', 
          filter: 'blur(80px)', 
          pointerEvents: 'none' 
        }} 
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.08, 0.15, 0.08],
        }}
        transition={{ 
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        style={{ 
          position: 'absolute', 
          top: '50%', 
          left: '50%', 
          transform: 'translate(-50%, -50%)',
          width: '600px', 
          height: '600px', 
          background: 'radial-gradient(circle, rgba(192,132,252,0.2) 0%, transparent 70%)', 
          borderRadius: '50%', 
          filter: 'blur(100px)', 
          pointerEvents: 'none' 
        }} 
      />

      {/* Grid background - subtle */}
      <div style={{
        position: 'absolute', 
        inset: 0, 
        opacity: 0.03, 
        pointerEvents: 'none',
        backgroundImage: 'linear-gradient(rgba(124,58,237,1) 1px, transparent 1px), linear-gradient(90deg, rgba(124,58,237,1) 1px, transparent 1px)',
        backgroundSize: '80px 80px',
      }} />

      {/* Floating particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 20 - 10, 0],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 3 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "easeInOut",
          }}
          style={{
            position: 'absolute',
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: `${2 + Math.random() * 4}px`,
            height: `${2 + Math.random() * 4}px`,
            borderRadius: '50%',
            background: 'rgba(168,85,247,0.8)',
            pointerEvents: 'none',
          }}
        />
      ))}

      <div style={{ 
        position: 'relative', 
        zIndex: 10, 
        maxWidth: '1100px', 
        width: '100%', 
        textAlign: 'center' 
      }}>

        {/* Premium Badge - Behance style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '32px' }}
        >
          <div style={{
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: '12px',
            padding: '10px 24px', 
            borderRadius: '100px',
            background: 'rgba(124,58,237,0.12)',
            border: '1px solid rgba(124,58,237,0.3)',
            backdropFilter: 'blur(12px)',
            boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
          }}>
            <motion.span 
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              style={{ 
                width: '8px', 
                height: '8px', 
                borderRadius: '50%', 
                background: 'linear-gradient(135deg, #a855f7, #7C3AED)',
                boxShadow: '0 0 12px rgba(168,85,247,0.8)'
              }} 
            />
            <span style={{
              color: '#c4b5fd', 
              fontSize: '15px', 
              fontWeight: '600',
              letterSpacing: '0.5px',
            }}>
              🚀 Trusted by 10,000+ Developers Worldwide
            </span>
          </div>
        </motion.div>

        {/* Main Headline - Bold & Modern */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          style={{ 
            fontSize: 'clamp(48px, 8vw, 96px)', 
            fontWeight: '900', 
            lineHeight: 1.1, 
            marginBottom: '28px', 
            color: 'white',
            letterSpacing: '-0.02em',
          }}
        >
          Build Your <br/>
          <span style={{ 
            background: 'linear-gradient(135deg, #e9d5ff 0%, #c4b5fd 25%, #a78bfa 50%, #7C3AED 75%, #a855f7 100%)',
            WebkitBackgroundClip: 'text', 
            WebkitTextFillColor: 'transparent', 
            backgroundClip: 'text',
            position: 'relative',
            display: 'inline-block',
          }}>
            Developer Portfolio
            <motion.div
              animate={{ scaleX: [0, 1] }}
              transition={{ duration: 0.8, delay: 0.8 }}
              style={{
                position: 'absolute',
                bottom: '-8px',
                left: 0,
                right: 0,
                height: '4px',
                background: 'linear-gradient(90deg, #7C3AED, #a855f7)',
                borderRadius: '2px',
                transformOrigin: 'left',
              }}
            />
          </span>
          <br/>
          in Minutes
        </motion.h1>

        {/* Subheading - Clean & Professional */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ 
            fontSize: 'clamp(18px, 2.5vw, 22px)', 
            color: '#D1D5DB', 
            marginBottom: '48px', 
            maxWidth: '720px', 
            margin: '0 auto 48px', 
            lineHeight: 1.8,
            fontWeight: '400',
          }}
        >
          The all-in-one platform for developers to <strong style={{ color: '#F5F3FF' }}>showcase projects</strong>, 
          sync GitHub repos, and <strong style={{ color: '#F5F3FF' }}>connect with opportunities</strong> globally.
        </motion.p>

        {/* CTA Buttons - Dework/Binance style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          style={{ 
            display: 'flex', 
            gap: '16px', 
            justifyContent: 'center', 
            flexWrap: 'wrap', 
            marginBottom: '72px' 
          }}
        >
          <Link href="/auth/register" style={{ textDecoration: 'none' }}>
            <Button 
              variant="primary" 
              size="xl"
              icon={<span>→</span>}
            >
              Start Building Free
            </Button>
          </Link>
          <Link href="#features" style={{ textDecoration: 'none' }}>
            <Button 
              variant="glass" 
              size="xl"
              icon={<span>▶</span>}
            >
              Watch Demo
            </Button>
          </Link>
        </motion.div>

        {/* Stats - Modern Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '24px',
            maxWidth: '900px',
            margin: '0 auto',
          }}
        >
          {[
            { value: '10K+', label: 'Active Developers', icon: '👥' },
            { value: '25K+', label: 'Portfolios Created', icon: '🎨' },
            { value: '150+', label: 'Countries', icon: '🌍' },
            { value: '99.9%', label: 'Uptime', icon: '⚡' },
          ].map((stat, i) => (
            <motion.div 
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 + i * 0.1, duration: 0.5 }}
              whileHover={{ 
                y: -4,
                boxShadow: '0 12px 40px rgba(124,58,237,0.25)',
              }}
              style={{ 
                padding: '24px 20px',
                background: 'rgba(26,26,46,0.6)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(124,58,237,0.2)',
                borderRadius: '16px',
                textAlign: 'center',
                transition: 'all 0.3s',
              }}
            >
              <div style={{ fontSize: '28px', marginBottom: '8px' }}>{stat.icon}</div>
              <div style={{ 
                fontSize: '32px', 
                fontWeight: '800', 
                background: 'linear-gradient(135deg, #a855f7, #7C3AED)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                marginBottom: '4px' 
              }}>
                {stat.value}
              </div>
              <div style={{ fontSize: '14px', color: '#9CA3AF', fontWeight: '500' }}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          style={{
            marginTop: '64px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '32px',
            flexWrap: 'wrap',
            opacity: 0.6,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', color: '#9CA3AF' }}>
            <span>✓</span> No credit card required
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', color: '#9CA3AF' }}>
            <span>✓</span> Free forever plan
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', color: '#9CA3AF' }}>
            <span>✓</span> Setup in 2 minutes
          </div>
        </motion.div>
      </div>
    </section>
  );
};
