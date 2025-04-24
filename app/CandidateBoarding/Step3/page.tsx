import Link from "next/link";
import WelcomeOnBoarding3 from "../../Components/CandidateOnBording/Step3";

const WelcomeOnBoarding = () => {
  return (
    <div className="flex flex-col min-h-screen w-full bg-gradient-to-b from-white to-[#E6F2F2]">
    <div className=" items-center justify-center w-full min-w-full">
              <WelcomeOnBoarding3 />
            </div>
      </div>
  );
};

export default WelcomeOnBoarding;
