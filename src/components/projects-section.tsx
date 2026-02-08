import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Filter, Car, Users, Scale, ShoppingCart, FileText, Mic, PenTool, BarChart3, Bot, ClipboardList, Search } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  category: string[];
  technologies: string[];
  icon: React.ReactNode;
  image?: string;
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    id: 'zimedar',
    title: 'ZimedarDrive - Edge AI Driver Assistant',
    description: 'Real-time driver assistance system using on-device AI inference for traffic sign recognition and lane detection.',
    longDescription: 'Final year project implementing YOLOv11/v12 for traffic sign detection, semantic lane segmentation, and on-device OCR using TensorFlow Lite on Android.',
    category: ['AI Engineering', 'Mobile'],
    technologies: ['Kotlin', 'Android', 'TensorFlow Lite', 'YOLOv11', 'Google ML Kit', 'OpenCV'],
    icon: <Car className="w-6 h-6" />,
    githubUrl: 'https://github.com/Daniyal1234-alt',
    featured: true
  },
  {
    id: 'legal-intake',
    title: 'Legal Tech Intake Automation',
    description: 'Instagram and TikTok lead automation for law firms with evidence collection and Casepeer CRM integration.',
    category: ['Automation', 'AI Engineering'],
    technologies: ['n8n', 'OpenAI', 'Instagram API', 'TikTok API', 'Casepeer'],
    icon: <Scale className="w-6 h-6" />,
    image: '/daniyal-aziz-protfolio/projects/Lead Intake Law (1).png',
    featured: true
  },
  {
    id: 'lead-unification',
    title: 'Leads to Odoo CRM Pipeline',
    description: 'Multi-source lead intake from Facebook Ads, WordPress, and webhooks with deduplication and Odoo CRM integration.',
    category: ['Automation', 'CRM'],
    technologies: ['n8n', 'Facebook API', 'WordPress', 'Odoo CRM', 'Webhook'],
    icon: <Users className="w-6 h-6" />,
    image: '/daniyal-aziz-protfolio/projects/Leads to Odoo CRM.png',
    featured: true
  },
  {
    id: 'invoice-processing',
    title: 'Multi-Entity Invoice Processing',
    description: 'Intelligent invoice routing system for Fromental companies with PDF parsing and Xero API integration.',
    category: ['Automation', 'Finance'],
    technologies: ['n8n', 'OpenAI', 'Xero API', 'PDF Parsing', 'PostgreSQL'],
    icon: <FileText className="w-6 h-6" />,
    image: '/daniyal-aziz-protfolio/projects/xero_invoice_forwarding.png',
    featured: true
  },
  {
    id: 'rag-agent',
    title: 'RAG Agent with Pinecone',
    description: 'AI-powered chatbot using RAG architecture with Pinecone vector store, OpenAI embeddings, and window buffer memory.',
    category: ['AI Engineering', 'Automation'],
    technologies: ['n8n', 'OpenAI', 'Pinecone', 'Embeddings', 'Vector Store'],
    icon: <Bot className="w-6 h-6" />,
    image: '/daniyal-aziz-protfolio/projects/RAG Agent .png',
    featured: true
  },
  {
    id: 'survey-automation',
    title: 'Survey Automation Pipeline',
    description: 'Automated survey distribution system with Google Drive integration, email tracking, and Typeform response handling.',
    category: ['Automation'],
    technologies: ['n8n', 'Google Drive', 'Gmail', 'Typeform', 'CSV Parsing'],
    icon: <ClipboardList className="w-6 h-6" />,
    image: '/daniyal-aziz-protfolio/projects/Survey Automation.png'
  },
  {
    id: 'battery-research',
    title: 'Battery Research Agent',
    description: 'Complex multi-step research automation agent with AI-powered analysis and data extraction capabilities.',
    category: ['AI Engineering', 'Automation'],
    technologies: ['n8n', 'OpenAI', 'Web Scraping', 'Data Extraction'],
    icon: <Search className="w-6 h-6" />,
    image: '/daniyal-aziz-protfolio/projects/Battery Research Agent.png'
  },
  {
    id: 'ebay-scraping',
    title: 'Agentic eBay Scraping System',
    description: 'Advanced AI scraping using Gemini with reflection and planning patterns to extract complex product specifications.',
    category: ['AI Engineering', 'Automation'],
    technologies: ['n8n', 'Gemini', 'Agentic Patterns', 'Reflection', 'Web Scraping'],
    icon: <ShoppingCart className="w-6 h-6" />
  },
  {
    id: 'custom-crm',
    title: 'Custom CRM & Lead Engine',
    description: 'Multi-source lead aggregation from Google Maps, web search, and Instagram with custom-built CRM interface.',
    category: ['Full Stack', 'Automation'],
    technologies: ['React', 'n8n', 'Google Maps API', 'Instagram API', 'Supabase'],
    icon: <BarChart3 className="w-6 h-6" />,
    liveUrl: 'https://aldar-akzrkkyqd-danis-projects-9a3cfe24.vercel.app/'
  },
  {
    id: 'voice-ai',
    title: 'Voice AI Conversational Agents',
    description: 'Retell AI deployment for Dutch client with natural language understanding and appointment automation.',
    category: ['AI Engineering', 'Voice'],
    technologies: ['Retell AI', 'n8n', 'NLU', 'Voice Synthesis', 'Calendar Integration'],
    icon: <Mic className="w-6 h-6" />
  },
  {
    id: 'content-generation',
    title: 'Automated Content Generation Pipeline',
    description: 'SEO-focused article generation system with AI-powered text and image creation for web publishing.',
    category: ['AI Engineering', 'Automation'],
    technologies: ['n8n', 'OpenAI', 'DALL-E', 'WordPress API', 'SEO Tools'],
    icon: <PenTool className="w-6 h-6" />
  }
];

