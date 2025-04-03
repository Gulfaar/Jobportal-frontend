import * as React from "react";

const AIEnhancementSection = () => {
  return (
    <section
      className="flex flex-col items-center px-20 py-12 mt-16 w-full bg-teal-800 max-md:px-5 max-md:mt-10 max-md:max-w-full"
      aria-label="AI Enhancement section"
    >
      <h2 className="text-5xl font-semibold text-white max-md:max-w-full max-md:text-4xl">
        How AI Enhances Your Exam Preparation
      </h2>
      <p className="mt-8 text-2xl text-center text-white w-[766px] max-md:max-w-full">
        Our cutting-edge AI technology personalizes your learning experience and
        maximizes your exam success through adaptive learning.
      </p>
      <div className="self-end mt-12 w-full max-w-[1190px] max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow text-2xl font-semibold text-white max-md:mt-10 max-md:max-w-full">
              <h3 className="self-start">AI-Powered Smart Study Plans</h3>
              <p className="mt-8 text-xl text-white max-md:max-w-full">
                Personalized learning paths based on your strengths and
                weaknesses.
              </p>
              <h3 className="self-start mt-12 max-md:mt-10">
                Adaptive AI Mock Tests
              </h3>
              <p className="mt-8 mr-6 text-xl text-white max-md:mr-2.5 max-md:max-w-full">
                Simulated real-exam conditions with AI-generated difficulty
                adjustments.
                <br />
              </p>
            </div>
          </div>
          <div className="ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow text-2xl font-semibold text-white max-md:mt-10 max-md:max-w-full">
              <h3 className="mr-10 max-md:mr-2.5 max-md:max-w-full">
                AI-Driven Speaking & Writing Evaluation
                <br />
              </h3>
              <p className="mt-6 text-xl text-white max-md:mr-2.5 max-md:max-w-full">
                Instant assessment for language exams like IELTS, TOEFL, and
                OET.
              </p>
              <h3 className="self-start mt-12 max-md:mt-10">
                AI-Based Performance Analytics
              </h3>
              <p className="mt-8 text-xl max-md:max-w-full">
                Instant feedback on test results, highlighting areas for
                improvement.
                <br />
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIEnhancementSection;
