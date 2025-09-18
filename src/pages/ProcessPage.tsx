import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Phone, Calendar, Hammer, CheckCircle } from "lucide-react";
import Contact from "@/components/Contact";

const ProcessPage = () => {
  const steps = [
    {
      number: "01",
      icon: <Phone className="h-8 w-8" />,
      title: "Initial Consultation",
      description: "We start with a free consultation to understand your vision, needs, and budget. Our team will assess your space and discuss possibilities.",
      duration: "1-2 hours"
    },
    {
      number: "02",
      icon: <Calendar className="h-8 w-8" />,
      title: "Design & Planning",
      description: "Our designers create detailed plans and 3D renderings. We'll work together to refine the design until it perfectly matches your vision.",
      duration: "1-2 weeks"
    },
    {
      number: "03",
      icon: <Hammer className="h-8 w-8" />,
      title: "Construction Phase",
      description: "Our skilled craftsmen bring your design to life with precision and care. We maintain clear communication throughout the build process.",
      duration: "Varies by project"
    },
    {
      number: "04",
      icon: <CheckCircle className="h-8 w-8" />,
      title: "Final Walkthrough",
      description: "We conduct a thorough final inspection together, ensuring every detail meets our high standards and your complete satisfaction.",
      duration: "1 hour"
    }
  ];

  const faqs = [
    {
      question: "How long does a typical renovation take?",
      answer: "Timeline varies by project scope. Kitchen remodels typically take 3-6 weeks, bathrooms 2-4 weeks, and whole home renovations 3-6 months."
    },
    {
      question: "Do you handle permits and inspections?",
      answer: "Yes, we handle all necessary permits and coordinate inspections with local authorities to ensure your project meets all building codes."
    },
    {
      question: "What is your payment schedule?",
      answer: "We typically request 10% to start, with progress payments throughout the project. Final payment is due upon completion and your satisfaction."
    },
    {
      question: "Do you provide warranties on your work?",
      answer: "Yes, we provide comprehensive warranties on all our work. Specific warranty terms depend on the type of work performed."
    },
    {
      question: "Can I live in my home during renovation?",
      answer: "For most projects, yes. We work to minimize disruption and can often work around your schedule to keep key areas functional."
    },
    {
      question: "How do you handle unexpected issues?",
      answer: "We communicate immediately about any unexpected issues and provide solutions with transparent pricing before proceeding."
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Process</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            From initial consultation to final walkthrough, we've streamlined our process 
            to ensure a smooth, transparent renovation experience.
          </p>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <Card key={index} className="text-center relative border-none shadow-soft">
                <CardHeader>
                  <div className="mx-auto mb-4 p-4 rounded-full gradient-primary text-primary-foreground w-fit">
                    {step.icon}
                  </div>
                  <div className="text-4xl font-bold text-accent mb-2">{step.number}</div>
                  <CardTitle className="text-xl">{step.title}</CardTitle>
                  <div className="text-sm text-muted-foreground">{step.duration}</div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </CardContent>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="h-6 w-6 text-muted-foreground" />
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-heading">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Get answers to common questions about our renovation process, 
              timelines, and what to expect when working with us.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {faqs.map((faq, index) => (
                <Card key={index} className="border-none shadow-soft">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-3 text-foreground">
                      {faq.question}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-muted-foreground mb-6">
              Have more questions? We're here to help!
            </p>
            <Button variant="cta" size="lg" asChild>
              <Link to="/estimate">
                Get Your Free Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Contact />
    </div>
  );
};

export default ProcessPage;