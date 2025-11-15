import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Code, Smartphone, Lightbulb, Database, Cloud, Shield, ArrowRight } from "lucide-react";

const Services = () => {
  const services = [
    {
      slug: "web-development",
      icon: Code,
      title: "Web Development",
      description: "Custom websites and web applications built with modern frameworks and technologies.",
      features: ["Responsive Design", "SEO Optimized", "Fast Performance", "Scalable Architecture"],
    },
    {
      slug: "mobile-apps",
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android devices.",
      features: ["Native Performance", "Cross-Platform", "User-Friendly UI", "App Store Ready"],
    },
    {
      slug: "consulting",
      icon: Lightbulb,
      title: "IT Consulting",
      description: "Strategic technology consulting to help your business make informed decisions.",
      features: ["Technology Strategy", "Digital Transformation", "Process Optimization", "Expert Guidance"],
    },
    {
      slug: "cloud-solutions",
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and migration services for modern businesses.",
      features: ["Cloud Migration", "Infrastructure Setup", "Cost Optimization", "24/7 Support"],
    },
    {
      slug: "database-management",
      icon: Database,
      title: "Database Management",
      description: "Robust database design, optimization, and management services.",
      features: ["Database Design", "Performance Tuning", "Backup Solutions", "Security Hardening"],
    },
    {
      slug: "cybersecurity",
      icon: Shield,
      title: "Cybersecurity",
      description: "Comprehensive security solutions to protect your digital assets.",
      features: ["Security Audits", "Penetration Testing", "Compliance", "Incident Response"],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-hero py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-lg text-muted-foreground">
              Comprehensive technology solutions designed to drive your business forward
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="group relative overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 hover:shadow-elegant transition-all duration-500 animate-fade-in" 
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <CardContent className="relative p-8">
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-glow">
                    <service.icon className="text-primary-foreground" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-sm flex items-center gap-3 text-foreground/80">
                        <div className="w-2 h-2 bg-gradient-primary rounded-full shadow-sm"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link to={`/services/${service.slug}`}>
                    <Button variant="ghost" className="group/btn w-full justify-between hover:bg-primary/10">
                      <span>Learn More</span>
                      <ArrowRight className="ml-2 group-hover/btn:translate-x-1 transition-transform" size={18} />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
