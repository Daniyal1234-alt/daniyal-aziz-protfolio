import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
    Workflow,
    Bot,
    Code2,
    Plug,
    ChevronRight,
    Zap,
    Brain,
    Database,
    Globe
} from 'lucide-react';

interface Skill {
    name: string;
    description?: string;
    level?: 'expert' | 'advanced' | 'intermediate';
}

interface SkillCategory {
    id: string;
    title: string;
    icon: React.ReactNode;
    description: string;
    skills: Skill[];
    color: string;
}

const skillCategories: SkillCategory[] = [
    {
        id: 'workflow',
        title: 'Workflow Orchestration & Automation',
        icon: <Workflow className="w-6 h-6" />,
        description: 'Building complex multi-step automations with self-hosted and cloud solutions',
        color: 'from-cyan-500 to-blue-500',
        skills: [
            { name: 'n8n', description: 'Self-hosted, custom nodes, complex branching', level: 'expert' },
            { name: 'Make (Integromat)', description: 'Advanced scenarios & error handling', level: 'expert' },
            { name: 'Zapier', description: 'Multi-step Zaps & Paths', level: 'advanced' },
            { name: 'PhantomBuster', description: 'LinkedIn automation & scraping', level: 'advanced' },
            { name: 'GoHighLevel', description: 'CRM automation workflows', level: 'advanced' },
            { name: 'Instantly.ai', description: 'Cold outreach automation', level: 'advanced' },
        ]
    },
    {
        id: 'ai',
        title: 'AI & LLM Engineering',
        icon: <Brain className="w-6 h-6" />,
        description: 'Integrating and orchestrating large language models for production systems',
        color: 'from-purple-500 to-pink-500',
        skills: [
            { name: 'OpenAI GPT-4', description: 'Advanced prompting, function calling', level: 'expert' },
            { name: 'Anthropic Claude', description: 'Long context, complex reasoning', level: 'expert' },
            { name: 'Google Gemini', description: 'Multimodal, reflection patterns', level: 'advanced' },
            { name: 'DeepSeek', description: 'Cost-effective inference', level: 'advanced' },
            { name: 'Agentic Patterns', description: 'Planning, reflection, tool use', level: 'expert' },
            { name: 'RAG Pipelines', description: 'Vector search, embeddings', level: 'advanced' },
            { name: 'Voice AI (Retell)', description: 'Conversational agents', level: 'advanced' },
        ]
    },
    {
        id: 'fullstack',
        title: 'Full Stack Development',
        icon: <Code2 className="w-6 h-6" />,
        description: 'Building modern web applications and backend services',
        color: 'from-green-500 to-emerald-500',
        skills: [
            { name: 'React / TypeScript', description: 'Modern frontend development', level: 'advanced' },
            { name: 'Python / FastAPI', description: 'High-performance APIs', level: 'expert' },
            { name: 'Node.js', description: 'Backend services & integrations', level: 'advanced' },
            { name: 'Supabase / PostgreSQL', description: 'Database design & management', level: 'advanced' },
            { name: 'MongoDB', description: 'NoSQL data modeling', level: 'advanced' },
            { name: 'Tailwind CSS', description: 'Rapid UI development', level: 'advanced' },
        ]
    },
    {
        id: 'saas',
        title: 'SaaS Integrations & APIs',
        icon: <Plug className="w-6 h-6" />,
        description: 'Connecting disparate systems through API integrations',
        color: 'from-orange-500 to-yellow-500',
        skills: [
            { name: 'Xero API', description: 'Invoice processing, GL coding', level: 'expert' },
            { name: 'Reapit', description: 'Property management automation', level: 'advanced' },
            { name: 'Casepeer', description: 'Legal CRM integration', level: 'advanced' },
            { name: 'Facebook/Instagram APIs', description: 'Social lead capture', level: 'advanced' },
            { name: 'Google APIs', description: 'Sheets, Drive, Maps', level: 'advanced' },
            { name: 'Webhooks', description: 'Real-time event processing', level: 'expert' },
        ]
    }
];

