import { Button } from '@/components/ui/button';
import { Phone, Linkedin, Github, Mail } from 'lucide-react';
const Footer = () => {
  return <footer id="contact" className="bg-secondary/50 border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold font-heading">
              Connect with me to discuss your next project
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Let's collaborate to build intelligent automation solutions that transform your business operations.
            </p>
          </div>

          {/* Contact Links */}
          <div className="flex flex-wrap justify-center gap-6">
            <Button variant="outline" size="lg" asChild className="gap-3 hover:bg-card-hover hover:border-primary transition-all duration-300">
              <a href="tel:+923328675520">
                <Phone className="w-5 h-5" />
                Call Me
              </a>
            </Button>

            <Button variant="outline" size="lg" asChild className="gap-3 hover:bg-card-hover hover:border-primary transition-all duration-300">
              <a href="https://www.linkedin.com/in/daniyal-aziz-643309246/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </a>
            </Button>

            <Button variant="outline" size="lg" asChild className="gap-3 hover:bg-card-hover hover:border-primary transition-all duration-300">
              <a href="https://github.com/Daniyal1234-alt" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5" />
                GitHub
              </a>
            </Button>
          </div>

          {/* Footer Text */}
          <div className="pt-8 border-t border-border text-sm text-muted-foreground">
            <p>© 2024 Daniyal Aziz. AI Automation Specialist & AI Solution Engineer.</p>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;