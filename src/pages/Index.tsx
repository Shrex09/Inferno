import React from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Portfolio from '@/components/Portfolio';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background scrollbar-green">
      <Navigation />
      <Hero />
      <About />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
