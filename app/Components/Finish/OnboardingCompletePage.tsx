"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Confetti from "react-confetti";
import { motion } from "framer-motion";
import Link from "next/link";

export default function OnboardingCompletePage() {
  const router = useRouter();
  const [confettiActive, setConfettiActive] = useState(true);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  // Set window dimensions only on client
  useEffect(() => {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });

    const timer = setTimeout(() => setConfettiActive(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleStartExploring = () => {
    router.push("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-white p-4 sm:p-6 lg:p-8">
      {confettiActive && windowSize.width > 0 && (
        <Confetti
          width={windowSize.width}
          height={windowSize.height}
          recycle={false}
          numberOfPieces={150}
        />
      )}

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-md w-full bg-white rounded-xl shadow-lg p-6 text-center"
      >
        <motion.div
          initial={{ rotate: -10 }}
          animate={{ rotate: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="mx-auto flex items-center justify-center w-20 h-20 bg-green-100 rounded-full"
        >
          <svg
            className="w-14 h-14 text-green-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </motion.div>

        <h1 className="mt-5 text-3xl font-bold text-gray-900 sm:text-4xl">
          Welcome, UserName!
        </h1>
        <p className="mt-3 text-base text-gray-600">
          Your onboarding is complete! Start exploring your personalized journey.
        </p>

        <Link href="/" onClick={handleStartExploring}>
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="mt-6 w-full bg-[#DA6B64] text-white py-2 px-4 rounded-lg text-lg font-medium hover:bg-[#c65751] transition-colors duration-200"
          >
            Start Exploring
          </motion.button>
        </Link>
      </motion.div>
    </div>
  );
}
