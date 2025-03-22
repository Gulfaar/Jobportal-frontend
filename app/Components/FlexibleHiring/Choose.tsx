import { CheckCircle } from "lucide-react";

const features = [
  {
    title: "Faster Hiring, Smarter Matches",
    description: "AI finds the right candidates instantly",
  },
  {
    title: "Seamless Payroll & Compliance",
    description: "We manage salaries, contracts, and regulations",
  },
  {
    title: "On-Demand Workforce Scaling",
    description: "Scale up or down based on business needs",
  },
  {
    title: "Pre-Screened, Interview-Ready Talent",
    description: "AI-assessed and pre-vetted candidates",
  },
  {
    title: "Effortless Communication",
    description: "Instant candidate contact via WhatsApp, SMS, and mobile notifications",
  },
  {
    title: "Cost-Effective & Hassle-Free",
    description: "Save time and money with contract-based workforce solutions",
  },
];

export default function WhyChooseGulfaar() {
  return (
    <section className="w-full bg-[#f9fbfd] py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">
          Why Choose Gulfaar&apos;s AI-Powered Flexible Hiring?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {features.map((feature, index) => (
            <div key={index} className="flex gap-3">
              <CheckCircle className="text-blue-500 w-5 h-5 mt-1" />
              <div>
                <h3 className="font-semibold text-sm">{feature.title}</h3>
                <p className="text-xs text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
