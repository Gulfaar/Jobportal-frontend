export default function FlexibleHiringIndustries() {
  const industries = [
    {
      title: "IT & Software",
      description: "Project-based hiring for developers, analysts & consultants",
    },
    {
      title: "Construction & Engineering",
      description: "Short-term staffing for on-site projects",
    },
    {
      title: "Healthcare & Medical",
      description: "Temporary nurses, technicians, and caregivers",
    },
    {
      title: "Retail & Hospitality",
      description: "Seasonal workforce for peak demand periods",
    },
    {
      title: "BPO & Customer Service",
      description: "On-demand agents for outsourcing operations",
    },
    {
      title: "Logistics & Warehousing",
      description: "Contract-based drivers, delivery staff, and warehouse managers",
    },
  ];

  return (
    <section className="w-full bg-[#f9fbfd] py-16 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* First Row: Heading + 2 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-12">
          
          {/* Heading Section (Left Side) */}
          <div className="text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Who Benefits from Our Flexible Hiring Solutions?
            </h2>
            <p className="text-gray-600">
              Our AI-powered flexible hiring solutions serve a wide range of industries with specialized workforce needs.
            </p>
          </div>

          {/* Two Cards (Right Side) */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            {industries.slice(0, 2).map((industry, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-5 flex flex-col gap-2 text-left transition-all duration-300 hover:bg-[#2E5F5C] hover:-translate-y-1 hover:shadow-lg group w-full sm:w-[320px] h-[180px]"
              >
                <h3 className="font-semibold text-lg text-black sm:group-hover:text-white">
                  {industry.title}
                </h3>
                <p className="text-sm text-gray-600 sm:group-hover:text-white">
                  {industry.description}
                </p>
              </div>
            ))}
          </div>

        </div>

        {/* Second Row: 4 Cards in 2x2 Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-center mx-auto">
          {industries.slice(2).map((industry, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-5 flex flex-col gap-2 text-left transition-all duration-300 hover:bg-[#2E5F5C] hover:-translate-y-1 hover:shadow-lg group w-full sm:w-[320px] h-[180px] mx-auto"
            >
              <h3 className="font-semibold text-lg text-black sm:group-hover:text-white">
                {industry.title}
              </h3>
              <p className="text-sm text-gray-600 sm:group-hover:text-white">
                {industry.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
