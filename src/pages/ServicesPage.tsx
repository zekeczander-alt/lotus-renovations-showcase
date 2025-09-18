import Services from "@/components/Services";
import Contact from "@/components/Contact";

const ServicesPage = () => {
  return (
    <div>
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            From kitchen remodels to whole-home transformations, we bring your vision to life 
            with exceptional craftsmanship and attention to detail.
          </p>
        </div>
      </section>
      <Services />
      <Contact />
    </div>
  );
};

export default ServicesPage;