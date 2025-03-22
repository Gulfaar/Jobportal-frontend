const BusinessOpportunities = () => {
  const opportunities = [
    {
      title: "Global Brand & Industry Recognition",
      description: "Leverage our established reputation and market presence."
    },
    {
      title: "AI-Powered Technology & Smart Recruitment",
      description: "Leverage our cutting-edge AI solutions and market presence."
    },
    {
      title: "Diverse Revenue Streams",
      description: "Earn through franchise partnerships, training programs, workforce solutions, and outsourcing services."
    },
    {
      title: "Comprehensive Support & Training",
      description: "Get full operational, marketing, and technical assistance."
    },
    {
      title: "Scalable & Flexible Business Model",
      description: "Expand your operations with customized partnership plans."
    }
  ];

  return (
    <section className="bg-[#2E5F5C] py-24 px-6 sm:px-16 flex justify-center w-[90%] sm:w-[80%] mx-auto rounded-lg">
      <div className="max-w-5xl w-full flex flex-col space-y-16 sm:space-y-24">
        {opportunities.map((item, index) => (
          <div 
            key={index} 
            className={`flex flex-col sm:flex-row items-center gap-10 sm:gap-20 ${index % 2 !== 0 ? 'sm:flex-row-reverse' : ''}`}
          >
            {/* Text Content */}
            <div className="text-white max-w-md flex-1 text-center sm:text-left">
              <h3 className="text-xl sm:text-2xl font-semibold mb-4">{item.title}</h3>
              <p className="text-base sm:text-lg text-gray-200 leading-relaxed">{item.description}</p>
            </div>

            {/* Image Placeholder */}
            <div className="w-40 h-40 sm:w-60 sm:h-60 bg-white rounded-lg flex-shrink-0"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BusinessOpportunities;