const categories = ['All', 'AI Engineering', 'Automation', 'Full Stack', 'CRM', 'Finance', 'Voice', 'Mobile'];

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.category.includes(activeFilter));

  return (
    <section id="projects" className="py-24 bg-card relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-glow opacity-20" />

      <div className="container relative z-10 mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A showcase of AI automation systems delivering real business value
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeFilter === category ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveFilter(category)}
                className={`transition-all duration-300 ${activeFilter === category
                  ? 'bg-primary text-primary-foreground shadow-glow'
                  : 'border-border/50 hover:border-primary/50 hover:text-primary'
                  }`}
              >
                {category === 'All' && <Filter className="w-4 h-4 mr-1" />}
                {category}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <Card
                key={project.id}
                className={`group bg-background/50 border-border/50 hover:border-primary/30 transition-all duration-300 hover-lift overflow-hidden ${project.featured ? 'ring-1 ring-primary/20' : ''
                  }`}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                {/* Project Image */}
                {project.image && (
                  <div className="relative h-40 overflow-hidden bg-navy-light">
                    <img
                      src={project.image}
                      alt={project.title}
                      className={`w-full h-full object-cover object-top transition-all duration-500 ${hoveredProject === project.id ? 'scale-110 opacity-90' : 'scale-100 opacity-70'
                        }`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                    {project.featured && (
                      <Badge className="absolute top-3 right-3 bg-primary/90 text-primary-foreground border-0 text-xs">
                        Featured
                      </Badge>
                    )}
                  </div>
                )}

                <CardHeader className={project.image ? "pb-2 pt-4" : "pb-4"}>
                  {!project.image && (
                    <div className="flex items-start justify-between">
                      <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                        {project.icon}
                      </div>
                      {project.featured && (
                        <Badge className="bg-primary/20 text-primary border-0 text-xs">
                          Featured
                        </Badge>
                      )}
                    </div>
                  )}
                  <CardTitle className={`text-lg font-heading group-hover:text-primary transition-colors ${project.image ? '' : 'mt-4'}`}>
                    {project.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-4">
                  <CardDescription className="text-sm leading-relaxed">
                    {project.description}
                  </CardDescription>

                  {/* Categories */}
                  <div className="flex flex-wrap gap-1">
                    {project.category.map((cat) => (
                      <Badge
                        key={cat}
                        variant="outline"
                        className="text-xs border-border/30 text-muted-foreground"
                      >
                        {cat}
                      </Badge>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="bg-primary/10 text-primary border-0 text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 4 && (
                      <Badge variant="secondary" className="bg-muted text-muted-foreground border-0 text-xs">
                        +{project.technologies.length - 4} more
                      </Badge>
                    )}
                  </div>

                  {/* Links */}
                  {(project.liveUrl || project.githubUrl) && (
                    <div className="flex gap-2 pt-2">
                      {project.liveUrl && (
                        <Button variant="ghost" size="sm" asChild className="text-muted-foreground hover:text-primary">
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4 mr-1" />
                            Live Demo
                          </a>
                        </Button>
                      )}
                      {project.githubUrl && (
                        <Button variant="ghost" size="sm" asChild className="text-muted-foreground hover:text-primary">
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="w-4 h-4 mr-1" />
                            Code
                          </a>
                        </Button>
                      )}
                    </div>
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
