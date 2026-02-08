import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Phone, Linkedin, Github, MapPin, GraduationCap, Briefcase, Code2 } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-circuit opacity-50" />

      <div className="container relative z-10 mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4">
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Transforming business operations through intelligent automation and AI-powered solutions
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-12 items-start">
            {/* Profile Image */}
            <div className="lg:col-span-2 flex justify-center">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/50 to-cyan-dark/50 rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-500" />
                <Card className="relative overflow-hidden border-0 bg-card shadow-card hover:shadow-glow transition-all duration-500">
                  <CardContent className="p-0">
                    <img
                      src="/daniyal-aziz-protfolio/lovable-uploads/5a229395-7337-4b61-b981-3095baea744e.png"
                      alt="Muhammad Daniyal Aziz - Agentic AI Engineer"
                      className="w-full h-auto max-h-[500px] object-cover object-center"
                    />
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* About Content */}
            <div className="lg:col-span-3 space-y-8">
              {/* Introduction */}
              <div className="prose prose-lg text-muted-foreground">
                <p className="text-lg leading-relaxed">
                  I'm a specialist in building <span className="text-foreground font-medium">production-grade AI automation systems</span> that
                  deliver measurable business impact. My work spans across diverse industries including
                  legal tech, property management, e-commerce, and finance.
                </p>
              </div>

              {/* Three Subsections */}
              <div className="grid gap-6">
                {/* Current Focus */}
                <Card className="bg-card/50 border-border/50 hover:border-primary/30 transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                        <Briefcase className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-foreground font-heading mb-2">
                          Current Focus
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          Building intelligent workflows with <span className="text-primary">n8n</span>, <span className="text-primary">Make</span>,
                          and integrating LLMs like <span className="text-primary">OpenAI GPT-4</span>, <span className="text-primary">Anthropic Claude</span>,
                          and <span className="text-primary">Gemini</span>. Specialized in agentic AI patterns, RAG pipelines, and voice AI deployment.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Education */}
                <Card className="bg-card/50 border-border/50 hover:border-primary/30 transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                        <GraduationCap className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-foreground font-heading mb-2">
                          Education
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          <span className="text-foreground font-medium">FAST NUCES</span> - BS Computer Science with AI Specialization.
                          Final Year Project: <span className="text-primary">ZimedarDrive</span> - an Edge AI Driver Assistant using
                          real-time inference on mobile GPUs for traffic sign recognition and lane detection.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Technical Philosophy */}
                <Card className="bg-card/50 border-border/50 hover:border-primary/30 transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                        <Code2 className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-foreground font-heading mb-2">
                          Technical Philosophy
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          I build <span className="text-foreground font-medium">scalable, maintainable automation systems</span> that
                          combine multiple AI models, integrate complex APIs, and deliver measurable business value.
                          Every automation I create is designed for production reliability and long-term maintainability.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Quick Links */}
              <div className="flex flex-wrap gap-4 pt-4">
                <Button variant="ghost" size="sm" asChild className="text-muted-foreground hover:text-primary">
                  <a href="mailto:daniyalaziz184@gmail.com" className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    daniyalaziz184@gmail.com
                  </a>
                </Button>
                <Button variant="ghost" size="sm" asChild className="text-muted-foreground hover:text-primary">
                  <a href="tel:+923328675520" className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    +92 332 8675520
                  </a>
                </Button>
                <Button variant="ghost" size="sm" className="text-muted-foreground">
                  <MapPin className="w-4 h-4 mr-2" />
                  Islamabad, Pakistan
                </Button>
              </div>

              {/* Social Links */}
              <div className="flex gap-4">
                <Button variant="outline" size="lg" asChild className="border-border hover:border-primary hover:bg-primary/10">
                  <a
                    href="https://www.linkedin.com/in/daniyal-aziz-643309246/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <Linkedin className="w-5 h-5" />
                    LinkedIn
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild className="border-border hover:border-primary hover:bg-primary/10">
                  <a
                    href="https://github.com/Daniyal1234-alt"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <Github className="w-5 h-5" />
                    GitHub
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;