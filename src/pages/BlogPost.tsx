import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowLeft } from "lucide-react";

const BlogPost = () => {
  const { slug } = useParams();

  const posts: Record<string, any> = {
    "future-of-web-development": {
      title: "The Future of Web Development in 2024",
      category: "Web Development",
      date: "March 15, 2024",
      readTime: "5 min read",
      content: `
        Web development continues to evolve at a rapid pace, with new technologies and frameworks emerging regularly. In 2024, we're seeing several key trends that are shaping the industry.

        ## Key Trends

        ### 1. AI-Powered Development Tools
        Artificial intelligence is becoming an integral part of the development process, from code completion to automated testing and bug detection.

        ### 2. Serverless Architecture
        More businesses are adopting serverless architectures to reduce infrastructure management overhead and improve scalability.

        ### 3. Progressive Web Apps (PWAs)
        PWAs continue to blur the line between web and native applications, offering app-like experiences through the browser.

        ### 4. WebAssembly
        WebAssembly is enabling high-performance applications in the browser, opening up new possibilities for web-based software.

        ## Conclusion

        The future of web development is exciting and full of opportunities. Staying current with these trends will be crucial for developers and businesses alike.
      `,
    },
  };

  const post = posts[slug || ""] || posts["future-of-web-development"];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <article className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Link to="/blog" className="inline-flex items-center text-primary hover:underline mb-6">
              <ArrowLeft size={20} className="mr-2" />
              Back to Blog
            </Link>

            <div className="mb-8 animate-fade-in">
              <Badge className="mb-4">{post.category}</Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">{post.title}</h1>
              <div className="flex items-center gap-6 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Calendar size={18} />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={18} />
                  <span>{post.readTime}</span>
                </div>
              </div>
            </div>

            <div className="prose prose-lg max-w-none animate-fade-in" style={{ animationDelay: '100ms' }}>
              {post.content.split('\n').map((paragraph: string, index: number) => {
                if (paragraph.startsWith('## ')) {
                  return <h2 key={index} className="text-3xl font-bold mt-8 mb-4">{paragraph.replace('## ', '')}</h2>;
                }
                if (paragraph.startsWith('### ')) {
                  return <h3 key={index} className="text-2xl font-semibold mt-6 mb-3">{paragraph.replace('### ', '')}</h3>;
                }
                if (paragraph.trim()) {
                  return <p key={index} className="mb-4 text-muted-foreground leading-relaxed">{paragraph}</p>;
                }
                return null;
              })}
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default BlogPost;
