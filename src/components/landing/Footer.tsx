'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const footerSections = [
  {
    title: 'Product',
    links: [
      { name: 'Features', href: '#features' },
      { name: 'Pricing', href: '/' },
      { name: 'Security', href: '/' },
    ],
  },
  {
    title: 'Company',
    links: [
      { name: 'About', href: '/' },
      { name: 'Blog', href: '/' },
      { name: 'Careers', href: '/' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { name: 'Privacy', href: '/' },
      { name: 'Terms', href: '/' },
      { name: 'Contact', href: '#contact' },
    ],
  },
];

export const Footer = () => {
  return (
    <footer className="bg-[#0D0D14] border-t border-[#2D2D4A] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-[#7C3AED] mb-3">
              NeoForge
            </h3>
            <p className="text-[#B8B5C9] text-sm">
              The platform for developers to showcase their work.
            </p>
          </motion.div>

          {/* Footer Sections */}
          {footerSections.map((section, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: (idx + 1) * 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-white font-semibold mb-4">
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <Link
                      href={link.href}
                      className="text-[#B8B5C9] hover:text-[#7C3AED] transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom */}
        <div className="border-t border-[#2D2D4A] pt-8">
          <p className="text-center text-[#6B6882] text-sm">
            © 2026 NeoForge. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
