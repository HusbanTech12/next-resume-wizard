import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "What services does ElitePro offer?",
      answer: "We offer comprehensive technology solutions including web development, mobile app development, IT consulting, cloud solutions, database management, and cybersecurity services.",
    },
    {
      question: "How long does a typical project take?",
      answer: "Project timelines vary based on complexity and scope. A simple website might take 4-6 weeks, while a complex web application could take 3-6 months. We'll provide a detailed timeline during our initial consultation.",
    },
    {
      question: "What is your development process?",
      answer: "We follow an agile development methodology with regular client check-ins. Our process includes discovery, planning, design, development, testing, and deployment phases, ensuring quality at every step.",
    },
    {
      question: "Do you provide ongoing support and maintenance?",
      answer: "Yes, we offer comprehensive support and maintenance packages to ensure your application continues to run smoothly and stays up-to-date with the latest technologies and security patches.",
    },
    {
      question: "Can you work with existing systems?",
      answer: "Absolutely! We have extensive experience integrating with existing systems, migrating legacy applications, and modernizing outdated technology stacks while ensuring minimal disruption to your operations.",
    },
    {
      question: "What technologies do you specialize in?",
      answer: "We specialize in modern web technologies including React, Next.js, Node.js, and cloud platforms like AWS. For mobile development, we use React Native, Swift, and Kotlin. We stay current with industry best practices and emerging technologies.",
    },
    {
      question: "How do you ensure project security?",
      answer: "Security is a top priority. We implement industry-standard security practices, conduct regular security audits, use encrypted communications, and follow OWASP guidelines for all our projects.",
    },
    {
      question: "What are your pricing models?",
      answer: "We offer flexible pricing models including fixed-price projects, time and materials, and retainer-based engagements. The best model depends on your project scope and requirements, which we'll discuss during our consultation.",
    },
    {
      question: "Do you sign NDAs?",
      answer: "Yes, we're happy to sign NDAs to protect your intellectual property and confidential information. We take client confidentiality very seriously.",
    },
    {
      question: "How do I get started?",
      answer: "Simply contact us through our contact form, email, or phone. We'll schedule a free consultation to discuss your project requirements, timeline, and budget, and provide you with a detailed proposal.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-hero py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Frequently Asked Questions</h1>
            <p className="text-lg text-muted-foreground">
              Find answers to common questions about our services and processes
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border rounded-lg px-6 animate-fade-in"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <AccordionTrigger className="text-left font-semibold hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pt-2">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <div className="mt-12 text-center p-8 bg-secondary rounded-lg animate-fade-in">
              <h3 className="text-2xl font-bold mb-4">Still Have Questions?</h3>
              <p className="text-muted-foreground mb-6">
                Can't find the answer you're looking for? Our team is here to help.
              </p>
              <a
                href="/contact"
                className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQ;
