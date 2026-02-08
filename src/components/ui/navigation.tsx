import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Download } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? 'glass shadow-lg'
        : 'bg-transparent'
        }`}>
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <button
              onClick={() => scrollToSection('home')}
              className="flex items-center gap-2 group"
            >
              <span className="text-xl font-bold font-heading text-foreground group-hover:text-primary transition-colors">
                Daniyal
              </span>
              <span className="text-xl font-bold font-heading gradient-text">
                Aziz
              </span>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <Button
                  key={item.id}
                  variant="ghost"
                  onClick={() => scrollToSection(item.id)}
                  className="text-muted-foreground hover:text-primary hover:bg-primary/5 transition-all duration-300 px-4"
                >
                  {item.label}
                </Button>
              ))}
              <Button
                size="sm"
                asChild
                className="ml-4 bg-primary hover:bg-primary-hover text-primary-foreground"
              >
                <a
                  href="https://drive.google.com/file/d/1mF4fqygtJM7HVC3soUSDT2DDjkwD6Oyg/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download className="w-4 h-4 mr-2" />
                  CV
                </a>
              </Button>
            </div>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-foreground hover:text-primary"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${isMobileMenuOpen ? 'visible' : 'invisible'
        }`}>
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-background/80 backdrop-blur-sm transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0'
            }`}
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Menu Panel */}
        <div className={`absolute top-16 right-0 w-64 bg-card border-l border-border shadow-lg transition-transform duration-300 h-[calc(100vh-4rem)] ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}>
          <div className="p-6 space-y-4">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant="ghost"
                onClick={() => scrollToSection(item.id)}
                className="w-full justify-start text-muted-foreground hover:text-primary hover:bg-primary/5 transition-all duration-300"
              >
                {item.label}
              </Button>
            ))}
            <hr className="border-border/50" />
            <Button
              asChild
              className="w-full bg-primary hover:bg-primary-hover text-primary-foreground"
            >
              <a
                href="https://drive.google.com/file/d/1mF4fqygtJM7HVC3soUSDT2DDjkwD6Oyg/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download className="w-4 h-4 mr-2" />
                Download CV
              </a>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;