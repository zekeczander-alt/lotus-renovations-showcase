import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from "lucide-react";
import lotusLogo from "@/assets/lotus-logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img src={lotusLogo} alt="Lotus Renovations" className="h-8 w-8" />
              <span className="text-xl font-bold">Lotus Renovations</span>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              Transforming homes with exceptional craftsmanship, personalized service, 
              and uncompromising attention to detail since 2008.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-primary-foreground/60 hover:text-primary-foreground transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-primary-foreground/60 hover:text-primary-foreground transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-primary-foreground/60 hover:text-primary-foreground transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: "Home", path: "/" },
                { name: "Services", path: "/services" },
                { name: "Portfolio", path: "/portfolio" },
                { name: "About Us", path: "/about" },
                { name: "Testimonials", path: "/testimonials" },
                { name: "Process", path: "/process" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>Kitchen Remodeling</li>
              <li>Bathroom Renovation</li>
              <li>Whole Home Renovation</li>
              <li>Home Additions</li>
              <li>Interior Design</li>
              <li>Custom Carpentry</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-accent-light" />
                <a
                  href="tel:+1234567890"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  (123) 456-7890
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-accent-light" />
                <a
                  href="mailto:info@lotusrenovations.com"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  info@lotusrenovations.com
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-accent-light mt-0.5" />
                <div className="text-primary-foreground/80">
                  123 Renovation Way<br />
                  Building City, BC 12345
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-primary-foreground/60 text-sm">
            © 2024 Lotus Renovations. All rights reserved. Licensed & Insured.
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link
              to="/privacy"
              className="text-primary-foreground/60 hover:text-primary-foreground text-sm transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="text-primary-foreground/60 hover:text-primary-foreground text-sm transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;