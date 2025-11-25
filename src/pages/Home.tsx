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
      <section className="relative overflow-hidden bg-gradient-mesh py-24 md:py-36">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-slide-in-up">
            <h1 className="font-heading text-5xl md:text-7xl font-bold mb-6 text-foreground leading-tight">
              Elevate Your Business with
              <span className="block mt-2 bg-gradient-primary bg-clip-text text-transparent"> Professional Solutions</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed max-w-2xl mx-auto">
              We deliver cutting-edge technology solutions that drive growth, enhance efficiency, and transform your digital presence.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <Link to="/contact">
                <Button size="lg" className="group text-base px-8 py-6 h-auto">
                  Get Started
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </Button>
              </Link>
              <Link to="/services">
                <Button size="lg" variant="outline" className="text-base px-8 py-6 h-auto">
                  Our Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-slide-in-up">
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-5">Our Services</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Comprehensive solutions tailored to meet your unique business needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group animate-scale-in" style={{ animationDelay: `${index * 100}ms` }}>
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-glow">
                    <service.icon className="text-white" size={28} />
                  </div>
                  <h3 className="font-heading text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-5 leading-relaxed">{service.description}</p>
                  <Link to={`/services/${service.title.toLowerCase().replace(' ', '-')}`} className="text-primary font-semibold inline-flex items-center group-hover:gap-2 transition-all hover:text-primary/80">
                    Learn More
                    <ArrowRight className="ml-1 group-hover:translate-x-1 transition-transform" size={18} />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-in-left">
              <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">Why Choose ElitePro?</h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                We combine technical expertise with business acumen to deliver solutions that drive real results.
              </p>
              <ul className="space-y-5">
                {[
                  "Experienced team of certified professionals",
                  "Proven track record of successful projects",
                  "Cutting-edge technology and best practices",
                  "Dedicated support and maintenance",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-4 group">
                    <CheckCircle className="text-primary flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" size={24} />
                    <span className="text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative animate-slide-in-right">
              <div className="aspect-square bg-gradient-primary rounded-3xl opacity-10 absolute inset-0 blur-3xl"></div>
              <Card className="relative">
                <CardContent className="p-10">
                  <div className="grid grid-cols-2 gap-8 text-center">
                    <div className="group cursor-default">
                      <div className="font-heading text-5xl font-bold text-primary mb-3 group-hover:scale-110 transition-transform">500+</div>
                      <div className="text-sm text-muted-foreground font-medium">Projects Completed</div>
                    </div>
                    <div className="group cursor-default">
                      <div className="font-heading text-5xl font-bold text-primary mb-3 group-hover:scale-110 transition-transform">98%</div>
                      <div className="text-sm text-muted-foreground font-medium">Client Satisfaction</div>
                    </div>
                    <div className="group cursor-default">
                      <div className="font-heading text-5xl font-bold text-primary mb-3 group-hover:scale-110 transition-transform">50+</div>
                      <div className="text-sm text-muted-foreground font-medium">Team Members</div>
                    </div>
                    <div className="group cursor-default">
                      <div className="font-heading text-5xl font-bold text-primary mb-3 group-hover:scale-110 transition-transform">10+</div>
                      <div className="text-sm text-muted-foreground font-medium">Years Experience</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-slide-in-up">
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-5">What Our Clients Say</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Don't just take our word for it - hear from our satisfied clients
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="animate-scale-in hover:shadow-large" style={{ animationDelay: `${index * 100}ms` }}>
                <CardContent className="p-8">
                  <p className="text-muted-foreground mb-6 italic text-lg leading-relaxed">"{testimonial.content}"</p>
                  <div>
                    <div className="font-heading font-bold text-lg">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-mesh opacity-20"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6 animate-slide-in-up">Ready to Get Started?</h2>
          <p className="text-lg md:text-xl mb-10 opacity-95 max-w-2xl mx-auto leading-relaxed animate-slide-in-up" style={{ animationDelay: '100ms' }}>
            Let's discuss how we can help transform your business with our professional solutions.
          </p>
          <Link to="/contact">
            <Button size="lg" variant="secondary" className="animate-scale-in text-base px-8 py-6 h-auto" style={{ animationDelay: '200ms' }}>
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
