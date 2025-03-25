
import Footer from "../Components/Home/Footer"
import CandidateOnboardingSteps1 from "../Components/CandidateOnBording/Step1";

const CandidateOnboardingPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-1 flex flex-col items-center justify-center px-6 md:px-20 w-full max-w-full mx-auto">
        <CandidateOnboardingSteps1 />
      </div>
    </div>
  );
};

export default CandidateOnboardingPage;
