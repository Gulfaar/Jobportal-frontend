const HiringProcess = () => {
    const steps = [
      {
        title: "AI-Powered Talent Matching",
        description: "Our AI-driven platform instantly connects businesses with verified, ready-to-work professionals. AI matches job requirements with candidate experience for faster, accurate hiring."
      },
      {
        title: "AI-Driven Pre-Video Screening",
        description: "AI conducts real-time interviews, verifying experience, skills, and background checks. AI assesses communication, work ethic, and job readiness to ensure quality hires."
      },
      {
        title: "Real-Time Hiring Dashboard & Workforce Tracking",
        description: "Employers can review, track, and manage on-demand workers seamlessly. AI analyzes productivity, work hours, and project progress."
      },
      {
        title: "Seamless Communication & Instant Deployment",
        description: "WhatsApp API & SMS Notifications – Real-time job assignments and worker updates. Mobile App & In-App Messaging – Secure, direct communication with task-specific experts."
      },
      {
        title: "Flexible Hiring & Payment Options",
        description: "Hourly, daily, weekly, or contract-based hiring options available. Integrated payroll system ensures hassle-free salary processing for on-demand workers."
      }
    ];
  
    return (
      <section className="py-16 px-6 flex justify-center w-full mx-auto bg-[#F8FAFC] relative">
        <div className="max-w-6xl w-full">
          <h2 className="text-center text-2xl font-bold text-[#1E3A56] mb-12">How Our AI-Powered System Simplifies Hiring?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex justify-center col-span-full lg:col-span-1">
              <img src="/team-meeting.svg" alt="Team Meeting" className="w-80 h-auto" />
            </div>
            {steps.map((step, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
                <h3 className="text-lg font-semibold text-[#1E3A56]">{step.title}</h3>
                <p className="text-gray-700 mt-2">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default HiringProcess;