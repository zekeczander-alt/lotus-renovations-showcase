import Contact from "@/components/Contact";

const EstimatePage = () => {
  return (
    <div>
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Get Your Free Estimate</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Ready to transform your home? Contact us today for a free consultation 
            and detailed estimate for your renovation project.
          </p>
        </div>
      </section>
      <Contact />
    </div>
  );
};

export default EstimatePage;