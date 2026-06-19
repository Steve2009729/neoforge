import { NavbarModern } from '@/components/shared/NavbarModern';
import { HeroModern } from '@/components/landing/HeroModern';
import { PortfolioScroll } from '@/components/landing/PortfolioScroll';
import { FeaturedDevelopersModern } from '@/components/landing/FeaturedDevelopersModern';
import { FeaturesModern } from '@/components/landing/FeaturesModern';
import { ContactForm } from '@/components/landing/ContactForm';
import { Footer } from '@/components/landing/Footer';

export default function Home() {
  return (
    <main style={{ backgroundColor: '#0D0D14', color: '#F5F3FF', overflowX: 'hidden' }}>
      <NavbarModern />
      <HeroModern />
      <PortfolioScroll />
      <FeaturedDevelopersModern />
      <FeaturesModern />
      <ContactForm />
      <Footer />
    </main>
  );
}
