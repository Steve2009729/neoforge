'use client';

import Navbar from '@/components/shared/Navbar';
import Hero from '@/components/landing/Hero';
import FakePortfolioScroll from '@/components/landing/FakePortfolioScroll';
import RealDevelopersSection from '@/components/landing/RealDevelopersSection';
import Features from '@/components/landing/Features';
import ContactForm from '@/components/landing/ContactForm';
import Footer from '@/components/landing/Footer';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#0D0D14]">
      <Navbar />
      <Hero />
      <FakePortfolioScroll />
      <RealDevelopersSection />
      <Features />
      <ContactForm />
      <Footer />
    </div>
  );
}
