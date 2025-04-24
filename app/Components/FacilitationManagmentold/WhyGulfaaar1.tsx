import React from 'react';
import Image from 'next/image';

const WhyGulfaaar: React.FC = () => {
  return (
    <div className="bg-[#2A6360] text-white py-12 px-4 md:px-8 w-full">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-black">Why Gulfaaar?</h2>

        <div className="flex flex-col md:flex-row justify-between mt-12 gap-8">
          {/* Left List */}
          <div className="md:w-1/2">
            <ul className="space-y-6">
              <li className="flex items-start">
                <Image
                  src="/icons/tick-icon.png"
                  alt="check"
                  width={20}
                  height={20}
                  className="mr-3 mt-1"
                />
                <span>
                  Projects Delivered Globally: From rope access services in
                  skyscrapers to inspection & shutdowns on offshore rigs
                </span>
              </li>
              <li className="flex items-start">
                <Image
                  src="/icons/tick-icon.png"
                  alt="check"
                  width={20}
                  height={20}
                  className="mr-3 mt-1"
                />
                <span>
                  Presence in 22+ Countries: GCC, North America, Europe,
                  Asia-Pacific, Africa, South America
                </span>
              </li>
            </ul>
          </div>

          {/* Right List */}
          <div className="md:w-1/2">
            <ul className="space-y-6">
              <li className="flex items-start">
                <Image
                  src="/icons/tick-icon.png"
                  alt="check"
                  width={20}
                  height={20}
                  className="mr-3 mt-1"
                />
                <span>
                  Multilingual Teams & Smart Tools: Built-in support for all
                  major languages and tech platforms
                </span>
              </li>
              <li className="flex items-start">
                <Image
                  src="/icons/tick-icon.png"
                  alt="check"
                  width={20}
                  height={20}
                  className="mr-3 mt-1"
                />
                <span>
                  Backed by Generative AI: Our own LLM platform supports
                  training, hiring, BPO, and live support
                </span>
              </li>
              <li className="flex items-start">
                <Image
                  src="/icons/tick-icon.png"
                  alt="check"
                  width={20}
                  height={20}
                  className="mr-3 mt-1"
                />
                <span>
                  Backed by Generative AI: Our own LLM platform supports
                  training, hiring, BPO, and live support
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyGulfaaar;
