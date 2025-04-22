'use client';
import { useRef, useState } from "react";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { setParsedResumeData } from "@/app/redux/slices/resumeSlice";
import { useDispatch } from "react-redux";

const CandidateOnboardingSteps2 = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleFileUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setLoading(true);

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post('http://3.1.221.8:8000/api/resume/process-resume', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      if (response.status === 200) {
        dispatch(setParsedResumeData(response.data));
        router.push("/CandidateBoarding/Step3");
      }
    } catch (error) {
      console.error("Error uploading file:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative w-[90%] md:w-[80%] mx-auto py-10 sm:py-16">
      {/* Loading Overlay */}
      {loading && (
        <div className="fixed inset-0 flex items-center justify-center z-50 min-h-screen w-full">
          <div className="w-full h-full bg-opacity-40 backdrop-blur-md flex items-center justify-center">
            <div className="bg-white/60 rounded-xl p-6 sm:p-12 shadow-xl flex flex-col items-center w-[260px] h-[260px] sm:w-[320px] sm:h-[320px]">
              <div className="relative w-20 h-20 sm:w-32 sm:h-32">
                <div className="absolute inset-0 border-[6px] border-t-[#2E5F5C] border-gray-200 rounded-full animate-spin-smooth"></div>
                <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-[#2E5F5C] rounded-full animate-orbit"></div>
                <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-[#D67268] rounded-full animate-orbit-delayed"></div>
              </div>
              <p className="mt-4 text-[#2E5F5C] text-base sm:text-xl font-semibold text-center">
                Processing your CV...
              </p>
            </div>
          </div>
        </div>
      )}

      <section className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
        {/* Image Section */}
        <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md flex justify-center">
          <img
            src="/images/Vector.svg"
            alt="Yellow Vector"
            className="absolute top-1/2 left-1/2 w-[120%] h-[120%] -translate-x-1/2 -translate-y-1/2 z-0 scale-90"
          />
          <img
            src="/images/candidate-group.svg"
            alt="Candidate Group"
            className="relative z-10 w-full h-auto object-cover rounded-2xl"
          />
        </div>

        {/* Text + Upload Section */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
          <h3 className="text-sm font-semibold text-gray-600 uppercase">
            ─ Get Best Employee
          </h3>
          <h2 className="text-xl sm:text-2xl font-bold text-[#2E5F5C] mt-2">
            Apply Now!
          </h2>
          <h3 className="text-lg sm:text-xl font-extrabold text-black">
          1m+ Job vacancis waiting for you
          </h3>
          <p className="text-gray-600 mt-3 text-sm sm:text-base">
          1m+ Job vacancis waiting for you.
          </p>

          {/* Buttons */}
          <div className="mt-6 flex flex-col sm:flex-row w-full gap-4">
            <button
              className="flex items-center justify-center gap-2 bg-[#2E5F5C] text-white px-4 py-3 rounded-lg shadow-md hover:bg-[#1e4b4a] transition-colors w-full sm:w-auto"
              onClick={handleFileUploadClick}
              disabled={loading}
            >
              <span>📂</span> Upload CV
            </button>
            <input
              type="file"
              accept=".pdf,.doc,.docx"
              ref={fileInputRef}
              onChange={handleFileChange}
              style={{ display: "none" }}
            />

            <Link href="/CandidateBoarding/Step4" className="w-full sm:w-auto">
              <button
                className="w-full sm:w-auto bg-[#D67268] text-white px-4 py-3 rounded-lg shadow-md hover:bg-[#c55e54] transition-colors"
                disabled={loading}
              >
                Enter Details Manually
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CandidateOnboardingSteps2;
