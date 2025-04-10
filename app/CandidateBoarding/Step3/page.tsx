

import Link from "next/link";
import WelcomeOnBoarding3 from "../../Components/CandidateOnBording/Step3";

const WelcomeOnBoarding = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-1 flex md:flex-col items-center justify-center  md:px-20 w-full max-w-full mx-auto">
        <WelcomeOnBoarding3 />
      </div>
      <div className="flex  justify-center items-center md:justify-end md:items-end px-50 gap-4 mb-10">
      <Link href="/CandidateBoarding/Step4">
            <button className="bg-[#D67268] hover:bg-[#653737] text-white px-20  py-3 rounded-lg shadow-md">
             Next
            </button>
          </Link>
          </div>
    </div>
  );
};

export default WelcomeOnBoarding;
