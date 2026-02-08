import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, Download, Mail, ArrowRight } from 'lucide-react';
import NeuralNetworkBg from './neural-network-bg';

const roles = [
  "Agentic AI Engineer",
  "Automation Architect",
  "LLM Integration Specialist",
  "Workflow Orchestration Expert"
];

const HeroSection = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const role = roles[currentRole];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < role.length) {
          setDisplayText(role.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentRole((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRole]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <NeuralNetworkBg />

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />

      <div className="container relative z-10 mx-auto px-6 py-20">
        <div className="max-w-5xl mx-auto text-center">
          <div className="space-y-8 animate-fade-up">
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-primary animate-status-pulse" />
              <span className="text-sm text-primary font-medium">Available for Projects</span>
            </div>

            {/* Name */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-heading leading-tight">
              <span className="text-foreground">Muhammad</span>
              <br />
              <span className="gradient-text text-glow">Daniyal Aziz</span>
            </h1>

            {/* Typing Animation */}
            <div className="h-12 md:h-16 flex items-center justify-center">
              <span className="text-2xl md:text-4xl font-semibold text-primary">
                {displayText}
                <span className="animate-blink text-primary">|</span>
              </span>
            </div>

            {/* Tagline */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Building intelligent automation systems that transform business operations
              through cutting-edge AI and workflow orchestration.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <Button
                size="lg"
                onClick={() => scrollToSection('projects')}
                className="group bg-primary hover:bg-primary-hover text-primary-foreground px-8 py-6 text-lg font-semibold transition-all duration-300 hover:shadow-glow"
              >
                View My Projects
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                asChild
                className="border-primary/50 hover:bg-primary/10 hover:border-primary px-8 py-6 text-lg transition-all duration-300 group"
              >
                <a
                  href="https://drive.google.com/file/d/1mF4fqygtJM7HVC3soUSDT2DDjkwD6Oyg/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download className="mr-2 w-5 h-5 group-hover:animate-bounce" />
                  Download CV
                </a>
              </Button>

              <Button
                variant="ghost"
                size="lg"
                onClick={() => scrollToSection('contact')}
                className="text-muted-foreground hover:text-primary px-8 py-6 text-lg transition-all duration-300"
              >
                <Mail className="mr-2 w-5 h-5" />
                Contact Me
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-16 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary text-glow-sm">4+</div>
                <div className="text-sm text-muted-foreground mt-1">Companies</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary text-glow-sm">50+</div>
                <div className="text-sm text-muted-foreground mt-1">Workflows Built</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary text-glow-sm">10+</div>
                <div className="text-sm text-muted-foreground mt-1">AI Integrations</div>
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <button
            onClick={() => scrollToSection('about')}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer hover:text-primary transition-colors"
          >
            <ChevronDown className="w-8 h-8 text-muted-foreground hover:text-primary transition-colors" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;