import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Award, Shield, Users, ArrowRight } from "lucide-react";
import teamPhoto from "@/assets/team-photo.jpg";

const About = () => {
  const values = [
    {
      icon: <Award className="h-8 w-8" />,
      title: "Craftsmanship",
      description: "Every project reflects our commitment to superior quality and attention to detail."
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Clarity",
      description: "Transparent communication and honest pricing throughout your renovation journey."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Commitment",
      description: "Dedicated to exceeding expectations and building lasting relationships."
    }
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="section-heading text-left">About Lotus Renovations</h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              For over 15 years, Lotus Renovations has been transforming homes throughout 
              the region with exceptional craftsmanship and personalized service. We believe 
              every home has the potential to be extraordinary.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Our team of skilled professionals combines traditional craftsmanship with 
              modern techniques to deliver renovations that not only meet your needs but 
              exceed your expectations. From initial consultation to final walkthrough, 
              we're committed to making your renovation experience seamless and enjoyable.
            </p>

            {/* Values */}
            <div className="space-y-6 mb-8">
              {values.map((value, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="p-2 rounded-lg gradient-primary text-primary-foreground flex-shrink-0">
                    {value.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Credentials */}
            <Card className="mb-8 bg-primary/5 border-primary/20">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-3">Licensed & Insured</h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-medium">License #:</span> BC-123456
                  </div>
                  <div>
                    <span className="font-medium">Insurance:</span> $2M Coverage
                  </div>
                  <div>
                    <span className="font-medium">Established:</span> 2008
                  </div>
                  <div>
                    <span className="font-medium">Projects:</span> 500+ Completed
                  </div>
                </div>
              </CardContent>
            </Card>

            <Button variant="cta" size="lg" asChild>
              <Link to="/about">
                Learn More About Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-lg shadow-strong">
              <img
                src={teamPhoto}
                alt="Lotus Renovations professional team"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 gradient-primary opacity-10"></div>
            </div>
            
            {/* Stats Overlay */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-medium p-6 border">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">15+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
            </div>
            
            <div className="absolute -top-6 -right-6 bg-white rounded-lg shadow-medium p-6 border">
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">500+</div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;