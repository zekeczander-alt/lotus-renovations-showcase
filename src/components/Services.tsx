import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import {
  Home,
  Bath,
  ChefHat,
  Wrench,
  Paintbrush,
  Building,
  ArrowRight,
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <ChefHat className="h-8 w-8" />,
      title: "Kitchen Remodeling",
      description:
        "Transform your kitchen into a culinary masterpiece with custom cabinets, premium countertops, and modern appliances.",
      features: ["Custom Cabinetry", "Premium Countertops", "Modern Appliances"],
    },
    {
      icon: <Bath className="h-8 w-8" />,
      title: "Bathroom Renovation",
      description:
        "Create your personal spa retreat with luxury fixtures, elegant tilework, and sophisticated design.",
      features: ["Luxury Fixtures", "Custom Tilework", "Spa-Like Design"],
    },
    {
      icon: <Home className="h-8 w-8" />,
      title: "Whole Home Renovation",
      description:
        "Complete home transformations that enhance every aspect of your living space with cohesive design.",
      features: ["Complete Makeover", "Cohesive Design", "Structural Changes"],
    },
    {
      icon: <Building className="h-8 w-8" />,
      title: "Home Additions",
      description:
        "Expand your living space with seamless additions that blend perfectly with your existing home.",
      features: ["Room Additions", "Second Stories", "Outdoor Living"],
    },
    {
      icon: <Paintbrush className="h-8 w-8" />,
      title: "Interior Design",
      description:
        "Professional interior design services to create beautiful, functional spaces that reflect your style.",
      features: ["Space Planning", "Color Consultation", "Furniture Selection"],
    },
    {
      icon: <Wrench className="h-8 w-8" />,
      title: "Custom Carpentry",
      description:
        "Bespoke woodworking and carpentry solutions including built-ins, trim work, and custom furniture.",
      features: ["Built-in Storage", "Custom Trim", "Unique Furniture"],
    },
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-heading">Our Services</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From kitchen remodels to whole-home transformations, we bring your vision to life 
            with exceptional craftsmanship and attention to detail.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Card
              key={index}
              className="card-hover border-none shadow-soft bg-card/50 backdrop-blur-sm"
            >
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 rounded-full gradient-primary text-primary-foreground w-fit">
                  {service.icon}
                </div>
                <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-sm text-foreground"
                    >
                      <div className="w-2 h-2 rounded-full bg-primary mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <p className="text-lg text-muted-foreground mb-6">
            Ready to start your renovation project?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="cta" size="lg" asChild>
              <Link to="/estimate">
                Get Your Free Estimate
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;