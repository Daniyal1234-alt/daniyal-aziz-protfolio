import { Linkedin, Github, Mail, Heart, Code2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 bg-card border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            {/* Logo & Tagline */}
            <div className="text-center md:text-left">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 group"
              >
                <span className="text-xl font-bold font-heading text-foreground group-hover:text-primary transition-colors">
                  Daniyal
                </span>
                <span className="text-xl font-bold font-heading gradient-text">
                  Aziz
                </span>
              </button>
              <p className="text-sm text-muted-foreground mt-2">
                Agentic AI Engineer & Automation Architect
              </p>
            </div>

            {/* Social Links */}
            <div className="flex justify-center gap-4">
              <Button
                variant="ghost"
                size="icon"
                asChild
                className="text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
              >
                <a
                  href="https://www.linkedin.com/in/daniyal-aziz-643309246/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                asChild
                className="text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
              >
                <a
                  href="https://github.com/Daniyal1234-alt"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                asChild
                className="text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
              >
                <a
                  href="mailto:daniyalaziz184@gmail.com"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </Button>
            </div>

            {/* Copyright */}
            <div className="text-center md:text-right">
              <p className="text-sm text-muted-foreground">
                © {currentYear} Muhammad Daniyal Aziz
              </p>
              <p className="text-xs text-muted-foreground/70 mt-1 flex items-center justify-center md:justify-end gap-1">
                Built with <Heart className="w-3 h-3 text-red-500" /> using
                <Code2 className="w-3 h-3 text-primary ml-1" /> React & TypeScript
              </p>
            </div>
          </div>

          {/* Bottom border decoration */}
          <div className="mt-8 pt-8 border-t border-border/30">
            <p className="text-center text-xs text-muted-foreground/50">
              "Automating the future, one workflow at a time"
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;