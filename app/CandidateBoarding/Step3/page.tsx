import Link from "next/link";
import WelcomeOnBoarding3 from "../../Components/CandidateOnBording/Step3";

const WelcomeOnBoarding = () => {
  return (
    <div className="min-h-72 flex flex-col justify-between px-4 sm:px-6 md:px-12 bg-white">
      
      {/* Content Section */}
      <main className="flex-1 flex items-center justify-center py-8">
        <div className="w-full max-w-6xl">
          <WelcomeOnBoarding3 />
        </div>
      </main>

      {/* Button Section */}
      <footer className="w-full max-w-6xl mx-auto px-4 sm:px-0">
        <div className="flex flex-col sm:flex-row justify-center sm:justify-end items-center gap-4 mb-8">
          <Link href="/CandidateBoarding/Step4">
            <button className="bg-[#D67268] hover:bg-[#653737] text-white px-10 py-3 rounded-lg shadow-md transition-all duration-200 text-base sm:text-lg w-full sm:w-auto">
              Next
            </button>
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default WelcomeOnBoarding;
