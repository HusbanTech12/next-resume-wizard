import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Portfolio = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      category: "Web Development",
      description: "A full-featured e-commerce platform with advanced search, payment integration, and inventory management.",
      tags: ["React", "Node.js", "PostgreSQL"],
      results: "300% increase in online sales",
    },
    {
      title: "Healthcare Mobile App",
      category: "Mobile Development",
      description: "Patient management app with appointment scheduling, telemedicine, and health records.",
      tags: ["React Native", "Firebase", "HIPAA Compliant"],
      results: "50,000+ active users",
    },
    {
      title: "Financial Dashboard",
      category: "Web Development",
      description: "Real-time financial analytics dashboard with data visualization and reporting tools.",
      tags: ["TypeScript", "D3.js", "AWS"],
      results: "Reduced reporting time by 75%",
    },
    {
      title: "Supply Chain System",
      category: "Enterprise Software",
      description: "End-to-end supply chain management system with real-time tracking and analytics.",
      tags: ["Microservices", "Docker", "Kubernetes"],
      results: "40% reduction in operational costs",
    },
    {
      title: "Educational Platform",
      category: "Web Development",
      description: "Interactive learning platform with video courses, quizzes, and progress tracking.",
      tags: ["Next.js", "Prisma", "Stripe"],
      results: "10,000+ enrolled students",
    },
    {
      title: "IoT Monitoring App",
      category: "Mobile Development",
      description: "Mobile app for monitoring and controlling IoT devices with real-time alerts.",
      tags: ["Flutter", "MQTT", "Cloud Functions"],
      results: "99.9% uptime maintained",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechStart Inc.",
      content: "ElitePro delivered exactly what we needed. Their attention to detail and commitment to quality is exceptional.",
      project: "E-Commerce Platform",
    },
    {
      name: "Michael Brown",
      company: "HealthCare Solutions",
      content: "The mobile app has transformed how we interact with our patients. Highly professional team.",
      project: "Healthcare Mobile App",
    },
    {
      name: "Jennifer Lee",
      company: "Financial Services Co.",
      content: "Outstanding work on our dashboard. The insights we now have are invaluable to our business.",
      project: "Financial Dashboard",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-hero py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Portfolio</h1>
            <p className="text-lg text-muted-foreground">
              Discover the successful projects we've delivered for clients across various industries
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="group hover:shadow-medium transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 50}ms` }}>
                <CardContent className="p-6">
                  <Badge className="mb-3">{project.category}</Badge>
                  <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                  <p className="text-muted-foreground mb-4 text-sm">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, idx) => (
                      <span key={idx} className="text-xs px-2 py-1 bg-secondary rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="pt-4 border-t">
                    <p className="text-sm font-medium text-primary">{project.results}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Client Success Stories</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <CardContent className="p-6">
                  <p className="text-muted-foreground mb-4 italic">"{testimonial.content}"</p>
                  <div className="pt-4 border-t">
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.company}</div>
                    <div className="text-xs text-primary mt-1">{testimonial.project}</div>
                  </div>
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

export default Portfolio;
