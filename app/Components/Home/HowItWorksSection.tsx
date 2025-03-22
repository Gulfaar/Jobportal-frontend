const HowItWorksSection = () => {
  const steps = [
    {
      icon: "/icon.png",
      title: "Sign Up & Optimize Resume",
      description:
        "Register, create your profile & upload your resume. AI enhances your resume for better job visibility.",
    },
    {
      icon: "/what.png",
      title: "Find Jobs & Identify Skill Gaps",
      description:
        "AI job search matches you with the best roles. Detects knowledge/tech gaps & suggests upskilling.",
    },
    {
      icon: "/what.png",
      title: "AI Screening & Pre-Interview",
      description:
        "Take AI-driven tests & pre-video interviews. Get an AI match score for faster shortlisting.",
    },
    {
      icon: "/qwerty.png",
      title: "Get Hired & Grow",
      description:
        "Receive interview invites via WhatsApp, SMS, email & notification. Track applications, accept offers & upskill.",
    },
  ];

  return (
    <section className="flex flex-col items-center px-10 py-16 max-w-screen-xl mx-auto">
      <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
        HOW GULFAAR WORKS
      </h2>
      <div className="flex justify-between w-full relative">
        {steps.map((step, index) => (
          <div key={index} className="relative flex flex-col items-center w-1/4 text-center">
            <div className="relative flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-md border border-gray-300">
              <img src={step.icon} alt={step.title} className="w-8 h-8" />
            </div>
            {index < steps.length - 1 && (
              <div className="absolute top-1/4 transform -translate-y-1/2 left-full w-1/3 flex justify-center">
                <svg width="100" height="50" viewBox="0 0 100 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M0 25 Q50 0 100 25"
                    stroke="#4A90E2"
                    strokeWidth="2"
                    strokeDasharray="6,6"
                    fill="transparent"
                  />
                  <polygon points="100,25 90,23 95,22, 90,30 " fill="#4A90E2" />
                </svg>
              </div>
            )}
            <h3 className="mt-4 text-lg font-semibold text-gray-900">{step.title}</h3>
            <p className="mt-2 text-sm text-gray-600 max-w-xs">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorksSection;