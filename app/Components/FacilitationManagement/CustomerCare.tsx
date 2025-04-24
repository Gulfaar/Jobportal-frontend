import Image from 'next/image'
import React from 'react'

const CustomerCare = () => {
  return (
    <div className="relative w-full max-w-[1300px] mx-auto my-10">
      {/* Background Image */}
      <Image
        src="/customercarecover.png"
        alt="Customer Care Background"
        layout="responsive"
        width={1300}
        height={350}
        className="rounded-[80px]"
        priority
      />

      {/* Overlay Content */}
      <div className="absolute inset-0 flex items-center px-12">
        <div className="flex items-center w-full">
          {/* Left: Text */}
          <div className="text-white space-y-6 w-[55%] z-10">
            <h2 className="text-5xl font-semibold">24/7 Customer Service</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Image 
                  src="/fmphoneicon.svg" 
                  alt="Phone Icon" 
                  width={28} 
                  height={28}
                  className="brightness-0 invert"
                />
                <span className="text-2xl">+18-555-169-667</span>
              </div>
              <div className="flex items-center gap-3">
                <Image 
                  src="/fmemailicon.svg" 
                  alt="Email Icon" 
                  width={28} 
                  height={28}
                  className="brightness-0 invert"
                />
                <span className="text-2xl">info@gulfaar.com</span>
              </div>
            </div>
          </div>

          {/* Right: Agent Image */}
          <div className="ml-[-600px] -mb-8 scale-y-[1.0] transform origin-bottom">
            <Image 
              src="/fmcustomercarecover2.png"
              alt="Customer Support Agent"
              width={1300}
              height={340}
              priority
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CustomerCare
