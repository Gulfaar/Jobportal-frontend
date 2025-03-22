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
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Who Benefits from Our Flexible Hiring Solutions?
          </h2>
          <p className="text-gray-600 mb-10">
            Our AI-powered flexible hiring solutions serve a wide range of industries with specialized workforce needs.
          </p>
  
          <div className="flex flex-wrap justify-center gap-4">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-4 w-[200px] flex flex-col gap-2 text-left"
              >
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  <h3 className="font-semibold text-sm">{industry.title}</h3>
                </div>
                <p className="text-xs text-gray-600">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  