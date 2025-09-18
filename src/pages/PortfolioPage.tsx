import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";

const PortfolioPage = () => {
  return (
    <div>
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Portfolio</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Explore our recent projects and see how we transform spaces into beautiful, 
            functional homes that exceed expectations.
          </p>
        </div>
      </section>
      <Portfolio />
      <Contact />
    </div>
  );
};

export default PortfolioPage;