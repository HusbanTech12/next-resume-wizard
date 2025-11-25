import { Link } from "react-router-dom";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-navy text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-mesh opacity-10"></div>
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <h3 className="font-heading text-2xl font-bold mb-5 bg-gradient-primary bg-clip-text text-transparent">
              ElitePro
            </h3>
            <p className="text-white/70 text-sm leading-relaxed">
              Delivering professional solutions to help your business grow and succeed in the digital age.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold mb-5 text-lg">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/" className="text-white/70 hover:text-white transition-all duration-300 hover:translate-x-1 inline-block">Home</Link></li>
              <li><Link to="/about" className="text-white/70 hover:text-white transition-all duration-300 hover:translate-x-1 inline-block">About</Link></li>
              <li><Link to="/services" className="text-white/70 hover:text-white transition-all duration-300 hover:translate-x-1 inline-block">Services</Link></li>
              <li><Link to="/portfolio" className="text-white/70 hover:text-white transition-all duration-300 hover:translate-x-1 inline-block">Portfolio</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-bold mb-5 text-lg">Services</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/services/web-development" className="text-white/70 hover:text-white transition-all duration-300 hover:translate-x-1 inline-block">Web Development</Link></li>
              <li><Link to="/services/mobile-apps" className="text-white/70 hover:text-white transition-all duration-300 hover:translate-x-1 inline-block">Mobile Apps</Link></li>
              <li><Link to="/services/consulting" className="text-white/70 hover:text-white transition-all duration-300 hover:translate-x-1 inline-block">Consulting</Link></li>
              <li><Link to="/resume-builder" className="text-white/70 hover:text-white transition-all duration-300 hover:translate-x-1 inline-block">Resume Builder</Link></li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="font-heading font-bold mb-5 text-lg">Connect With Us</h4>
            <div className="flex gap-4 mb-6">
              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 text-white/70 hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-glow">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 text-white/70 hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-glow">
                <Twitter size={20} />
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 text-white/70 hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-glow">
                <Linkedin size={20} />
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 text-white/70 hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-glow">
                <Instagram size={20} />
              </a>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Email: info@elitepro.com<br />
              Phone: (555) 123-4567
            </p>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-white/60">
          <p>© 2024 ElitePro. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
