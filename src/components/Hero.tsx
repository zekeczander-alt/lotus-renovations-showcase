import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Star, Award, Users } from "lucide-react";
import heroImage from "@/assets/hero-renovation.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Beautiful kitchen renovation showcasing Lotus Renovations' quality work"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 gradient-hero"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Transforming{" "}
            <span className="text-accent-light">Dreams</span> Into{" "}
            <span className="text-accent-light">Reality</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Luxury home renovations with unparalleled craftsmanship, 
            personalized service, and attention to every detail.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              variant="cta"
              size="lg"
              className="text-lg px-8 py-4 h-auto"
              asChild
            >
              <Link to="/estimate">
                Get Your Free Estimate
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 py-4 h-auto bg-white/10 border-white/30 text-white hover:bg-white/20"
              asChild
            >
              <Link to="/portfolio">View Our Work</Link>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="flex items-center justify-center space-x-2">
              <Award className="h-6 w-6 text-accent-light" />
              <div className="text-left">
                <div className="font-bold text-lg">Licensed & Insured</div>
                <div className="text-sm text-gray-300">Fully Certified</div>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Star className="h-6 w-6 text-accent-light" />
              <div className="text-left">
                <div className="font-bold text-lg">5-Star Reviews</div>
                <div className="text-sm text-gray-300">100+ Happy Clients</div>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Users className="h-6 w-6 text-accent-light" />
              <div className="text-left">
                <div className="font-bold text-lg">Expert Team</div>
                <div className="text-sm text-gray-300">15+ Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;