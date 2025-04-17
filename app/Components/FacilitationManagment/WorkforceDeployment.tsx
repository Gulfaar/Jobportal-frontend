'use client';

import Image from 'next/image';
import React from 'react';

const pointsLeft = [
  'Recruitment, training & deployment of skilled and semi-skilled labour',
  'Training in safety, language, equipment handling, rope access & soft skills',
  'OSHA, IRATA, ISO, NFPA, and NEBOSH-standard safety practices',
];

const pointsRight = [
  'Training in safety, language, equipment handling, rope access & soft skills',
  'AI-based upskilling recommendations & exam simulations',
];

export default function WorkforceDeployment() {
  return (
    <section className="w-full py-16 px-4 md:px-12 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-[#003D3B]">
            Workforce Deployment & Training
          </h2>
          <p className="text-md md:text-lg text-gray-600 mt-2">
            We don’t outsource manpower we develop it.
          </p>
        </div>

        {/* Bullets */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-[#003D3B]">
          <ul className="space-y-4">
            {pointsLeft.map((point, index) => (
              <li key={index} className="flex items-start gap-3">
                <Image
                  src="/images/Gulfaar-icon.svg"
                  alt="bullet"
                  width={18}
                  height={18}
                  className="mt-1"
                />
                <span className="text-sm md:text-base">{point}</span>
              </li>
            ))}
          </ul>

          <ul className="space-y-4">
            {pointsRight.map((point, index) => (
              <li key={index} className="flex items-start gap-3">
                <Image
                  src="/images/Gulfaar-icon.svg"
                  alt="bullet"
                  width={18}
                  height={18}
                  className="mt-1"
                />
                <span className="text-sm md:text-base">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
