import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
    Mail,
    Phone,
    MapPin,
    Linkedin,
    Github,
    Download,
    MessageCircle
} from 'lucide-react';

const ContactSection = () => {
    const contactInfo = [
        {
            icon: <Mail className="w-5 h-5" />,
            label: 'Email',
            value: 'daniyalaziz184@gmail.com',
            href: 'mailto:daniyalaziz184@gmail.com'
        },
        {
            icon: <Phone className="w-5 h-5" />,
            label: 'Phone / WhatsApp',
            value: '+92 332 8675520',
            href: 'tel:+923328675520'
        },
        {
            icon: <MapPin className="w-5 h-5" />,
            label: 'Location',
            value: 'Islamabad, Pakistan',
            href: null
        }
    ];

    const socialLinks = [
        {
            icon: <Linkedin className="w-5 h-5" />,
            label: 'LinkedIn',
            href: 'https://www.linkedin.com/in/daniyal-aziz-643309246/'
        },
        {
            icon: <Github className="w-5 h-5" />,
            label: 'GitHub',
            href: 'https://github.com/Daniyal1234-alt'
        }
    ];

    return (
        <section id="contact" className="py-24 bg-background relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-circuit opacity-30" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background" />

            <div className="container relative z-10 mx-auto px-6">
                <div className="max-w-3xl mx-auto">
                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4">
                            Get In <span className="gradient-text">Touch</span>
                        </h2>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                            Have a project in mind? Let's discuss how AI automation can transform your business.
                        </p>
                    </div>

                    {/* Simple CTA Message */}
                    <Card className="bg-card/50 border-border/50 mb-12">
                        <CardContent className="p-8 text-center">
                            <MessageCircle className="w-12 h-12 text-primary mx-auto mb-4" />
                            <h3 className="text-2xl font-semibold text-foreground font-heading mb-4">
                                Let's Connect!
                            </h3>
                            <p className="text-muted-foreground text-lg mb-6">
                                Feel free to <span className="text-primary font-medium">text me</span> at my number or <span className="text-primary font-medium">send me an email</span>. I typically respond within 24 hours.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button
                                    size="lg"
                                    asChild
                                    className="bg-primary hover:bg-primary-hover text-primary-foreground shadow-glow hover:shadow-glow-lg transition-all duration-300"
                                >
                                    <a href="mailto:daniyalaziz184@gmail.com">
                                        <Mail className="w-5 h-5 mr-2" />
                                        Email Me
                                    </a>
                                </Button>
                                <Button
                                    size="lg"
                                    variant="outline"
                                    asChild
                                    className="border-primary/50 hover:bg-primary/10 hover:border-primary transition-all duration-300"
                                >
                                    <a href="https://wa.me/923328675520" target="_blank" rel="noopener noreferrer">
                                        <Phone className="w-5 h-5 mr-2" />
                                        WhatsApp Me
                                    </a>
                                </Button>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Contact Info Cards */}
                    <div className="grid md:grid-cols-3 gap-4 mb-8">
                        {contactInfo.map((item, index) => (
                            <Card key={index} className="bg-card/50 border-border/50 hover:border-primary/30 transition-all duration-300">
                                <CardContent className="p-4">
                                    {item.href ? (
                                        <a
                                            href={item.href}
                                            className="flex items-center gap-4 group"
                                        >
                                            <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                                                {item.icon}
                                            </div>
                                            <div>
                                                <p className="text-sm text-muted-foreground">{item.label}</p>
                                                <p className="text-foreground font-medium group-hover:text-primary transition-colors text-sm">
                                                    {item.value}
                                                </p>
                                            </div>
                                        </a>
                                    ) : (
                                        <div className="flex items-center gap-4">
                                            <div className="p-3 rounded-xl bg-primary/10 text-primary">
                                                {item.icon}
                                            </div>
                                            <div>
                                                <p className="text-sm text-muted-foreground">{item.label}</p>
                                                <p className="text-foreground font-medium text-sm">{item.value}</p>
                                            </div>
                                        </div>
                                    )}
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    {/* Social Links & CV */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        {socialLinks.map((link, index) => (
                            <Button
                                key={index}
                                variant="outline"
                                size="lg"
                                asChild
                                className="border-border/50 hover:border-primary hover:bg-primary/10 hover:text-primary transition-all duration-300"
                            >
                                <a href={link.href} target="_blank" rel="noopener noreferrer">
                                    {link.icon}
                                    <span className="ml-2">{link.label}</span>
                                </a>
                            </Button>
                        ))}
                        <Button
                            size="lg"
                            asChild
                            className="bg-primary hover:bg-primary-hover text-primary-foreground transition-all duration-300"
                        >
                            <a
                                href="https://drive.google.com/file/d/1mF4fqygtJM7HVC3soUSDT2DDjkwD6Oyg/view?usp=sharing"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Download className="w-5 h-5 mr-2" />
                                Download CV
                            </a>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
