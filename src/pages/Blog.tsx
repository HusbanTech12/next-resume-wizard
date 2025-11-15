import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, ArrowRight } from "lucide-react";

const Blog = () => {
  const posts = [
    {
      slug: "future-of-web-development",
      title: "The Future of Web Development in 2024",
      excerpt: "Explore the latest trends and technologies shaping the future of web development.",
      category: "Web Development",
      date: "March 15, 2024",
      readTime: "5 min read",
    },
    {
      slug: "mobile-app-best-practices",
      title: "10 Best Practices for Mobile App Development",
      excerpt: "Essential guidelines for creating successful mobile applications that users love.",
      category: "Mobile Development",
      date: "March 10, 2024",
      readTime: "7 min read",
    },
    {
      slug: "cloud-migration-guide",
      title: "Complete Guide to Cloud Migration",
      excerpt: "Step-by-step process for successfully migrating your infrastructure to the cloud.",
      category: "Cloud Computing",
      date: "March 5, 2024",
      readTime: "10 min read",
    },
    {
      slug: "cybersecurity-essentials",
      title: "Cybersecurity Essentials for Modern Businesses",
      excerpt: "Protect your business with these fundamental cybersecurity practices and strategies.",
      category: "Security",
      date: "February 28, 2024",
      readTime: "6 min read",
    },
    {
      slug: "ai-business-transformation",
      title: "How AI is Transforming Business Operations",
      excerpt: "Discover how artificial intelligence is revolutionizing the way businesses operate.",
      category: "AI & Technology",
      date: "February 20, 2024",
      readTime: "8 min read",
    },
    {
      slug: "responsive-design-tips",
      title: "Responsive Design Tips for 2024",
      excerpt: "Master responsive design with these proven techniques and best practices.",
      category: "Design",
      date: "February 15, 2024",
      readTime: "5 min read",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-hero py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Blog</h1>
            <p className="text-lg text-muted-foreground">
              Insights, tips, and updates from our team of technology experts
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <Card key={index} className="group hover:shadow-medium transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 50}ms` }}>
                <CardContent className="p-6">
                  <Badge className="mb-3">{post.category}</Badge>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      <span>{post.date}</span>
                    </div>
                    <span>{post.readTime}</span>
                  </div>
                  <Link
                    to={`/blog/${post.slug}`}
                    className="text-primary font-medium inline-flex items-center group-hover:gap-2 transition-all"
                  >
                    Read More
                    <ArrowRight className="ml-1 group-hover:translate-x-1 transition-transform" size={16} />
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

export default Blog;
