import { Navbar } from '@/components/shared/Navbar';
import { Hero } from '@/components/landing/Hero';
import { PortfolioScroll } from '@/components/landing/PortfolioScroll';
import { FeaturedDevelopers } from '@/components/landing/FeaturedDevelopers';
import { Features } from '@/components/landing/Features';
import { ContactForm } from '@/components/landing/ContactForm';
import { Footer } from '@/components/landing/Footer';

export default function Home() {
  return (
    <main style={{ backgroundColor: '#0D0D14', color: '#F5F3FF', overflowX: 'hidden' }}>
      <Navbar />
      <Hero />
      <PortfolioScroll />
      <FeaturedDevelopers />
      <Features />
      <ContactForm />
      <Footer />
    </main>
  );
}
