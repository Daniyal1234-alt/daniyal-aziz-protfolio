import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

// Import project images
import automationImage from '@/assets/project-automation.jpg';
import resumeParserImage from '@/assets/project-resume-parser.jpg';
import medicalImage from '@/assets/project-medical.jpg';
import metroImage from '@/assets/project-metro.jpg';
import racingImage from '@/assets/project-racing.jpg';

const projects = [
  {
    title: "Workflows & Automation Systems",
    description: "Designed multi-layered automation architectures for tasks including mail classification, chatbot automation, lead generation, and automated LinkedIn outreach using PhantomBuster and Sales Navigator. Also, created automated web article generation with AI-generated images.",
    technologies: ["n8n", "OpenAI API", "Webhooks", "MongoDB", "PhantomBuster", "FastAPI"],
    image: automationImage
  },
  {
    title: "AI Resume Parser with LLM",
    description: "Developed an AI-powered resume parsing system that uses offline Large Language Models (LLMs) and prompt engineering to extract structured JSON data from resumes, fine-tuning the output for hiring accuracy.",
    technologies: ["Python", "FastAPI", "MongoDB", "PDFMiner", "Ollama", "OpenAI API"],
    image: resumeParserImage,
    liveUrl: "https://www.linkedin.com/feed/update/urn:li:activity:7371182359137779712/"
  },
  {
    title: "DrFaisalAziz.com - Appointment Website + Chatbot",
    description: "A fully functional appointment booking website with features including doctor availability, admin control, and responsive design. An AI chatbot powered by n8n workflows was added for symptom-based recommendations and smart replies.",
    technologies: ["React.js", "Tailwind CSS", "n8n"],
    image: medicalImage,
    liveUrl: "https://www.drfaisalaziz.com"
  },
  {
    title: "Metro Routing App",
    description: "A transit routing system for the Islamabad Metro Bus using geospatial mapping and shortest-path algorithms. It integrates interactive Leaflet.js maps and NetworkX for real-time route queries.",
    technologies: ["Python", "Dijkstra's Algorithm", "NetworkX", "Streamlit", "Leaflet.js", "QGIS"],
    image: metroImage,
    liveUrl: "https://github.com/Daniyal1234-alt/Metro-Bus-Route-Planner.git"
  },
  {
    title: "NeuroEvolution-Based Autonomous Racing Agent",
    description: "A self-driving agent created using convolutional neural networks and genetic algorithms for the TORCS simulator. It combines neuroevolution with behavior cloning to learn optimal racing strategies and minimize lap times.",
    technologies: ["TORCS", "Python", "PyTorch", "Genetic Algorithms", "OpenCV"],
    image: racingImage,
    liveUrl: "https://github.com/HamzaSidd17/TORCS-Autonomous-Driver-NeuroEvolution-Behaviour-Cloning.git"
  }
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">
              Featured Projects
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A showcase of my recent work in AI automation, including projects in prompt engineering, 
              data analysis, and workflow optimization.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-lg transition-all duration-300 bg-card border-0 shadow-card hover:scale-[1.02]"
              >
                <div className="aspect-video bg-muted rounded-t-lg overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={`${project.title} - Project Screenshot`}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg font-heading group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <CardDescription className="text-sm leading-relaxed">
                    {project.description}
                  </CardDescription>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex} 
                        variant="secondary"
                        className="text-xs bg-secondary/80 hover:bg-secondary transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {project.liveUrl && (
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      asChild
                      className="w-full justify-center gap-2 hover:text-primary"
                    >
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4" />
                        View Live Project
                      </a>
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
