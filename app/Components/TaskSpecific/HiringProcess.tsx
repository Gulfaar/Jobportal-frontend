const HiringProcess = () => {
  const steps = [
    {
      title: "AI-Powered Talent Matching",
      description:
        "Our AI-driven platform instantly connects businesses with verified, ready-to-work professionals. AI matches job requirements with candidate experience for faster, accurate hiring.",
    },
    {
      title: "AI-Driven Pre-Video Screening",
      description:
        "Employers can review, track, and manage on-demand workers seamlessly. AI analyzes productivity, work hours, and project progress.",
    },
    {
      title: "Seamless Communication & Instant Deployment",
      description:
        "WhatsApp API & SMS Notifications – Immediate updates on hiring status. Mobile App & In-App Messaging – Secure, fast communication with professionals.",
    },
    {
      title: "Flexible Hiring & Payment Models",
      description:
        "Hourly, daily, weekly, or project-based contracts available. Integrated payroll system for hassle-free salary processing.",
    },
    {
      title: "Real-Time Hiring Dashboard & Workforce Tracking",
      description:
        "Our AI system instantly finds & ranks candidates based on skills, experience, and job fit. AI analyzes productivity, work hours, and project progress.",
    },
  ];

  return (
    <section className="py-16 px-6 w-full mx-auto bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Cards Layout */}
        <div className="space-y-8">
          {/* First Row - Heading + 1 Card */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#1E3A56]">
                How Our On-Demand Outsourcing Works
              </h2>
            </div>
            <div className="bg-[#2E5F5C] p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-white">{steps[0].title}</h3>
              <p className="text-white mt-4">{steps[0].description}</p>
            </div>
          </div>

          {/* Second Row - 2 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {steps.slice(1, 3).map((step, index) => (
              <div key={index} className="bg-[#2E5F5C] p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-white">{step.title}</h3>
                <p className="text-white mt-4">{step.description}</p>
              </div>
            ))}
          </div>

          {/* Third Row - 2 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {steps.slice(3, 5).map((step, index) => (
              <div key={index} className="bg-[#2E5F5C] p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-white">{step.title}</h3>
                <p className="text-white mt-4">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HiringProcess;