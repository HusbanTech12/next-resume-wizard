import { Link } from "react-router-dom";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-navy text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              ElitePro
            </h3>
            <p className="text-white/80 text-sm">
              Delivering professional solutions to help your business grow and succeed in the digital age.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="text-white/80 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-white/80 hover:text-white transition-colors">About</Link></li>
              <li><Link to="/services" className="text-white/80 hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/portfolio" className="text-white/80 hover:text-white transition-colors">Portfolio</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/services/web-development" className="text-white/80 hover:text-white transition-colors">Web Development</Link></li>
              <li><Link to="/services/mobile-apps" className="text-white/80 hover:text-white transition-colors">Mobile Apps</Link></li>
              <li><Link to="/services/consulting" className="text-white/80 hover:text-white transition-colors">Consulting</Link></li>
              <li><Link to="/resume-builder" className="text-white/80 hover:text-white transition-colors">Resume Builder</Link></li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="font-semibold mb-4">Connect With Us</h4>
            <div className="flex gap-4 mb-4">
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
            </div>
            <p className="text-white/80 text-sm">
              Email: info@elitepro.com<br />
              Phone: (555) 123-4567
            </p>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-white/60">
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
