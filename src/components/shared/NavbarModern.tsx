'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './Button';

export const NavbarModern = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { label: 'Features', href: '#features' },
    { label: 'Developers', href: '#developers' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          backgroundColor: scrolled ? 'rgba(13,13,20,0.8)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(124,58,237,0.15)' : '1px solid transparent',
          boxShadow: scrolled ? '0 4px 24px rgba(0,0,0,0.4)' : 'none',
        }}
      >
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '72px' }}>
            
            {/* Logo */}
            <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
              <motion.div 
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                style={{
                  width: '40px', 
                  height: '40px', 
                  borderRadius: '10px',
                  background: 'linear-gradient(135deg, #7C3AED, #a855f7)',
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  fontWeight: 'bold', 
                  color: 'white', 
                  fontSize: '20px',
                  boxShadow: '0 4px 16px rgba(124,58,237,0.4)',
                }}
              >
                N
              </motion.div>
              <span style={{ 
                fontWeight: '800', 
                fontSize: '22px', 
                color: 'white',
                letterSpacing: '-0.01em',
              }}>
                NeoForge
              </span>
            </Link>

            {/* Desktop Links */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '40px' }} className="hidden md:flex">
              {links.map(link => (
                <Link 
                  key={link.label} 
                  href={link.href}
                  style={{ 
                    color: '#D1D5DB', 
                    textDecoration: 'none', 
                    fontSize: '15px', 
                    fontWeight: '600', 
                    transition: 'color 0.2s',
                    position: 'relative',
                  }}
                  onMouseEnter={e => (e.target as HTMLElement).style.color = '#fff'}
                  onMouseLeave={e => (e.target as HTMLElement).style.color = '#D1D5DB'}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Desktop Auth */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }} className="hidden md:flex">
              <Link href="/auth/login" style={{ textDecoration: 'none' }}>
                <Button variant="ghost" size="md">
                  Sign In
                </Button>
              </Link>
              <Link href="/auth/register" style={{ textDecoration: 'none' }}>
                <Button variant="primary" size="md" icon={<span>→</span>}>
                  Get Started
                </Button>
              </Link>
            </div>

            {/* Mobile Hamburger */}
            <button
              className="md:hidden"
              onClick={() => setOpen(!open)}
              style={{ 
                background: 'none', 
                border: 'none', 
                cursor: 'pointer', 
                padding: '8px', 
                display: 'flex', 
                flexDirection: 'column', 
                gap: '5px',
                zIndex: 60,
              }}
            >
              {[0, 1, 2].map(i => (
                <motion.span
                  key={i}
                  animate={
                    open 
                      ? (i === 0 ? { rotate: 45, y: 10 } : i === 1 ? { opacity: 0 } : { rotate: -45, y: -10 }) 
                      : { rotate: 0, y: 0, opacity: 1 }
                  }
                  style={{ 
                    display: 'block', 
                    width: '28px', 
                    height: '3px', 
                    backgroundColor: 'white', 
                    transformOrigin: 'center',
                    borderRadius: '2px',
                  }}
                />
              ))}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            style={{
              position: 'fixed', 
              top: 0, 
              right: 0,
              bottom: 0,
              width: '100%',
              maxWidth: '400px',
              zIndex: 45,
              backgroundColor: 'rgba(13,13,20,0.98)', 
              backdropFilter: 'blur(20px)',
              borderLeft: '1px solid rgba(124,58,237,0.2)',
              padding: '100px 32px 32px',
              overflowY: 'auto',
              boxShadow: '-8px 0 32px rgba(0,0,0,0.5)',
            }}
            className="md:hidden"
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {links.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link 
                    href={link.href} 
                    onClick={() => setOpen(false)}
                    style={{ 
                      color: '#F5F3FF', 
                      textDecoration: 'none', 
                      fontSize: '24px', 
                      fontWeight: '700', 
                      display: 'block',
                      padding: '12px 0',
                      borderBottom: '1px solid rgba(124,58,237,0.1)',
                    }}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                style={{ marginTop: '32px', display: 'flex', flexDirection: 'column', gap: '16px' }}
              >
                <Link href="/auth/login" onClick={() => setOpen(false)} style={{ textDecoration: 'none' }}>
                  <Button variant="outline" size="lg" fullWidth>
                    Sign In
                  </Button>
                </Link>
                <Link href="/auth/register" onClick={() => setOpen(false)} style={{ textDecoration: 'none' }}>
                  <Button variant="primary" size="lg" fullWidth icon={<span>→</span>}>
                    Get Started Free
                  </Button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0,0,0,0.6)',
              zIndex: 40,
              backdropFilter: 'blur(4px)',
            }}
            className="md:hidden"
          />
        )}
      </AnimatePresence>
    </>
  );
};
