import React from "react";
import Image from "next/image";

const IntroductionSection: React.FC = () => {
  return (
    <div className="w-full bg-white">
      <div className="max-w-[1200px] mx-auto px-6 py-16 max-md:py-12 max-sm:py-10">
        <div className="flex items-center justify-between gap-20 max-lg:flex-col-reverse max-lg:gap-10">
          
     

          {/* Text Content */}
          <div className="flex-1 w-full text-center max-lg:text-left">
            <p className="text-[#2E5F5C] text-[18px] leading-[32px] text-justify max-w-[600px] mx-auto max-lg:mx-0 max-sm:text-[16px] max-sm:leading-[28px]">
            At Gulfaar, we don’t just provide a database of candidates—we deliver the right talent through AI powered 
            pre-video interviews and intelligent talent-matching. Our advanced AI screening ensures  that every candidate 
            is pre-assessed based on skills, experience, personality, and job-specific  aptitude, saving recruiters valuable
             time while ensuring the best possible hire
            </p>
          </div>

               {/* Image Section (Moves above text on smaller screens) */}
               <div className="flex-1 w-full">
            <div className="relative w-full min-h-[270px] h-auto rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/tailoredcover.png"
                alt="Team meeting in modern office"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        
        </div>
      </div>
    </div>
  );
};

export default IntroductionSection;
