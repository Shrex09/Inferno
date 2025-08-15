import React from 'react';
import { ArrowRight, Code, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroBg from '@/assets/hero-bg.jpg';

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-background/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="fade-in">
          <div className="flex justify-center mb-6">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-primary/10 rounded-full">
                <Code className="h-8 w-8 text-primary" />
              </div>
              <div className="p-3 bg-accent/10 rounded-full">
                <Zap className="h-8 w-8 text-accent" />
              </div>
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold font-space mb-6 leading-tight">
            Delivering{' '}
            <span className="bg-gradient-eco bg-clip-text text-transparent">
              High-Quality
            </span>
            <br />
            Freelance Projects
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            We're a passionate team of developers specializing in modern web applications, 
            AI/ML solutions, and innovative digital experiences that drive results.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              onClick={() => scrollToSection('#portfolio')}
              className="bg-gradient-eco text-primary-foreground hover:shadow-[var(--shadow-green)] transition-all duration-300 text-lg px-8 py-6 group"
            >
              View Our Work
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
            
            <Button 
              size="lg"
              variant="outline"
              onClick={() => scrollToSection('#contact')}
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 py-6 transition-all duration-300"
            >
              Contact Us
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center p-6 bg-card/50 backdrop-blur-sm rounded-xl border border-border/50">
              <div className="text-3xl font-bold text-primary mb-2">10+</div>
              <div className="text-muted-foreground">Projects Completed</div>
            </div>
            <div className="text-center p-6 bg-card/50 backdrop-blur-sm rounded-xl border border-border/50">
              <div className="text-3xl font-bold text-primary mb-2">10+</div>
              <div className="text-muted-foreground">Happy Clients</div>
            </div>
            <div className="text-center p-6 bg-card/50 backdrop-blur-sm rounded-xl border border-border/50">
              <div className="text-3xl font-bold text-primary mb-2">1+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;