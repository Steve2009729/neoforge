'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#1A1A2E] border-t border-[#2D2D47]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-extrabold bg-gradient-to-r from-[#7C3AED] to-[#A855F7] bg-clip-text text-transparent mb-4">
              NeoForge
            </h3>
            <p className="text-[#9CA3AF]">The platform for developers to showcase their work.</p>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-white font-semibold mb-4">Product</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-[#9CA3AF] hover:text-white transition-colors">Features</Link></li>
              <li><Link href="/" className="text-[#9CA3AF] hover:text-white transition-colors">Pricing</Link></li>
              <li><Link href="/" className="text-[#9CA3AF] hover:text-white transition-colors">Security</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-[#9CA3AF] hover:text-white transition-colors">About</Link></li>
              <li><Link href="/" className="text-[#9CA3AF] hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="/" className="text-[#9CA3AF] hover:text-white transition-colors">Careers</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-[#9CA3AF] hover:text-white transition-colors">Privacy</Link></li>
              <li><Link href="/" className="text-[#9CA3AF] hover:text-white transition-colors">Terms</Link></li>
              <li><Link href="/" className="text-[#9CA3AF] hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-[#2D2D47] pt-8 text-center text-[#9CA3AF]">
          <p>&copy; 2026 NeoForge. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
