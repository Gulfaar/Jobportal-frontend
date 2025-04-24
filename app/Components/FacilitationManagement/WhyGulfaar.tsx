import Image from 'next/image'
import React from 'react'

const WhyGulfaar = () => {
  return (
    <div className="bg-gradient-to-r from-[#2E5F5C]/10 to-[#2E5F5C]/10 py-16 px-24">
      <h1 className="text-[#2E5F5C] text-4xl font-bold mb-12">Why Gulfaar?</h1>

      <div className="grid grid-cols-3 gap-8">
        <div className="flex flex-col">
          <h2 className="text-[#2E5F5C] text-xl font-semibold mb-4">Global Presence</h2>
          <div className="relative h-48 w-full mb-4 rounded-lg overflow-hidden">
            <Image 
              src='/whygulfaar1.png'
              alt='Global Presence'
              fill
              className="object-cover"
              priority
            />
          </div>
          <p className="text-[#2E5F5C] text-[24px] leading-relaxed">
            Projects delivered worldwide from skyscraper rope access to offshore 
            rig shutdowns. Active in 22+ countries across GCC, North 
            America, Europe, Asia-Pacific, Africa, and South America.
          </p>
        </div>

        <div className="flex flex-col">
          <h2 className="text-[#2E5F5C] text-xl font-semibold mb-4">Smart Support</h2>
          <div className="relative h-48 w-full mb-4 rounded-lg overflow-hidden">
            <Image 
              src='/whygulfaar2.png'
              alt='Smart Support'
              fill
              className="object-cover"
              priority
            />
          </div>
          <p className="text-[#2E5F5C] text-[24px] leading-relaxed">
            Support in all major languages, powered by advanced tech platforms 
            and tools tailored for diverse industries and regions.
          </p>
        </div>

        <div className="flex flex-col">
          <h2 className="text-[#2E5F5C] text-xl font-semibold mb-4">AI-Powered</h2>
          <div className="relative h-48 w-full mb-4 rounded-lg overflow-hidden">
            <Image 
              src='/whygulfaar3.png'
              alt='AI-Powered'
              fill
              className="object-cover"
              priority
            />
          </div>
          <p className="text-[#2E5F5C]  text-[24px] leading-relaxed">
            Our proprietary LLM platform enhances training, hiring, BPO, and 
            live support—ensuring global standards with local infrastructure 
            from Riyadh to Rotterdam.
          </p>
        </div>
      </div>
    </div>
  )
}

export default WhyGulfaar
