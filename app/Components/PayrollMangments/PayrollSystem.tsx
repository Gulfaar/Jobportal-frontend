import React from 'react';

const PayrollSystem: React.FC = () => {
  const steps = [
    {
      number: 1,
      title: 'Onboarding & Compliance Setup',
      description:
        'We onboard your contract-based, temporary, or long-term employees into our payroll system. Gulfar ensures compliance with local labor laws, tax regulations, and benefits policies.',
    },
    {
      number: 2,
      title: 'Automated Payroll Processing',
      description:
        'AI-powered payroll software calculates salaries, deductions, overtime, and bonuses automatically. Integrated tax & social security contributions are handled to ensure regulatory compliance. Multi-currency payment support for international employees.',
    },
    {
      number: 3,
      title: 'Real-Time Salary Payments & Tracking',
      description:
        'Employees receive on-time, automated salary deposits directly into their bank accounts. Digital payslips & salary breakdowns available via mobile apps and email. Real-time payment tracking for employees and employees.',
    },
    {
      number: 4,
      title: 'Seamless Employee Communication & Support WhatsApp & SMS Notifications',
      description:
        'Employees receive instant salary deposit alerts. Employee Self-Service Portal - Employees can access payslips, tax documents, and benefits information. Mobile App Integration - Employees can monitor workforce costs, payroll status, and HR compliance. Multi-Channel Support - 24/7 assistance for payroll queries via chat, email, and phone.',
    },
    {
      number: 5,
      title: 'Performance & Cost Optimization',
      description:
        'AI-generated insights help track workforce costs, manage overtime, and forecast future payroll expenses. Custom payroll reports help employers make data-driven HR decisions.',
    },
  ];

  return (
    <div className="bg-gray-300 py-10 px-6 md:px-12 w-full">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Left Column: Heading + Steps 1 and 2 */}
        <div className="flex-1">
          <h1 className="text-[36px] font-semibold text-black mb-8">
            How Our Payroll Management System Works ?
          </h1>
          <div className="space-y-6 w-full">
            {steps.slice(0, 2).map((step) => (
              <div key={step.number}>
                <h2 className="text-[20px] font-semibold text-[#2E5F5C] w-full">
                  Step {step.number}: {step.title}
                </h2>
                <p className="text-gray-800 mt-2 text-[18px] font-normal">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Steps 3, 4, and 5 */}
        <div className="flex-1">
          <div className="space-y-6">
            {steps.slice(2).map((step) => (
              <div key={step.number}>
                <h2 className="text-[20px] font-semibold text-[#2E5F5C]">
                  Step {step.number}: {step.title}
                </h2>
                <p className="text-gray-800 mt-2 text-[18px] font-normal">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PayrollSystem;