const SkillsSection = () => {
    const [expandedCategory, setExpandedCategory] = useState<string | null>('workflow');

    const getLevelColor = (level?: string) => {
        switch (level) {
            case 'expert': return 'bg-primary/20 text-primary border-primary/30';
            case 'advanced': return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
            default: return 'bg-muted text-muted-foreground border-border';
        }
    };

    return (
        <section id="skills" className="py-24 bg-card relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-glow opacity-30" />

            <div className="container relative z-10 mx-auto px-6">
                <div className="max-w-6xl mx-auto">
                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4">
                            Technical <span className="gradient-text">Skills</span>
                        </h2>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                            A comprehensive toolkit for building production-grade AI automation systems
                        </p>
                    </div>

                    {/* Skills Grid */}
                    <div className="grid md:grid-cols-2 gap-6">
                        {skillCategories.map((category) => (
                            <Card
                                key={category.id}
                                className={`bg-background/50 border-border/50 hover:border-primary/30 transition-all duration-300 cursor-pointer group ${expandedCategory === category.id ? 'border-primary/50 shadow-glow' : ''
                                    }`}
                                onClick={() => setExpandedCategory(expandedCategory === category.id ? null : category.id)}
                            >
                                <CardContent className="p-6">
                                    {/* Header */}
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="flex items-center gap-4">
                                            <div className={`p-3 rounded-xl bg-gradient-to-br ${category.color} text-white`}>
                                                {category.icon}
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-semibold text-foreground font-heading">
                                                    {category.title}
                                                </h3>
                                                <p className="text-sm text-muted-foreground mt-1">
                                                    {category.description}
                                                </p>
                                            </div>
                                        </div>
                                        <ChevronRight className={`w-5 h-5 text-muted-foreground transition-transform duration-300 ${expandedCategory === category.id ? 'rotate-90' : ''
                                            }`} />
                                    </div>

                                    {/* Skills List */}
                                    <div className={`grid gap-3 transition-all duration-300 ${expandedCategory === category.id ? 'opacity-100 max-h-[500px]' : 'opacity-70 max-h-[150px] overflow-hidden'
                                        }`}>
                                        {category.skills.map((skill, index) => (
                                            <div
                                                key={index}
                                                className="flex items-center justify-between p-3 rounded-lg bg-card/50 border border-border/30 hover:border-primary/20 transition-colors"
                                            >
                                                <div className="flex items-center gap-3">
                                                    <Zap className="w-4 h-4 text-primary" />
                                                    <div>
                                                        <span className="text-foreground font-medium">{skill.name}</span>
                                                        {skill.description && expandedCategory === category.id && (
                                                            <p className="text-xs text-muted-foreground mt-0.5">{skill.description}</p>
                                                        )}
                                                    </div>
                                                </div>
                                                {skill.level && (
                                                    <Badge variant="outline" className={`text-xs capitalize ${getLevelColor(skill.level)}`}>
                                                        {skill.level}
                                                    </Badge>
                                                )}
                                            </div>
                                        ))}
                                    </div>

                                    {/* Expand hint */}
                                    {expandedCategory !== category.id && (
                                        <p className="text-xs text-muted-foreground text-center mt-4 group-hover:text-primary transition-colors">
                                            Click to expand
                                        </p>
                                    )}
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    {/* Additional Tech Icons */}
                    <div className="mt-16 text-center">
                        <p className="text-muted-foreground mb-6">Also experienced with</p>
                        <div className="flex flex-wrap justify-center gap-4">
                            {['Docker', 'Git', 'REST APIs', 'GraphQL', 'WebSockets', 'Cron Jobs', 'OAuth 2.0', 'JWT'].map((tech) => (
                                <Badge
                                    key={tech}
                                    variant="outline"
                                    className="px-4 py-2 text-sm border-border/50 hover:border-primary/50 hover:text-primary transition-colors"
                                >
                                    {tech}
                                </Badge>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;
