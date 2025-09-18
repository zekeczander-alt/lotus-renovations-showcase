import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";

const TestimonialsPage = () => {
  return (
    <div>
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Client Testimonials</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients 
            have to say about their renovation experience with us.
          </p>
        </div>
      </section>
      <Testimonials />
      <Contact />
    </div>
  );
};

export default TestimonialsPage;