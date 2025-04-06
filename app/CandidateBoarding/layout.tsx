'use client';

import { usePathname } from 'next/navigation';
import Header from '../Components/Header/Header';
import Footer from "../Components/Home/Footer";

export default function CandidateOnboardingLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  // Paths to hide the step indicator
  const hideSteps = [
    '/CandidateBoarding',
    '/CandidateBoarding/Step2',
    '/CandidateBoarding/Step3',
  ];

  const shouldHideStepIndicator = hideSteps.includes(pathname);

  // Determine active step based on route
  let activeStep: number | null = null;

  const stepMatch = pathname.match(/\/CandidateBoarding\/Step(\d+)/);
  if (stepMatch) {
    const stepNum = parseInt(stepMatch[1]);
    // Pages 4-10 map to steps 1-7 (max step 7)
    if (stepNum >= 4 && stepNum <= 12) {
      activeStep = Math.min(stepNum - 3, 7); // step4 -> 1, step5 -> 2, ..., step10 -> 7
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header title={'PROFILE'} subtitle={''} />
      <main className="flex-1 flex flex-row relative">
        {/* Content on the left (step components) */}
        <div className="flex-1 flex flex-col items-center justify-center">
          {children}
        </div>

        {/* Step indicator on the right */}
        {!shouldHideStepIndicator && (
          <div className="w-1/12 min-w-[80px] flex flex-col items-center justify-center space-y-4 absolute right-4 top-1/2 -translate-y-1/2">
            {[1, 2, 3, 4, 5, 6, 7].map((step) => (
              <div
                key={step}
                className={`w-10 h-10 flex items-center justify-center rounded-full border border-[#D67268] text-[#D67268] ${
                  step === activeStep ? 'bg-[#D67268] text-white' : 'bg-white'
                }`}
              >
                {step}
              </div>
            ))}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
