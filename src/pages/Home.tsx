import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, CheckCircle, Users, Target, Zap } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Home = () => {
  const services = [
    {
      title: "Web Development",
      description: "Custom websites and web applications built with cutting-edge technologies.",
      icon: Zap,
    },
    {
      title: "Mobile Apps",
      description: "Native and cross-platform mobile applications for iOS and Android.",
      icon: Target,
    },
    {
      title: "Consulting",
      description: "Strategic technology consulting to drive your business forward.",
      icon: Users,
    },
  ];

  const testimonials = [
    {
      name: "John Anderson",
      role: "CEO, TechCorp",
      content: "ElitePro transformed our digital presence. Their expertise and professionalism are unmatched.",
    },
    {
      name: "Sarah Miller",
      role: "Marketing Director",
      content: "The team delivered beyond our expectations. Highly recommend their services!",
    },
    {
      name: "Michael Chen",
      role: "Startup Founder",
      content: "Working with ElitePro was a game-changer for our business. Exceptional quality and support.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-hero py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
              Elevate Your Business with
              <span className="bg-gradient-primary bg-clip-text text-transparent"> Professional Solutions</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              We deliver cutting-edge technology solutions that drive growth, enhance efficiency, and transform your digital presence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="group">
                  Get Started
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </Button>
              </Link>
              <Link to="/services">
                <Button size="lg" variant="outline">
                  Our Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive solutions tailored to meet your unique business needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-medium transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <service.icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <Link to={`/services/${service.title.toLowerCase().replace(' ', '-')}`} className="text-primary font-medium inline-flex items-center group-hover:gap-2 transition-all">
                    Learn More
                    <ArrowRight className="ml-1 group-hover:translate-x-1 transition-transform" size={16} />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose ElitePro?</h2>
              <p className="text-muted-foreground mb-6">
                We combine technical expertise with business acumen to deliver solutions that drive real results.
              </p>
              <ul className="space-y-4">
                {[
                  "Experienced team of certified professionals",
                  "Proven track record of successful projects",
                  "Cutting-edge technology and best practices",
                  "Dedicated support and maintenance",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="text-primary flex-shrink-0 mt-1" size={20} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative animate-fade-in" style={{ animationDelay: '200ms' }}>
              <div className="aspect-square bg-gradient-primary rounded-2xl opacity-10 absolute inset-0 blur-3xl"></div>
              <Card className="relative">
                <CardContent className="p-8">
                  <div className="grid grid-cols-2 gap-6 text-center">
                    <div>
                      <div className="text-4xl font-bold text-primary mb-2">500+</div>
                      <div className="text-sm text-muted-foreground">Projects Completed</div>
                    </div>
                    <div>
                      <div className="text-4xl font-bold text-primary mb-2">98%</div>
                      <div className="text-sm text-muted-foreground">Client Satisfaction</div>
                    </div>
                    <div>
                      <div className="text-4xl font-bold text-primary mb-2">50+</div>
                      <div className="text-sm text-muted-foreground">Team Members</div>
                    </div>
                    <div>
                      <div className="text-4xl font-bold text-primary mb-2">10+</div>
                      <div className="text-sm text-muted-foreground">Years Experience</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it - hear from our satisfied clients
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <CardContent className="p-6">
                  <p className="text-muted-foreground mb-4 italic">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Let's discuss how we can help transform your business with our professional solutions.
          </p>
          <Link to="/contact">
            <Button size="lg" variant="secondary">
              Contact Us Today
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
