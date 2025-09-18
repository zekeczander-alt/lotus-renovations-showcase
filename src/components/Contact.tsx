import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Estimate Request Sent!",
      description: "We'll get back to you within 24 hours with your free estimate.",
    });
    
    setIsSubmitting(false);
  };

  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Get Your Free Estimate</h2>
          <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto">
            Ready to transform your home? Contact us today for a free consultation 
            and detailed estimate for your renovation project.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Phone className="h-6 w-6 text-accent-light" />
                  <div>
                    <div className="font-semibold">Call Us</div>
                    <a href="tel:+1234567890" className="text-primary-foreground/80 hover:text-accent-light transition-colors">
                      (123) 456-7890
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Mail className="h-6 w-6 text-accent-light" />
                  <div>
                    <div className="font-semibold">Email Us</div>
                    <a href="mailto:info@lotusrenovations.com" className="text-primary-foreground/80 hover:text-accent-light transition-colors">
                      info@lotusrenovations.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-accent-light mt-1" />
                  <div>
                    <div className="font-semibold">Visit Us</div>
                    <div className="text-primary-foreground/80">
                      123 Renovation Way<br />
                      Building City, BC 12345
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Clock className="h-6 w-6 text-accent-light" />
                  <div>
                    <div className="font-semibold">Business Hours</div>
                    <div className="text-primary-foreground/80">
                      Mon-Fri: 8AM-6PM<br />
                      Sat: 9AM-4PM
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Card className="bg-accent/10 border-accent/20">
              <CardContent className="p-6">
                <h4 className="font-semibold text-lg mb-3">Why Choose Us?</h4>
                <ul className="space-y-2 text-sm text-primary-foreground/80">
                  <li>✓ Free detailed estimates</li>
                  <li>✓ Licensed & insured professionals</li>
                  <li>✓ 100% satisfaction guarantee</li>
                  <li>✓ Transparent pricing</li>
                  <li>✓ Quality materials & craftsmanship</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="bg-white text-foreground shadow-strong">
              <CardHeader>
                <CardTitle className="text-2xl">Request Your Free Estimate</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input id="firstName" required className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input id="lastName" required className="mt-1" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input id="email" type="email" required className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input id="phone" type="tel" required className="mt-1" />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="projectType">Project Type *</Label>
                    <Select required>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select your project type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="kitchen">Kitchen Remodeling</SelectItem>
                        <SelectItem value="bathroom">Bathroom Renovation</SelectItem>
                        <SelectItem value="whole-home">Whole Home Renovation</SelectItem>
                        <SelectItem value="addition">Home Addition</SelectItem>
                        <SelectItem value="interior-design">Interior Design</SelectItem>
                        <SelectItem value="carpentry">Custom Carpentry</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="address">Property Address</Label>
                    <Input id="address" className="mt-1" placeholder="Street address, city, postal code" />
                  </div>

                  <div>
                    <Label htmlFor="budget">Estimated Budget</Label>
                    <Select>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select your budget range (optional)" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="under-25k">Under $25,000</SelectItem>
                        <SelectItem value="25k-50k">$25,000 - $50,000</SelectItem>
                        <SelectItem value="50k-100k">$50,000 - $100,000</SelectItem>
                        <SelectItem value="100k-200k">$100,000 - $200,000</SelectItem>
                        <SelectItem value="over-200k">Over $200,000</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="description">Project Description *</Label>
                    <Textarea
                      id="description"
                      required
                      className="mt-1"
                      rows={4}
                      placeholder="Please describe your renovation project, including any specific requirements or vision you have..."
                    />
                  </div>

                  <div>
                    <Label htmlFor="timeline">Preferred Timeline</Label>
                    <Select>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="When would you like to start?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="asap">As soon as possible</SelectItem>
                        <SelectItem value="1-3months">1-3 months</SelectItem>
                        <SelectItem value="3-6months">3-6 months</SelectItem>
                        <SelectItem value="6-12months">6-12 months</SelectItem>
                        <SelectItem value="planning">Just planning/researching</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Button
                    type="submit"
                    variant="cta"
                    size="lg"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Send My Request
                        <Send className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>

                  <p className="text-sm text-muted-foreground text-center">
                    By submitting this form, you agree to be contacted by Lotus Renovations 
                    regarding your project. We respect your privacy and never share your information.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;