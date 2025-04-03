import React from "react";
import StepItem from "./StepItem";

const HowItWorksSection: React.FC = () => {
  return (
    <section className="px-16 py-12 bg-[#EBF5F4] max-md:p-8">
      {/* Heading spans full width, left-aligned */}
      

      {/* 2-column layout on larger screens, 1 column on smaller screens */}
      <div className="grid grid-cols-2 gap-12 max-lg:grid-cols-1">
        
          
        
        {/* Left column: Steps 1 & 2 */}
        <div className="space-y-8">
          <div className="flex justify-center items-center">
          <h2 className="mb-12 text-4xl font-semibold text-left text-gray-900 max-sm:text-3xl">How Our Payroll Management System Works?</h2>
          </div>
          <StepItem
            title="Step 1: Onboarding & Compliance Setup"
            description={`We onboard your contract-based, temporary, or long-term employees into our payroll system.
Gulfaar ensures compliance with local labor laws, tax regulations, and benefits policies.`}
          />

          <StepItem
            title="Step 2: Automated Payroll Processing"
            description={`AI-powered payroll software calculates salaries, deductions, overtime, and bonuses automatically.
Integrated tax & social security contributions are handled to ensure regulatory compliance.
Multi-currency payment support for international employees.`}
          />
        </div>

        {/* Right column: Steps 3, 4 & 5 */}
        <div className="space-y-8">
          <StepItem
            title="Step 3: Real-Time Salary Payments & Tracking"
            description={`Employees receive on-time, automated salary deposits directly into their bank accounts.
Digital payslips & salary breakdowns available via mobile apps and email.
Real-time payment tracking for employers and employees.`}
          />

          <StepItem
            title="Step 4: Seamless Employee Communication & Support"
            description={`WhatsApp & SMS Notifications – Employees receive instant salary deposit alerts.
Employee Self-Service Portal – Employees can access payslips, tax documents, and benefits information.
Mobile App Integration – Employers can monitor workforce costs, payroll status, and HR compliance.
Multi-Channel Support – 24/7 assistance for payroll queries via chat, email, and phone.`}
          />

          <StepItem
            title="Step 5: Performance & Cost Optimization"
            description={`AI-generated payroll insights help track workforce costs, manage overtime, and forecast future payroll expenses.
Custom payroll reports help employers make data-driven HR decisions.`}
          />
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
