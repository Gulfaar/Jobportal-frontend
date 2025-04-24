"use client";

import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";
import { motion } from "framer-motion";

export default function OnboardingCompletePage() {
  const resumeData = useSelector((state: RootState) => state.resume.parsedData);
  const userNameRaw = resumeData?.structured_resume?.name || "Candidate";
  const userName = userNameRaw.replace(/\s+/g, " ").trim();

  const router = useRouter();

  const handleStartExploring = () => {
    router.push("/");
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-tr from-purple-100 via-white to-pink-100 p-6">
      {/* Background with subtle sparkle */}
      <div className="absolute inset-0 bg-[url('/images/sparkle-bg.svg')] bg-cover bg-center opacity-10 pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="z-10 max-w-md w-full bg-white rounded-3xl shadow-xl p-8 text-center"
      >
        {/* Icon with bounce effect */}
        <motion.div
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="mx-auto w-24 h-24 flex items-center justify-center bg-green-100 rounded-full"
        >
          <span className="text-5xl">🎉</span>
        </motion.div>

        <h1 className="mt-6 text-3xl font-extrabold text-gray-900">
          Welcome, {userName}!
        </h1>
        <p className="mt-3 text-gray-600 text-base">
          You’ve successfully completed onboarding. Let’s take the next step!
        </p>

        {/* Button with hover effect */}
        <motion.button
          onClick={handleStartExploring}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-6 w-full bg-[#DA6B64] hover:bg-[#c65751] text-white py-3 px-4 rounded-xl font-semibold transition-all duration-200"
        >
          Going To Home
        </motion.button>
      </motion.div>
    </div>
  );
}
