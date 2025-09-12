import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Phone, Linkedin, Github } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 font-heading">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Profile Image */}
            <div className="flex justify-center">
              <Card className="overflow-hidden shadow-card hover:shadow-lg transition-all duration-300 bg-gradient-card border-0">
                <CardContent className="p-0">
                  <img 
                    src="/daniyal-aziz-protfolio/lovable-uploads/5a229395-7337-4b61-b981-3095baea744e.png" 
                    alt="Daniyal Aziz - AI Automation Specialist"
                    className="w-full h-96 object-cover object-center"
                  />
                </CardContent>
              </Card>
            </div>

            {/* About Content */}
            <div className="space-y-6">
              <div className="prose prose-lg text-muted-foreground">
                <p className="text-lg leading-relaxed">
                  I'm an experienced AI Automation Specialist and AI Solutions Engineer with a passion for creating 
                  intelligent solutions that streamline workflows and drive innovation. My expertise lies in 
                  developing multi-layered automation architectures, implementing AI-powered systems, and 
                  optimizing business processes through cutting-edge technology.
                </p>
                
                <p className="text-lg leading-relaxed">
                  Currently seeking full-time and part-time opportunities where I can leverage my skills in 
                  machine learning, automation frameworks, and prompt engineering to help organizations 
                  transform their operations and achieve greater efficiency.
                </p>
              </div>

              {/* Contact Information */}
              <div className="space-y-4 pt-6">
                <h3 className="text-xl font-semibold text-foreground font-heading">
                  Let's Connect
                </h3>
                
                <div className="flex flex-col space-y-3">
                  <Button 
                    variant="ghost" 
                    className="justify-start px-0 hover:text-primary h-auto"
                    asChild
                  >
                    <a href="tel:+923328675520" className="flex items-center gap-3">
                      <Phone className="w-5 h-5" />
                      <span>+92 3328675520</span>
                    </a>
                  </Button>
                  
                  <Button 
                    variant="ghost" 
                    className="justify-start px-0 hover:text-primary h-auto"
                    asChild
                  >
                    <a 
                      href="https://www.linkedin.com/in/daniyal-aziz-643309246/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-3"
                    >
                      <Linkedin className="w-5 h-5" />
                      <span>LinkedIn Profile</span>
                    </a>
                  </Button>
                  
                  <Button 
                    variant="ghost" 
                    className="justify-start px-0 hover:text-primary h-auto"
                    asChild
                  >
                    <a 
                      href="https://github.com/Daniyal1234-alt" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-3"
                    >
                      <Github className="w-5 h-5" />
                      <span>GitHub Profile</span>
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;