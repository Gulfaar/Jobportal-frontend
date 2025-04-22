import Link from "next/link";
import WelcomeOnBoarding3 from "../../Components/CandidateOnBording/Step3";

const WelcomeOnBoarding = () => {
  return (
    <div className="flex flex-col min-h-screen w-full bg-gradient-to-b from-white to-[#E6F2F2] px-">
      
      {/* Content Section */}
      <main className="flex-1 flex items-center justify-center ">
        <div className="w-full max-w-6xl">
          <WelcomeOnBoarding3 />
        </div>
      </main>

      {/* Button Section */}
      <footer className="w-full max-w-6xl mx-auto px-4 sm:px-0">
      

      </footer>
    </div>
  );
};

export default WelcomeOnBoarding;
