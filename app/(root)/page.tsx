import { TestimonialCollage } from '@/components/TestimonialCollage';
import { LeadingPartner } from '@/components/LeadingPartner';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import { OurWorkSection } from '@/components/OurWorkSection';
import ServiceSection from '@/components/ServiceSection';

const page = () => {

  return (
    <main>

      {/* Hero Section*/}
      <section id='home' data-nav-theme="dark">
        <HeroSection />
      </section>

      {/* About Section */}
      <section id='about' data-nav-theme="dark">
        <AboutSection />
      </section>

      {/* Our Work Section */}
      <section id='work' data-nav-theme="dark">
        <OurWorkSection />
      </section>

      {/* Services Section */}
      <section id='services' data-nav-theme="light">
        <ServiceSection />
      </section>

      {/* Testimonials Section */}
      <section id='testimonials' data-nav-theme="dark">
        <TestimonialCollage />
      </section>

      {/* Leading */}
      <section id='leading' data-nav-theme="light">
        <LeadingPartner />
      </section>

    </main>
  )
}

export default page
