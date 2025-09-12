import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award, Calendar } from 'lucide-react';

const CertificationsSection = () => {
  const certifications = [
    {
      title: "Getting Started with Git and GitHub",
      issuer: "IBM",
      issued: "Jan 2025",
      skills: ["Version Control", "Version Control Tools"]
    },
    {
      title: "Python for Data Science, AI & Development",
      issuer: "IBM",
      issued: "Jul 2024",
      skills: ["Pandas", "Data Preprocessing", "Numpy", "AI Basics"]
    },
    {
      title: "Introduction to Cloud Computing",
      issuer: "IBM",
      issued: "Jul 2024",
      skills: ["Cloud Computing", "IBM Cloud", "Regulatory Compliance", "Cloud Storage"]
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 font-heading text-foreground">
            Licenses & Certifications
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="bg-card border-border shadow-card hover:shadow-md transition-all duration-300 group">
                <CardHeader className="pb-4">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
                      <Award className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-foreground font-heading leading-tight">
                        {cert.title}
                      </h3>
                      <p className="text-primary font-medium mt-1">
                        {cert.issuer}
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                    <Calendar className="w-4 h-4" />
                    <span>Issued {cert.issued}</span>
                  </div>
                  
                  {cert.skills.length > 0 && (
                    <div className="space-y-2">
                      <p className="text-sm font-medium text-foreground">Skills:</p>
                      <div className="flex flex-wrap gap-2">
                        {cert.skills.map((skill, skillIndex) => (
                          <Badge key={skillIndex} variant="outline" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
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

export default CertificationsSection;