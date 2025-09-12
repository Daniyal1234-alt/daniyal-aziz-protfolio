import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Download, FileText } from 'lucide-react';

const CVSection = () => {
  return (
    <section id="cv" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold font-heading">
              My Resume
            </h2>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Download my full curriculum vitae to learn more about my skills, experience, 
              and professional journey in AI automation and prompt engineering.
            </p>

            <Card className="max-w-md mx-auto bg-gradient-card shadow-card hover:shadow-lg transition-all duration-300 border-0">
              <CardContent className="p-8 text-center space-y-6">
                <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                  <FileText className="w-8 h-8 text-primary" />
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold font-heading">
                    Curriculum Vitae
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Complete professional profile & experience
                  </p>
                </div>

                <Button 
                  size="lg" 
                  asChild
                  className="w-full bg-primary hover:bg-primary-hover text-primary-foreground gap-3 transition-all duration-300 hover:shadow-md"
                >
                  <a 
                    href="https://drive.google.com/file/d/1EhUGoDuf3_Le6lx2msg3BhI9BDHjI6kM/view?usp=sharing" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Download className="w-5 h-5" />
                    Download CV
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CVSection;