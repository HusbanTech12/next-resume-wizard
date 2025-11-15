import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, ArrowLeft } from "lucide-react";

const ServiceDetail = () => {
  const { slug } = useParams();

  const serviceData: Record<string, any> = {
    "web-development": {
      title: "Web Development",
      description: "Build powerful, scalable web applications with modern technologies",
      longDescription: "Our web development services combine cutting-edge technology with user-centric design to create websites and web applications that drive results. We specialize in responsive design, performance optimization, and creating seamless user experiences across all devices.",
      benefits: [
        "Custom design tailored to your brand",
        "Responsive and mobile-first approach",
        "SEO optimized for better visibility",
        "Fast loading times and performance",
        "Secure and scalable architecture",
        "Ongoing maintenance and support",
      ],
      technologies: ["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL", "AWS"],
    },
    "mobile-apps": {
      title: "Mobile App Development",
      description: "Create engaging mobile experiences for iOS and Android",
      longDescription: "We develop high-quality mobile applications that provide exceptional user experiences across iOS and Android platforms. Whether you need a native app or a cross-platform solution, our team has the expertise to bring your vision to life.",
      benefits: [
        "Native iOS and Android development",
        "Cross-platform solutions with React Native",
        "Intuitive user interface design",
        "Seamless integration with backend services",
        "App Store and Play Store deployment",
        "Post-launch support and updates",
      ],
      technologies: ["React Native", "Swift", "Kotlin", "Firebase", "RESTful APIs", "Push Notifications"],
    },
    "consulting": {
      title: "IT Consulting",
      description: "Strategic guidance for your technology initiatives",
      longDescription: "Our IT consulting services help businesses make informed technology decisions, optimize their IT infrastructure, and implement digital transformation strategies that align with their business goals.",
      benefits: [
        "Technology strategy development",
        "Digital transformation roadmaps",
        "Process automation recommendations",
        "Technology stack evaluation",
        "Cost optimization strategies",
        "Risk assessment and mitigation",
      ],
      technologies: ["Enterprise Architecture", "Cloud Platforms", "DevOps", "Agile Methodologies", "Business Intelligence"],
    },
  };

  const service = serviceData[slug || ""] || serviceData["web-development"];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-hero py-20">
        <div className="container mx-auto px-4">
          <Link to="/services" className="inline-flex items-center text-primary hover:underline mb-6">
            <ArrowLeft size={20} className="mr-2" />
            Back to Services
          </Link>
          <div className="max-w-3xl animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{service.title}</h1>
            <p className="text-xl text-muted-foreground">{service.description}</p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold mb-6">Overview</h2>
              <p className="text-lg text-muted-foreground mb-8">{service.longDescription}</p>

              <h3 className="text-2xl font-bold mb-6">Key Benefits</h3>
              <div className="grid md:grid-cols-2 gap-4 mb-12">
                {service.benefits.map((benefit: string, index: number) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="text-primary flex-shrink-0 mt-1" size={20} />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>

              <h3 className="text-2xl font-bold mb-6">Technologies We Use</h3>
              <div className="flex flex-wrap gap-3">
                {service.technologies.map((tech: string, index: number) => (
                  <span key={index} className="px-4 py-2 bg-secondary rounded-full text-sm font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="lg:col-span-1">
              <Card className="sticky top-24">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Ready to Get Started?</h3>
                  <p className="text-muted-foreground mb-6">
                    Let's discuss how we can help you achieve your goals with our {service.title.toLowerCase()} services.
                  </p>
                  <Link to="/contact">
                    <Button className="w-full mb-3">Contact Us</Button>
                  </Link>
                  <div className="pt-6 border-t">
                    <div className="text-sm text-muted-foreground mb-2">Need help choosing?</div>
                    <Link to="/services" className="text-primary hover:underline text-sm">
                      View All Services →
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServiceDetail;
