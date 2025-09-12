import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const ExperienceSection = () => {
  const experiences = [
    {
      title: "AI Automation Intern",
      company: "TTC",
      dates: "Jul 2025 – Present",
      description: "Built automated LinkedIn lead generation workflows using PhantomBuster and n8n. Implemented smart response routing to various links and maintained safe automation limits. Developed automated web article generation pipelines using generative AI, including AI-generated images."
    },
    {
      title: "Map & Routing Engineer",
      company: "Algorizms",
      dates: "Jul 2025 – August 2025",
      description: "Served as the backend lead for Ukaab, a fleet management platform. Designed scalable backend services with Supabase + PostgreSQL, and implemented high-security measures. Researched and optimized pathfinding algorithms and route optimization strategies."
    },
    {
      title: "AI Engineering Intern",
      company: "Chiro",
      dates: "Apr 2025 – September 2025",
      description: "Developed an AI-driven hiring system that uses offline LLMs (Gemma2, DeepSeekR1, Command-R, Llamma2) for applicant ranking. This system also enhances resume parsing and integrates with a MongoDB backend to streamline the hiring process."
    }
  ];

  return (
    <section id="experience" className="py-20 bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 font-heading text-foreground">
            Work Experience
          </h2>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="bg-background border-border shadow-card hover:shadow-md transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground font-heading">
                        {exp.title}
                      </h3>
                      <p className="text-lg text-primary font-medium">
                        {exp.company}
                      </p>
                    </div>
                    <Badge variant="secondary" className="text-sm w-fit">
                      {exp.dates}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {exp.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
