import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

const HeroSection = () => {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-subtle">
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Z-Pattern Layout */}
          <div className="space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground font-heading leading-tight">
              AI Automation Specialist &
              <span className="bg-gradient-hero bg-clip-text text-transparent"> AI Solutions</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Building intelligent solutions to streamline workflows and drive innovation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <Button 
                size="lg" 
                onClick={scrollToProjects}
                className="bg-primary hover:bg-primary-hover text-primary-foreground px-8 py-4 text-lg font-semibold transition-all duration-300 hover:shadow-md"
              >
                View My Projects
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                asChild
                className="border-border hover:bg-card-hover px-8 py-4 text-lg transition-all duration-300"
              >
                <a href="https://drive.google.com/file/d/1EhUGoDuf3_Le6lx2msg3BhI9BDHjI6kM/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                  Download CV
                </a>
              </Button>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-6 h-6 text-muted-foreground" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;