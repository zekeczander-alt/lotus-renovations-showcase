import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "Westside",
      rating: 5,
      text: "Lotus Renovations transformed our outdated kitchen into a stunning modern space. Their attention to detail and professionalism exceeded our expectations. The project was completed on time and within budget.",
      project: "Kitchen Remodel"
    },
    {
      name: "Michael Chen",
      location: "Downtown",
      rating: 5,
      text: "The bathroom renovation was flawless from start to finish. The team was courteous, skilled, and kept us informed throughout the process. We couldn't be happier with the results.",
      project: "Master Bathroom"
    },
    {
      name: "Emily Rodriguez",
      location: "Hillcrest",
      rating: 5,
      text: "Working with Lotus Renovations was an absolute pleasure. They listened to our vision and brought it to life beautifully. The quality of workmanship is exceptional.",
      project: "Whole Home Renovation"
    },
    {
      name: "David Thompson",
      location: "Riverside",
      rating: 5,
      text: "Professional, reliable, and incredibly talented. Our home addition blends seamlessly with the original structure. We highly recommend Lotus Renovations to anyone considering a renovation.",
      project: "Home Addition"
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`h-4 w-4 ${
          index < rating
            ? "fill-accent text-accent"
            : "text-muted-foreground"
        }`}
      />
    ));
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-heading">What Our Clients Say</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients 
            have to say about their renovation experience with us.
          </p>
        </div>

        {/* Main Testimonial */}
        <div className="relative max-w-4xl mx-auto mb-12">
          <Card className="border-none shadow-medium bg-gradient-subtle">
            <CardContent className="p-8 md:p-12 text-center">
              <Quote className="h-12 w-12 text-primary mx-auto mb-6 opacity-50" />
              
              <blockquote className="text-xl md:text-2xl font-medium text-foreground mb-6 leading-relaxed italic">
                "{testimonials[currentIndex].text}"
              </blockquote>
              
              <div className="flex justify-center mb-4">
                {renderStars(testimonials[currentIndex].rating)}
              </div>
              
              <div className="text-center">
                <div className="font-semibold text-lg text-foreground">
                  {testimonials[currentIndex].name}
                </div>
                <div className="text-muted-foreground">
                  {testimonials[currentIndex].project} • {testimonials[currentIndex].location}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="sm"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-background/80 backdrop-blur-sm"
            onClick={prevTestimonial}
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          
          <Button
            variant="outline"
            size="sm"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-background/80 backdrop-blur-sm"
            onClick={nextTestimonial}
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        {/* Indicators */}
        <div className="flex justify-center space-x-2 mb-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentIndex ? "bg-primary" : "bg-muted"
              }`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-primary/5 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Join Our Happy Clients
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Ready to transform your home? Get started with a free consultation 
            and see why our clients consistently rate us 5 stars.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="cta" size="lg">
              Get Your Free Estimate
            </Button>
            <Button variant="outline" size="lg">
              Read More Reviews
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;