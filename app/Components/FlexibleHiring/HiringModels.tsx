import { Briefcase, CalendarDays, UserCheck } from "lucide-react";

const hiringModels = [
  {
    title: "Project-Based Hiring",
    subtitle: "For Short-Term Assignments & Specialized Tasks",
    icon: <Briefcase className="text-blue-500" size={24} />,
    points: [
      "Hire skilled professionals for specific projects with a fixed timeline.",
      "Best suited for IT, construction, engineering, consulting, and creative industries.",
      "AI-driven talent shortlisting & skill-matching ensures high project success rates."
    ]
  },
  {
    title: "Short-Term Hiring",
    subtitle: "For Temporary & Seasonal Workforce Needs",
    icon: <CalendarDays className="text-blue-500" size={24} />,
    points: [
      "Get immediate staffing solutions for events, seasonal demands, and urgent tasks.",
      "Ideal for retail, hospitality, logistics, BPO, customer service, and manufacturing.",
      "Pre-screened, ready-to-work candidates available on-demand."
    ]
  },
  {
    title: "Long-Term Contract Hiring",
    subtitle: "For Workforce Stability & Cost Optimization",
    icon: <UserCheck className="text-blue-500" size={24} />,
    points: [
      "Access dedicated employees on contract for extended periods.",
      "Best for businesses requiring continuous workforce support without full-time commitments.",
      "Payroll & compliance managed by Gulfaar, reducing administrative burden."
    ]
  }
];

const FlexibleHiringModels = () => {
  return (
    <section className="bg-[#F4F8F9] py-16 px-4 w-full">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-[#1E3A56]">Our Flexible Hiring Models</h2>
        <p className="text-gray-500 mt-3">
          With our modern workforce management tools, automated candidate matching, and seamless payroll integration, hiring contract-based employees has never been more efficient, scalable, and hassle-free.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {hiringModels.map((model, idx) => (
          <div key={idx} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-4 bg-gray-400" />
            <div className="p-6">
              <div className="mb-4 flex items-center">
                <div className="bg-blue-100 p-2 rounded-md mr-3">
                  {model.icon}
                </div>
                <div className="text-left">
                  <h3 className="font-semibold text-[#1E3A56]">{model.title}</h3>
                  <p className="text-gray-500 text-sm mt-1">{model.subtitle}</p>
                </div>
              </div>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 text-sm text-left">
                {model.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="mt-1 w-1 h-1 bg-blue-500 rounded-full" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FlexibleHiringModels;
