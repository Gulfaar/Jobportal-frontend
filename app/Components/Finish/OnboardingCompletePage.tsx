"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Confetti from "react-confetti";
import { motion } from "framer-motion";
import Link from "next/link";

export default function OnboardingCompletePage() {
  const router = useRouter();
  const [confettiActive, setConfettiActive] = useState(true);

  // Stop confetti after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => setConfettiActive(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  // Handle navigation
  const handleStartExploring = () => {
    router.push("/"); // Updated to root or your desired route
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-white p-4 sm:p-6 lg:p-8">
      {confettiActive && (
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
          recycle={false}
          numberOfPieces={150} // Reduced for performance
        />
      )}

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }} // Optimized duration
        className="max-w-md w-full bg-white rounded-xl shadow-lg p-6 text-center"
      >
        {/* Animated Checkmark */}
        <motion.div
          initial={{ rotate: -10 }}
          animate={{ rotate: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }} // Optimized duration
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

        {/* Welcome Message */}
        <h1 className="mt-5 text-3xl font-bold text-gray-900 sm:text-4xl">
          Welcome, UserName!
        </h1>
        <p className="mt-3 text-base text-gray-600">
          Your onboarding is complete! Start exploring your personalized journey.
        </p>

        {/* Start Exploring Button */}
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