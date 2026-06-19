'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    try {
      const formData = new FormData(e.currentTarget);
      const response = await fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify(Object.fromEntries(formData)),
      });

      if (response.ok) {
        setSuccess(true);
        e.currentTarget.reset();
        setTimeout(() => setSuccess(false), 3000);
      } else {
        setError('Failed to send message. Please try again.');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-[#2D2D4A]">
      <div className="max-w-2xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Have Questions?
          </h2>
          <p className="text-[#B8B5C9]">
            Get in touch with our team
          </p>
        </motion.div>

        <motion.form
          className="space-y-6"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <div>
            <input
              type="text"
              name="name"
              placeholder="Your name"
              className="w-full px-4 py-3 bg-[#1A1A2E] border border-[#2D2D4A] rounded-lg text-white placeholder-[#6B6882] focus:border-[#7C3AED] outline-none transition-colors"
              required
            />
          </div>

          <div>
            <input
              type="email"
              name="email"
              placeholder="Your email"
              className="w-full px-4 py-3 bg-[#1A1A2E] border border-[#2D2D4A] rounded-lg text-white placeholder-[#6B6882] focus:border-[#7C3AED] outline-none transition-colors"
              required
            />
          </div>

          <div>
            <textarea
              name="message"
              placeholder="Your message"
              rows={5}
              className="w-full px-4 py-3 bg-[#1A1A2E] border border-[#2D2D4A] rounded-lg text-white placeholder-[#6B6882] focus:border-[#7C3AED] outline-none transition-colors resize-none"
              required
            />
          </div>

          {error && (
            <motion.div
              className="p-4 bg-red-500/10 border border-red-500 text-red-500 rounded-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {error}
            </motion.div>
          )}

          {success && (
            <motion.div
              className="p-4 bg-green-500/10 border border-green-500 text-green-500 rounded-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              Message sent successfully! We'll get back to you soon.
            </motion.div>
          )}

          <motion.button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-lg font-semibold text-white transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            style={{
              background: 'linear-gradient(135deg, #7C3AED 0%, #A855F7 100%)',
            }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {loading ? 'Sending...' : 'Send Message'}
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}
