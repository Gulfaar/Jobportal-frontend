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

export default function FlexibleHiringIndustries() {
  return (
    <section className="w-full bg-[#f9fbfd] py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* First Row: Heading on the left, 2 cards on the right */}
        <div className="flex flex-col md:flex-row gap-6 mb-10">
          {/* Heading Section (Left Side) */}
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-left">
              Who Benefits from Our Flexible Hiring Solutions?
            </h2>
            <p className="text-gray-600 text-left">
              Our AI-powered flexible hiring solutions serve a wide range of industries with specialized workforce needs.
            </p>
          </div>

          {/* First 2 Cards (Right Side) */}
          <div className="md:w-1/2 flex flex-wrap gap-4 justify-end">
            {industries.slice(0, 2).map((industry, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-2xl p-4 flex flex-col gap-2 text-left  transition-all duration-300 hover:bg-[#2E5F5C] hover:-translate-y-1 hover:shadow-lg group w-[300px] h-[150px]"
              >
                <h3 className="font-semibold text-base group-hover:text-white">
                  {industry.title}
                </h3>
                <p className="text-xs text-gray-600 group-hover:text-white">
                  {industry.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Second Row: Remaining 4 Cards in a 2x2 Grid */}
        <div className="flex flex-wrap gap-4 justify-center">
          {industries.slice(2, 6).map((industry, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl p-4 flex flex-col gap-2 text-left transition-all duration-300 hover:bg-[#2E5F5C] hover:-translate-y-1 hover:shadow-lg group w-[300px] h-[150px]"
            >
              <h3 className="font-semibold text-base group-hover:text-white">
                {industry.title}
              </h3>
              <p className="text-xs text-gray-600 group-hover:text-white">
                {industry.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}