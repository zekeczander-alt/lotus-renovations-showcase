import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink } from "lucide-react";
import bathroomImage from "@/assets/bathroom-renovation.jpg";
import heroImage from "@/assets/hero-renovation.jpg";

const Portfolio = () => {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "Modern Kitchen Transformation",
      category: "kitchen",
      image: heroImage,
      description: "Complete kitchen remodel with custom cabinets, quartz countertops, and premium appliances.",
      location: "Westside",
    },
    {
      id: 2,
      title: "Luxury Master Bathroom",
      category: "bathroom",
      image: bathroomImage,
      description: "Spa-like bathroom renovation featuring marble tiles, freestanding tub, and gold fixtures.",
      location: "Downtown",
    },
    {
      id: 3,
      title: "Contemporary Kitchen Design",
      category: "kitchen",
      image: heroImage,
      description: "Sleek modern kitchen with waterfall island and integrated appliances.",
      location: "Hillcrest",
    },
    {
      id: 4,
      title: "Master Suite Renovation",
      category: "bathroom",
      image: bathroomImage,
      description: "Complete master bathroom overhaul with walk-in shower and double vanity.",
      location: "Riverside",
    },
  ];

  const categories = [
    { id: "all", name: "All Projects" },
    { id: "kitchen", name: "Kitchens" },
    { id: "bathroom", name: "Bathrooms" },
    { id: "whole-home", name: "Whole Home" },
  ];

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-heading">Our Portfolio</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our recent projects and see how we transform spaces into beautiful, 
            functional homes that exceed expectations.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={filter === category.id ? "default" : "outline"}
              onClick={() => setFilter(category.id)}
              className="transition-all duration-300"
            >
              {category.name}
            </Button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {filteredProjects.map((project) => (
            <Card
              key={project.id}
              className="group overflow-hidden border-none shadow-soft hover:shadow-strong transition-all duration-500 card-hover"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-300" />
                <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground">
                  {project.category}
                </Badge>
                <Button
                  size="sm"
                  variant="secondary"
                  className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <ExternalLink className="h-4 w-4" />
                </Button>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-3 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-primary font-medium">
                    📍 {project.location}
                  </span>
                  <Button variant="ghost" size="sm" className="text-primary">
                    View Details
                    <ArrowRight className="ml-1 h-3 w-3" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="cta" size="lg" asChild>
            <Link to="/portfolio">
              View Full Portfolio
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;