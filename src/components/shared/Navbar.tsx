'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { label: 'Home', href: '/' },
    { label: 'Features', href: '#features' },
    { label: 'Developers', href: '#developers' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          transition: 'all 0.3s',
          backgroundColor: scrolled ? 'rgba(13,13,20,0.95)' : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(124,58,237,0.2)' : 'none',
        }}
      >
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '64px' }}>
            
            {/* Logo */}
            <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}>
              <div style={{
                width: '32px', height: '32px', borderRadius: '8px',
                background: 'linear-gradient(135deg, #7C3AED, #a855f7)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontWeight: 'bold', color: 'white', fontSize: '14px',
              }}>N</div>
              <span style={{ fontWeight: '700', fontSize: '20px', color: 'white' }}>NeoForge</span>
            </Link>

            {/* Desktop Links */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }} className="hidden md:flex">
              {links.map(link => (
                <Link key={link.label} href={link.href}
                  style={{ color: '#B8B5C9', textDecoration: 'none', fontSize: '14px', fontWeight: '500', transition: 'color 0.2s' }}
                  onMouseEnter={e => (e.target as HTMLElement).style.color = '#fff'}
                  onMouseLeave={e => (e.target as HTMLElement).style.color = '#B8B5C9'}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Desktop Auth */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }} className="hidden md:flex">
              <Link href="/auth/login" style={{ color: '#B8B5C9', textDecoration: 'none', fontSize: '14px', padding: '8px 16px', transition: 'color 0.2s' }}
                onMouseEnter={e => (e.target as HTMLElement).style.color = '#fff'}
                onMouseLeave={e => (e.target as HTMLElement).style.color = '#B8B5C9'}
              >
                Sign In
              </Link>
              <Link href="/auth/register">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  style={{
                    padding: '8px 20px', borderRadius: '8px', fontWeight: '600',
                    fontSize: '14px', color: 'white', border: 'none', cursor: 'pointer',
                    background: 'linear-gradient(135deg, #7C3AED, #a855f7)',
                    boxShadow: '0 0 20px rgba(124,58,237,0.4)',
                  }}
                >
                  Get Started
                </motion.button>
              </Link>
            </div>

            {/* Mobile Hamburger */}
            <button
              className="md:hidden"
              onClick={() => setOpen(!open)}
              style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '8px', display: 'flex', flexDirection: 'column', gap: '5px' }}
            >
              {[0, 1, 2].map(i => (
                <motion.span
                  key={i}
                  animate={open ? (i === 0 ? { rotate: 45, y: 10 } : i === 1 ? { opacity: 0 } : { rotate: -45, y: -10 }) : { rotate: 0, y: 0, opacity: 1 }}
                  style={{ display: 'block', width: '24px', height: '2px', backgroundColor: 'white', transformOrigin: 'center' }}
                />
              ))}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            style={{
              position: 'fixed', top: '64px', left: 0, right: 0, zIndex: 40,
              backgroundColor: 'rgba(13,13,20,0.98)', backdropFilter: 'blur(12px)',
              borderBottom: '1px solid rgba(124,58,237,0.2)',
              padding: '24px',
            }}
            className="md:hidden"
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {links.map(link => (
                <Link key={link.label} href={link.href} onClick={() => setOpen(false)}
                  style={{ color: '#B8B5C9', textDecoration: 'none', fontSize: '18px', fontWeight: '500', padding: '8px 0', borderBottom: '1px solid rgba(124,58,237,0.1)' }}
                >
                  {link.label}
                </Link>
              ))}
              <Link href="/auth/login" onClick={() => setOpen(false)}>
                <button style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid rgba(124,58,237,0.4)', background: 'transparent', color: '#B8B5C9', cursor: 'pointer', fontSize: '16px' }}>
                  Sign In
                </button>
              </Link>
              <Link href="/auth/register" onClick={() => setOpen(false)}>
                <button style={{ width: '100%', padding: '12px', borderRadius: '8px', border: 'none', background: 'linear-gradient(135deg, #7C3AED, #a855f7)', color: 'white', cursor: 'pointer', fontSize: '16px', fontWeight: '600' }}>
                  Get Started Free
                </button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
