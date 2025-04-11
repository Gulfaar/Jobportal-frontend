'use client';
import { useRef, useState } from "react";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { setParsedResumeData } from "@/app/redux/slices/resumeSlice";
import { useDispatch } from "react-redux";
import { ClipLoader } from "react-spinners";

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
    <section className="flex flex-col md:flex-row items-center justify-center w-[80%] mx-auto py-16 gap-12">
      <div className="relative w-[300px] md:w-[400px] flex justify-center">
        <img
          src="/images/Vector.svg"
          alt="Yellow Vector"
          className="absolute top-1/2 left-1/2 w-[110%] h-[110%] -translate-x-1/2 -translate-y-1/2 z-0 scale-90"
        />
        <img
          src="/images/candidate-group.svg"
          alt="Candidate Group"
          className="relative z-10 w-full h-full object-cover rounded-3xl"
        />
      </div>
      
      <div className="w-full md:w-1/2">
        <h3 className="text-center md:text-left text-sm font-semibold text-gray-600 uppercase">
          ─ Get Best Employee
        </h3>
        <h2 className="text-center md:text-left text-2xl font-bold text-[#2E5F5C] mt-2">
          Apply Now!
        </h2>
        <h3 className="text-center md:text-left text-xl font-extrabold text-black">
          520+ company searching for you
        </h3>
        <p className="text-gray-600 mt-4 text-center md:text-left">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae sit donec lectus suscipit ultricies rhoncus.
        </p>

        <div className="mt-6 flex flex-col md:flex-row items-center gap-4">
          <button
            className="flex items-center gap-2 bg-[#2E5F5C] text-white px-6 py-3 rounded-lg shadow-md"
            onClick={handleFileUploadClick}
            disabled={loading}
          >
            {loading ? <ClipLoader color="#fff" size={20} /> : <span>📂</span>} Upload CV
          </button>
          <input
            type="file"
            accept=".pdf,.doc,.docx"
            ref={fileInputRef}
            onChange={handleFileChange}
            style={{ display: "none" }}
          />

          <Link href="/CandidateBoarding/Step6">
            <button className="bg-[#D67268] text-white px-6 py-3 rounded-lg shadow-md" disabled={loading}>
              Enter Details Manually
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CandidateOnboardingSteps2;
