import About from "@/components/About";
import Contact from "@/components/Contact";

const AboutPage = () => {
  return (
    <div>
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">About Lotus Renovations</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            For over 15 years, we've been transforming homes throughout the region 
            with exceptional craftsmanship and personalized service.
          </p>
        </div>
      </section>
      <About />
      <Contact />
    </div>
  );
};

export default AboutPage;