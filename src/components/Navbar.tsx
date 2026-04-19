import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    // { name: "Portfolio", path: "/portfolio" },
    // { name: "Blog", path: "/blog" },
    // { name: "FAQ", path: "/faq" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-lg border-b border-border/50 shadow-soft">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="font-heading text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent hover:scale-105 transition-transform">
            Company.HF
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-semibold transition-all duration-300 relative hover:text-primary ${
                  isActive(link.path) ? "text-primary" : "text-foreground/80"
                } after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-primary after:left-0 after:-bottom-1 after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100 ${
                  isActive(link.path) ? "after:scale-x-100" : ""
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/contact">
              <Button className="shadow-glow">Contact Us</Button>
            </Link>
            <Link to="/resume-builder">
              <Button variant="outline">Resume Builder</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground hover:bg-accent/10 rounded-lg transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-6 animate-slide-in-up border-t border-border/50">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block py-3 text-sm font-semibold transition-colors ${
                  isActive(link.path) ? "text-primary" : "text-foreground/80 hover:text-primary"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/contact" onClick={() => setIsOpen(false)}>
              <Button className="w-full mt-6">Contact Us</Button>
            </Link>
            <Link to="/resume-builder" onClick={() => setIsOpen(false)}>
              <Button variant="outline" className="w-full mt-3">Resume Builder</Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
