import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Briefcase,
  Calendar,
  MapPin,
  ChevronDown,
  Star,
  Users,
  Zap
} from 'lucide-react';

interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  dates: string;
  type: 'fulltime' | 'parttime' | 'contract';
  isLeadership?: boolean;
  description: string;
  highlights: string[];
  technologies: string[];
}

const experiences: Experience[] = [
  {
    id: 'xcorre',
    title: 'AI Automation Engineer',
    company: 'Xcorre',
    location: 'Remote',
    dates: 'Oct 2024 – Present',
    type: 'contract',
    description: 'Building multi-channel automation systems for diverse clients including property management and beverage brands.',
    highlights: [
      'Built centralized lead intake system for Canadian beverage brand integrating Facebook Lead Ads, WordPress, and cold outreach into unified pipeline',
      'Developed conversational AI chatbots for customer engagement and lead qualification',
      'Created Reapit property management automation for UK real estate operations',
      'Integrated GoHighLevel and Instantly.ai for automated outreach campaigns'
    ],
    technologies: ['n8n', 'OpenAI', 'GoHighLevel', 'Instantly.ai', 'Facebook API', 'Reapit', 'WordPress']
  },
  {
    id: 'trilles',
    title: 'AI Engineer & Team Lead',
    company: 'Trilles AI',
    location: 'Remote',
    dates: 'Aug 2024 – Present',
    type: 'contract',
    isLeadership: true,
    description: 'Leading AI engineering initiatives for legal tech and e-commerce automation projects.',
    highlights: [
      'Built legal intake automation system capturing leads from Instagram/TikTok, collecting evidence, and integrating with Casepeer CRM',
      'Developed agentic eBay scraping system using Gemini with reflection and planning patterns for complex specification extraction',
      'Created custom CRM aggregating leads from Google Maps, web search, and Instagram',
      'Deployed Voice AI conversational agents using Retell AI for Dutch client appointment automation'
    ],
    technologies: ['n8n', 'Gemini', 'Retell AI', 'Casepeer', 'Instagram API', 'TikTok API', 'Agentic Patterns']
  },
  {
    id: 'eynvision',
    title: 'Automation Engineer',
    company: 'Eynvision',
    location: 'Remote',
    dates: 'Sep 2024 – Present',
    type: 'contract',
    description: 'Developing intelligent financial automation systems for multi-entity operations.',
    highlights: [
      'Built multi-entity invoice processing system with intelligent routing between Fromentalia, Fromental Ltd, and Fromental LLC',
      'Implemented PDF parsing with AI-powered GL code generation for accurate account assignment',
      'Integrated with Xero API for seamless invoice submission and tracking',
      'Achieved high accuracy in automated invoice classification and routing'
    ],
    technologies: ['n8n', 'OpenAI', 'Xero API', 'PDF Parsing', 'PostgreSQL']
  },
  {
    id: 'ttc',
    title: 'AI Automation Intern',
    company: 'TTC',
    location: 'Remote',
    dates: 'Jul 2024 – Sep 2024',
    type: 'fulltime',
    description: 'Developed LinkedIn automation and content generation systems.',
    highlights: [
      'Built automated LinkedIn lead generation workflows using PhantomBuster and n8n',
      'Implemented smart response routing with SLA enforcement logic',
      'Developed automated web article generation pipelines with AI-generated images',
      'Maintained safe action limits for sustainable automation'
    ],
    technologies: ['n8n', 'PhantomBuster', 'OpenAI', 'LinkedIn', 'Sales Navigator']
  }
];

const ExperienceSection = () => {
  const [expandedId, setExpandedId] = useState<string | null>('xcorre');

  return (
    <section id="experience" className="py-24 bg-background relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />

      <div className="container relative z-10 mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4">
              Work <span className="gradient-text">Experience</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Building production-grade AI automation systems across multiple industries
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent" />

            {/* Experience Cards */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div
                  key={exp.id}
                  className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                    }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary shadow-glow border-4 border-background z-10" />

                  {/* Date badge - visible on desktop */}
                  <div className={`hidden md:flex md:w-1/2 items-start ${index % 2 === 0 ? 'justify-start pl-12' : 'justify-end pr-12'
                    }`}>
                    <Badge variant="outline" className="bg-card border-primary/30 text-primary px-4 py-2">
                      <Calendar className="w-4 h-4 mr-2" />
                      {exp.dates}
                    </Badge>
                  </div>

                  {/* Card */}
                  <div className={`md:w-1/2 pl-8 md:pl-0 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                    }`}>
                    <Card
                      className={`bg-card/50 border-border/50 hover:border-primary/30 transition-all duration-300 cursor-pointer group ${expandedId === exp.id ? 'border-primary/50 shadow-glow' : ''
                        }`}
                      onClick={() => setExpandedId(expandedId === exp.id ? null : exp.id)}
                    >
                      <CardContent className="p-6">
                        {/* Header */}
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              {exp.isLeadership && (
                                <Badge className="bg-primary/20 text-primary border-0">
                                  <Users className="w-3 h-3 mr-1" />
                                  Team Lead
                                </Badge>
                              )}
                              <Badge variant="outline" className="text-xs capitalize border-border/50">
                                {exp.type}
                              </Badge>
                            </div>
                            <h3 className="text-xl font-semibold text-foreground font-heading">
                              {exp.title}
                            </h3>
                            <p className="text-primary font-medium">{exp.company}</p>
                            <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                              <span className="flex items-center gap-1">
                                <MapPin className="w-3 h-3" />
                                {exp.location}
                              </span>
                              <span className="md:hidden flex items-center gap-1">
                                <Calendar className="w-3 h-3" />
                                {exp.dates}
                              </span>
                            </div>
                          </div>
                          <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform duration-300 ${expandedId === exp.id ? 'rotate-180' : ''
                            }`} />
                        </div>

                        {/* Description */}
                        <p className="text-muted-foreground mb-4">{exp.description}</p>

                        {/* Expandable content */}
                        <div className={`space-y-4 transition-all duration-300 overflow-hidden ${expandedId === exp.id ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                          }`}>
                          {/* Highlights */}
                          <div className="space-y-2">
                            {exp.highlights.map((highlight, i) => (
                              <div key={i} className="flex items-start gap-2 text-sm">
                                <Zap className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                                <span className="text-muted-foreground">{highlight}</span>
                              </div>
                            ))}
                          </div>

                          {/* Technologies */}
                          <div className="flex flex-wrap gap-2 pt-2">
                            {exp.technologies.map((tech) => (
                              <Badge
                                key={tech}
                                variant="secondary"
                                className="bg-primary/10 text-primary border-0 text-xs"
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        {/* Expand hint */}
                        {expandedId !== exp.id && (
                          <p className="text-xs text-muted-foreground text-center mt-4 group-hover:text-primary transition-colors">
                            Click to view details
                          </p>
                        )}
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
