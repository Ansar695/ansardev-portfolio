
import AllSkillsSection from '@/components/home/AllSkills';
import AnimatedStatsSection from '@/components/home/AnimatedCounter';
import ContactSection from '@/components/home/ContactMe';
import ExperienceEducationSection from '@/components/home/ExpAndEdu';
import Footer from '@/components/home/Footer';
import HeroSection from '@/components/home/Hero';
import ServicesSection from '@/components/home/Services';
import AttractiveClientTestimonials from '@/components/home/Testimonials';
import WorkSection from '@/components/home/WorkSection';
import React from 'react';

export default function Home() {

  return (
    <main>
      <HeroSection />
      <AnimatedStatsSection />
      {/* <AboutMePage /> */}
      {/* <SkillsSection /> */}
      <ServicesSection />
      <WorkSection />
      <ExperienceEducationSection />
      {/* <TestimonialsSection /> */}
      <AttractiveClientTestimonials />
      {/* <ContactSection /> */}
      <ContactSection />
      <AllSkillsSection />
      <Footer />
    </main>
  );
}
