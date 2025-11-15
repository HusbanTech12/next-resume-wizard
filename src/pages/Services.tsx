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
              <Card key={index} className="group hover:shadow-medium transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 50}ms` }}>
                <CardContent className="p-6">
                  <div className="w-14 h-14 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <service.icon className="text-white" size={28} />
                  </div>
                  <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-sm flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link to={`/services/${service.slug}`}>
                    <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      Learn More
                      <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
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
