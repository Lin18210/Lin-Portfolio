
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

export const HeroSection = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-background/95">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-white animate-gradient">
          Lin Thit Thwe
        </h1>
        <p className="text-xl md:text-2xl text-foreground/80 mb-8">
          Full Stack Developer & UI/UX Enthusiast
        </p>
        <p className="text-lg max-w-2xl mx-auto mb-12 text-foreground/70">
          I create beautiful, responsive web applications with modern technologies. 
          Passionate about clean code and exceptional user experiences.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
          <Button size="lg" onClick={() => scrollToSection('projects')} className="px-8 py-6 text-base cursor-pointer">
            View My Work
          </Button>
          <Button variant="outline" size="lg" onClick={() => scrollToSection('contact')} className="px-8 py-6 text-base text-amber-50 cursor-pointer">
            Get In Touch
          </Button>
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => scrollToSection('about')}
          className="animate-bounce hover:bg-primary/10 hover:text-primary"
        >
          <ArrowDown className="h-6 w-6" />
        </Button>
      </div>
    </section>
  );
};
