import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, Award, TrendingUp } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Users,
      title: "Client-Focused",
      description: "We put our clients at the center of everything we do, ensuring their success is our success.",
    },
    {
      icon: Target,
      title: "Excellence",
      description: "We strive for excellence in every project, delivering quality that exceeds expectations.",
    },
    {
      icon: Award,
      title: "Innovation",
      description: "We embrace innovation and stay ahead of industry trends to provide cutting-edge solutions.",
    },
    {
      icon: TrendingUp,
      title: "Growth",
      description: "We're committed to continuous improvement and helping our clients achieve sustainable growth.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-hero py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About ElitePro</h1>
            <p className="text-lg text-muted-foreground">
              Building exceptional digital solutions since 2014. We're a team of passionate professionals dedicated to transforming businesses through technology.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Our Story</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="mb-4">
                Founded in 2014, ElitePro emerged from a simple vision: to bridge the gap between cutting-edge technology and business needs. What started as a small team of developers has grown into a full-service digital solutions provider.
              </p>
              <p className="mb-4">
                Over the years, we've helped hundreds of businesses transform their operations, reach new customers, and achieve their goals through innovative technology solutions. Our journey has been marked by continuous learning, adaptation, and an unwavering commitment to excellence.
              </p>
              <p>
                Today, we're proud to serve clients across various industries, from startups to established enterprises, helping them navigate the digital landscape and achieve sustainable growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Core Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="text-white" size={28} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Meet Our Leadership</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { name: "David Thompson", role: "CEO & Founder", image: "DT" },
              { name: "Emily Rodriguez", role: "CTO", image: "ER" },
              { name: "James Wilson", role: "Head of Operations", image: "JW" },
            ].map((member, index) => (
              <Card key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <CardContent className="p-6">
                  <div className="w-24 h-24 bg-gradient-primary rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                    {member.image}
                  </div>
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-muted-foreground">{member.role}</p>
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

export default About;
