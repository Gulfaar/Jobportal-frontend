'use client';
import React from 'react';
import { motion } from 'framer-motion';

const WhoBenefits: React.FC = () => {
  const benefits = [
    {
      title: 'Staffing & Recruitment',
      description: 'Efficient payroll processing for high-volume hiring.',
    },
    {
      title: 'SMEs & Startups',
      description: 'Scalable payroll solutions to manage growing teams',
    },
    {
      title: 'Industries With Seasonal Workforce',
      description: 'Flexible payroll management for short-term projects.',
    },
    {
      title: 'Corporates & Enterprises',
      description: 'Hassle-free payroll for contract workers & remote teams.',
    },
    {
      title: 'International Businesses',
      description: 'Simplified multi-currency, cross-border payroll solutions.',
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <div className="bg-teal-800 py-16 px-4 sm:px-6 md:px-12 font-figtree w-full overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Heading & First Card Section */}
        <motion.div
          className="flex flex-col lg:flex-row gap-8 mb-12"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          variants={container}
        >
          {/* Heading */}
          <motion.div className="flex-1" variants={fadeInUp}>
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-semibold text-white mb-6">
              Who Benefits From Our Payroll Management Services?
            </h1>
            <p className="text-teal-100 text-base sm:text-lg md:text-xl font-normal">
              Hassle-free payroll for contract workers & remote teams. Efficient payroll processing for high-volume hiring. Scalable payroll solutions to manage growing teams.
            </p>
          </motion.div>

          {/* First Card */}
          <motion.div
            className="flex-1 w-full md:max-w-md mx-auto lg:mx-0"
            variants={item}
          >
            <div className="bg-white rounded-xl p-6 sm:p-8 hover:shadow-lg transition-shadow duration-300 w-full">
              <motion.div
                className="w-16 h-16 bg-teal-100 rounded-full mb-6 flex items-center justify-center mx-auto md:mx-0"
                whileHover={{ scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              >
                <svg
                  className="w-8 h-8 text-teal-800"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </motion.div>
              <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4 text-center md:text-left">
                {benefits[0].title}
              </h2>
              <p className="text-gray-600 text-center md:text-left">
                {benefits[0].description}
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Cards Section */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={container}
        >
          {benefits.slice(1).map((benefit, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl p-6 sm:p-8 hover:shadow-lg transition-shadow duration-300"
              variants={item}
              whileHover={{ y: -5 }}
            >
              <motion.div
                className="w-16 h-16 bg-teal-100 rounded-full mb-6 flex items-center justify-center mx-auto"
                whileHover={{ scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              >
                <svg
                  className="w-8 h-8 text-teal-800"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </motion.div>
              <h2 className="text-xl font-semibold text-gray-800 mb-4 text-center">
                {benefit.title}
              </h2>
              <p className="text-gray-600 text-center">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default WhoBenefits;
