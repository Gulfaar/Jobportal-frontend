import Image from 'next/image'
import React from 'react'

const CustomerCare = () => {
  return (
    <div className="relative w-full max-w-[1300px] mx-auto my-10   max-md:my-4">
      {/* Background Image */}
      <Image
        src="/customercarecover.png"
        alt="Customer Care Background"
        layout="responsive"
        width={1300}
        height={350}
        className="rounded-[80px] max-md:rounded-[30px]"
        priority
      />

      {/* Overlay Content */}
      <div className="absolute inset-0 flex items-center px-4 sm:px-8 md:px-12 max-md:px-4 max-md:py-2">
        <div className="flex items-center w-full max-md:flex-col">
          {/* Left: Text */}
          <div className="text-white space-y-6 w-full md:w-[55%] z-10 max-md:space-y-2 max-md:text-left">
            <h2 className="text-3xl sm:text-2xl md:text-5xl font-semibold max-md:text-lg">24/7 Customer Service</h2>
            <div className="space-y-4 max-md:space-y-1">
              <div className="flex items-center gap-3 max-md:gap-1.5 max-md:justify-start">
                <Image 
                  src="/fmphoneicon.svg" 
                  alt="Phone Icon" 
                  width={28} 
                  height={28}
                  className="brightness-0 invert max-md:w-4 max-md:h-4"
                />
                <span className="text-lg sm:text-xl md:text-2xl max-md:text-xs">+18-555-169-667</span>
              </div>
              <div className="flex items-center gap-3 max-md:gap-1.5 max-md:justify-start">
                <Image 
                  src="/fmemailicon.svg" 
                  alt="Email Icon" 
                  width={28} 
                  height={28}
                  className="brightness-0 invert max-md:w-4 max-md:h-4"
                />
                <span className="text-lg sm:text-xl md:text-2xl max-md:text-xs">info@gulfaar.com</span>
              </div>
            </div>
          </div>

          {/* Right: Agent Image */}
          <div className="mt-4 sm:mt-6 md:mt-0 ml-[-200px] md:ml-[-600px] -mb-4 scale-y-[1.0] transform origin-bottom w-full md:w-auto max-md:-mt-12 max-md:ml-0 max-md:-mb-2 max-md:w-3/4 max-md:self-end max-md:mr-6">
            <Image 
              src="/fmcustomercarecover2.png"
              alt="Customer Support Agent"
              width={1300}
              height={340}
              className="max-md:w-full max-md:h-auto"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CustomerCare;
