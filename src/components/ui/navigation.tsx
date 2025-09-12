import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background/95 backdrop-blur-sm shadow-card' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <div className="text-xl font-bold text-foreground font-heading">
            Daniyal Aziz
          </div>
          
          <div className="hidden md:flex space-x-8">
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection('home')}
              className="hover:text-primary transition-colors"
            >
              Home
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection('about')}
              className="hover:text-primary transition-colors"
            >
              About
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection('projects')}
              className="hover:text-primary transition-colors"
            >
              Projects
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection('contact')}
              className="hover:text-primary transition-colors"
            >
              Contact
            </Button>
          </div>

          {/* Mobile menu button */}
          <Button 
            variant="ghost" 
            size="sm" 
            className="md:hidden"
            onClick={() => {
              // Simple mobile menu - scroll to top for now
              scrollToSection('home');
            }}
          >
            Menu
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;