'use client';

import { ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function HireSmarterCTA() {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleToggleForm = () => {
    console.log('Toggling form visibility. Current state:', isFormVisible);
    setIsFormVisible((prev) => !prev);
  };

  const formVariants = {
    hidden: {
      x: -400,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 20,
        duration: 0.5,
      },
    },
    exit: {
      x: -400,
      opacity: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <section className="w-full bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-center items-center gap-6">
          {/* Yellow Card */}
          <div
            className="rounded-lg p-6 flex flex-col items-center justify-center w-full md:w-[400px] h-[250px] z-10"
            style={{
              background: 'linear-gradient(135deg, #FFF200 0%, rgba(255, 242, 0, 0.5) 100%)',
            }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-2 text-center text-black">
              Invest in Yourself
            </h2>
            <p className="text-gray-800 text-sm md:text-base text-center mb-4">
              You Will Grow, You Will Succeed. We Promise That
            </p>
            <button
              onClick={handleToggleForm}
              className="bg-[#2E615C] text-white flex items-center justify-center gap-2 px-6 py-3 rounded-full"
            >
              Join with us
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Animated Form */}
          <AnimatePresence>
            {isFormVisible ? (
              <motion.div
                className="w-full md:w-[400px] bg-[#2E615C] rounded-lg p-6"
                variants={formVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <form className="flex flex-col gap-3">
                  <div className="flex gap-3">
                    <input
                      type="text"
                      placeholder="Name"
                      className="w-1/2 p-2 rounded-md text-sm bg-white text-gray-800 placeholder-gray-400"
                    />
                    <input
                      type="text"
                      placeholder="Contact number"
                      className="w-1/2 p-2 rounded-md text-sm bg-white text-gray-800 placeholder-gray-400"
                    />
                  </div>
                  <div className="flex gap-3">
                    <input
                      type="email"
                      placeholder="E-mail"
                      className="w-1/2 p-2 rounded-md text-sm bg-white text-gray-800 placeholder-gray-400"
                    />
                    <input
                      type="text"
                      placeholder="Type field of enquiry"
                      className="w-1/2 p-2 rounded-md text-sm bg-white text-gray-800 placeholder-gray-400"
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-[#FF6F61] text-white px-6 py-2 rounded-md mt-2 self-end"
                  >
                    Submit
                  </button>
                </form>
              </motion.div>
            ) : (
              <div className="w-full md:w-[400px] h-[250px] bg-transparent rounded-lg p-6" />
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}