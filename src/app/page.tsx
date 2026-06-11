'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import DeveloperCard from '@/components/dev-card';
import { getGitHubTrendingDevs, fakeDevelopers_forScrolling } from '@/lib/github-devs';
import LoadingSpinner from '@/components/loader';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

export default function LandingPage() {
  const [developers, setDevelopers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [contactLoading, setContactLoading] = useState(false);
  const [contactError, setContactError] = useState('');
  const [contactSuccess, setContactSuccess] = useState(false);

  useEffect(() => {
    const fetchDevs = async () => {
      try {
        const devs = await getGitHubTrendingDevs();
        setDevelopers(devs);
      } catch {
        setDevelopers(fakeDevelopers_forScrolling);
      } finally {
        setLoading(false);
      }
    };

    fetchDevs();
  }, []);

  // Duplicate developers for infinite scroll effect
  const scrollingDevs = [...developers, ...developers];

  const handleContactSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setContactLoading(true);
    setContactError('');
    setContactSuccess(false);

    try {
      const formData = new FormData(e.currentTarget);
      const response = await fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify(Object.fromEntries(formData)),
      });

      if (response.ok) {
        setContactSuccess(true);
        e.currentTarget.reset();
        setTimeout(() => setContactSuccess(false), 3000);
      } else {
        setContactError('Failed to send message. Please try again.');
      }
    } catch (error) {
      setContactError('An error occurred. Please try again.');
    } finally {
      setContactLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0D0D14]">
      {loading && <LoadingSpinner />}
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative overflow-hidden pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#7C3AED]/10 to-transparent pointer-events-none" />

        <div className="relative max-w-6xl mx-auto">
          {/* Main headline */}
          <div className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white text-center mb-6 leading-tight animate-fade-in">
            Build Your Developer <br />
            <span className="bg-gradient-to-r from-[#7C3AED] to-[#A855F7] bg-clip-text text-transparent">
              Portfolio in Seconds
            </span>
          </div>

          {/* Subheading */}
          <p className="text-center text-lg text-[#D1D5DB] max-w-2xl mx-auto mb-8 animate-fade-in-delay">
            NeoForge is the ultimate platform for developers to showcase their work, connect with the community, and land amazing opportunities.
          </p>

          {/* CTA Buttons */}
          <div className="flex gap-4 justify-center mb-16 flex-wrap animate-fade-in-delay-2">
            <Link
              href="/auth/register"
              className="px-8 py-4 bg-gradient-to-r from-[#7C3AED] to-[#A855F7] text-white font-bold rounded-lg hover:shadow-[0_0_30px_rgba(124,58,237,0.5)] transition-all duration-300 hover:scale-105"
            >
              Get Started
            </Link>
            <button
              onClick={() => {
                const element = document.getElementById('features');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-4 border border-[#7C3AED] text-[#7C3AED] font-bold rounded-lg hover:bg-[#7C3AED]/10 transition-all duration-300"
            >
              Learn More
            </button>
          </div>

          {/* Demo image/animation */}
          <div className="relative rounded-xl overflow-hidden border border-[#2D2D47] bg-[#1A1A2E] p-6 shadow-[0_0_50px_rgba(124,58,237,0.2)] animate-fade-in-delay-3">
            <div className="aspect-video bg-gradient-to-br from-[#2D2D47] to-[#0D0D14] rounded-lg flex items-center justify-center">
              <p className="text-[#9CA3AF]">Dashboard Preview Coming Soon</p>
            </div>
          </div>

          <style jsx>{`
            @keyframes fadeIn {
              from {
                opacity: 0;
                transform: translateY(20px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }

            .animate-fade-in {
              animation: fadeIn 0.6s ease-out;
            }

            .animate-fade-in-delay {
              animation: fadeIn 0.6s ease-out 0.2s backwards;
            }

            .animate-fade-in-delay-2 {
              animation: fadeIn 0.6s ease-out 0.4s backwards;
            }

            .animate-fade-in-delay-3 {
              animation: fadeIn 0.6s ease-out 0.6s backwards;
            }
          `}</style>
        </div>
      </section>

      {/* DEVELOPERS SCROLLING SECTION */}
      <section className="py-20 px-4 overflow-hidden">
        <div className="max-w-6xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-white text-center mb-4">
            Developers Building Amazing Things
          </h2>
          <p className="text-center text-[#D1D5DB]">
            Join thousands of developers showcasing their portfolios
          </p>
        </div>

        {/* Infinite scroll */}
        <div className="relative w-full overflow-x-hidden mask-gradient">
          <style jsx>{`
            .carousel-container {
              display: flex;
              gap: 1.5rem;
              animation: scroll 30s linear infinite;
              will-change: transform;
            }

            .carousel-container:hover {
              animation-play-state: paused;
            }

            @keyframes scroll {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(calc(-50% - 1.5rem / 2));
              }
            }
          `}</style>
          <div className="carousel-container">
            {scrollingDevs.map((dev, idx) => (
              <div key={`${dev.id}-${idx}`} className="flex-shrink-0">
                <DeveloperCard {...dev} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">
            Everything You Need
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Smart Portfolio',
                description: 'Automatically sync your GitHub repos and showcase your best work',
                icon: '🚀',
              },
              {
                title: 'Community Feed',
                description: 'Connect with developers, share updates, and stay inspired',
                icon: '💬',
              },
              {
                title: 'Job Opportunities',
                description: 'Get discovered by companies looking for talented developers',
                icon: '💼',
              },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="p-8 bg-[#1A1A2E] border border-[#2D2D47] rounded-xl hover:border-[#7C3AED] transition-all hover:shadow-[0_0_20px_rgba(124,58,237,0.3)]"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-[#D1D5DB]">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-[#2D2D47]">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            Have Questions?
          </h2>

          <form className="space-y-6" onSubmit={handleContactSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your name"
              className="w-full px-4 py-3 bg-[#1A1A2E] border border-[#2D2D47] rounded-lg text-white placeholder-[#9CA3AF] focus:border-[#7C3AED] outline-none transition-colors"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your email"
              className="w-full px-4 py-3 bg-[#1A1A2E] border border-[#2D2D47] rounded-lg text-white placeholder-[#9CA3AF] focus:border-[#7C3AED] outline-none transition-colors"
              required
            />
            <textarea
              name="message"
              placeholder="Your message"
              rows={5}
              className="w-full px-4 py-3 bg-[#1A1A2E] border border-[#2D2D47] rounded-lg text-white placeholder-[#9CA3AF] focus:border-[#7C3AED] outline-none transition-colors"
              required
            />

            {contactError && (
              <div className="p-4 bg-[#EF4444]/10 border border-[#EF4444] text-[#EF4444] rounded-lg">
                {contactError}
              </div>
            )}

            {contactSuccess && (
              <div className="p-4 bg-[#10B981]/10 border border-[#10B981] text-[#10B981] rounded-lg">
                Message sent successfully! We'll get back to you soon.
              </div>
            )}

            <button
              type="submit"
              disabled={contactLoading}
              className="w-full py-3 bg-gradient-to-r from-[#7C3AED] to-[#A855F7] text-white font-bold rounded-lg hover:shadow-[0_0_30px_rgba(124,58,237,0.5)] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {contactLoading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
}
