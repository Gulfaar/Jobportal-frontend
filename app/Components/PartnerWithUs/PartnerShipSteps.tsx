const PartnershipSteps = () => {
    const steps = [
      {
        number: "01",
        text: "Whether you're an entrepreneur, business owner, recruitment agency, training institute, or investor",
      },
      {
        number: "02",
        text: "We offer diverse collaboration opportunities that allow you to expand your business while leveraging our cutting-edge AI-powered workforce solutions and global reach.",
      },
      {
        number: "03",
        text: "Partner with Gulfaar to join a global ecosystem connecting businesses, professionals, and industry leaders",
      },
    ];
  
    return (
      <section className="py-12 px-6 flex flex-col items-center space-y-6 max-w-4xl mx-auto">
        {steps.map((step, index) => (
          <div
            key={index}
            className="bg-white shadow-md border border-gray-200 rounded-lg p-6 flex items-center gap-4 w-full"
          >
            <span className="text-lg font-semibold text-gray-700">{step.number}</span>
            <p className="text-gray-700">{step.text}</p>
          </div>
        ))}
      </section>
    );
  };
  
  export default PartnershipSteps;