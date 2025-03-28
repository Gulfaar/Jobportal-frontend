"use client"

import Image from 'next/image'
import React, { useState } from 'react'

interface MarkerData {
  id: number;
  city: string;
  country: string;
  address?: string;
  flag: string;
  top: string;
  left: string;
  image: string;
}

const markerData: MarkerData[] = [
  { id: 1, city: "New York", country: "USA", flag: "🇺🇸", top: "18%", left: "18%", image: "/cities/newyork.jpg" },
  { id: 2, city: "Toronto", country: "CAN", flag: "🇨🇦", top: "22%", left: "22%", image: "/cities/toronto.jpg" },
  { id: 3, city: "Vancouver", country: "CAN", flag: "🇨🇦", top: "15%", left: "20%", image: "/cities/vancouver.jpg" },
  { id: 4, city: "Chicago", country: "USA", flag: "🇺🇸", top: "25%", left: "24%", image: "/cities/chicago.jpg" },
  { id: 5, city: "Mexico City", country: "MEX", flag: "🇲🇽", top: "32%", left: "22%", image: "/cities/mexicocity.jpg" },
  { id: 6, city: "Panama City", country: "PAN", flag: "🇵🇦", top: "38%", left: "24%", image: "/cities/panama.jpg" },
  { id: 7, city: "London", country: "GBR", flag: "🇬🇧", top: "10%", left: "39%", image: "/cities/london.jpg" },
  { id: 8, city: "Paris", country: "FRA", flag: "🇫🇷", top: "10%", left: "29%", image: "/cities/paris.jpg" },
  { id: 9, city: "Dubai", country: "UAE", flag: "🇦🇪", top: "22%", left: "52%", image: "/cities/dubai.jpg" },
  { id: 10, city: "Istanbul", country: "TUR", flag: "🇹🇷", top: "26%", left: "58%", image: "/cities/istanbul.jpg" },
  { id: 11, city: "Mumbai", country: "IND", flag: "🇮🇳", top: "28%", left: "68%", image: "/cities/mumbai.jpg" },
  { id: 12, city: "Delhi", country: "IND", flag: "🇮🇳", top: "22%", left: "75%", image: "/cities/delhi.jpg" },
  { id: 13, city: "Beijing", country: "CHN", flag: "🇨🇳", top: "30%", left: "78%", image: "/cities/beijing.jpg" },
  { id: 14, city: "Tokyo", country: "JPN", flag: "🇯🇵", top: "25%", left: "82%", image: "/cities/tokyo.jpg" },
  { id: 15, city: "Cairo", country: "EGY", flag: "🇪🇬", top: "42%", left: "50%", image: "/cities/cairo.jpg" },
  { id: 16, city: "Nairobi", country: "KEN", flag: "🇰🇪", top: "48%", left: "52%", image: "/cities/nairobi.jpg" },
  { id: 17, city: "Melbourne", country: "AUS", address: "100 Smith Street\nCollingwood VIC 3066 AU", flag: "🇦🇺", top: "62%", left: "69%", image: "/cities/melbourne.jpg" },
  { id: 18, city: "Sydney", country: "AUS", flag: "🇦🇺", top: "80%", left: "75%", image: "/cities/sydney.jpg" },
];

const AboutUs = () => {
  const [hoveredMarker, setHoveredMarker] = useState<number | null>(null);

  return (
    <div className="w-full bg-white">
      <div className="w-full mx-auto px-5 md:container md:px-20 py-16 md:py-24">
        {/* Main Content Section */}
        <div className="flex flex-col md:flex-row items-start justify-between gap-8 md:gap-16 mb-24">
          {/* Left Content */}
          <div className="w-full md:w-1/2">
            <h1 className="text-3xl md:text-5xl font-bold text-black mb-4">
              Empowering Workforce,<br />
              Connecting Businesses,
            </h1>
            <h2 className="text-xl md:text-2xl font-medium text-[#2E6D65] mb-8">
              Building Global Success!
            </h2>
            <p className="text-[#2E6D65] text-base md:text-lg leading-relaxed">
              At Gulfaar, we are more than just a recruitment agency, we are a 
              global workforce solutions provider committed to bridging the gap 
              between talent and opportunity. With our AI-driven hiring platform, 
              advanced workforce solutions, and industry-leading training 
              programs, we help businesses find the right people and 
              professionals build successful careers across the world. With a 
              presence in multiple countries and a strong network of employers, 
              job seekers, and partners, Gulfaar is shaping the future of work, 
              recruitment, and workforce outsourcing with efficiency, technology, 
              and innovation.
            </p>
          </div>

          {/* Right Image */}
          <div className="w-full md:w-1/2 relative">
            <div className="relative w-full aspect-[4/3] h-[500px] overflow-hidden rounded-2xl">
              <Image 
                src="/aboutuscover.png"
                alt="About Us Cover"
                fill
                className="object-cover rounded-2xl"
                priority
              />
            </div>
          </div>
        </div>

        {/* World Map Section */}
        <div className="relative">
          <h1 className="text-2xl md:text-4xl font-semibold text-[#2E6D65] text-center">
            We&apos;re here for you no matter where you are
          </h1>
          {/* Underline */}
          <div className="w-[280px] md:w-[500px] h-0.5 bg-[#2E6D65] mx-auto mt-2 md:ml-[320px]"></div>
          
          <div className="relative w-full h-[300px] md:h-[500px] mt-16">
            {/* Base World Map */}
            <div 
              className="absolute inset-0 bg-contain bg-center bg-no-repeat opacity-60"
              style={{ backgroundImage: 'url("/world.png")' }}
            />

            {/* Markers */}
            <div className="absolute inset-0">
              {markerData.map((marker) => (
                <div 
                  key={marker.id}
                  className="group absolute w-16 h-16 -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                  style={{ top: marker.top, left: marker.left }}
                  onMouseEnter={() => setHoveredMarker(marker.id)}
                  onMouseLeave={() => setHoveredMarker(null)}
                >
                  <div className="absolute inset-[25%] w-12 h-12 transition-all duration-300 group-hover:scale-125">
                    <div className={`absolute inset-0 bg-contain bg-center bg-no-repeat transition-opacity duration-200 ${hoveredMarker === marker.id ? 'opacity-90' : 'opacity-70'}`} style={{ backgroundImage: 'url("/Middlecircle.png")' }} />
                    <div className="absolute inset-0 bg-contain bg-center bg-no-repeat" style={{ backgroundImage: 'url("/MapMarker.png")' }} />
                  </div>
                  
                  {/* Location Popup */}
                  {hoveredMarker === marker.id && (
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-max z-50">
                      <div className="bg-white rounded-xl shadow-lg p-4 relative">
                        <div className="flex gap-4">
                          {/* Image */}
                          <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                            <Image
                              src={marker.image}
                              alt={`${marker.city} office`}
                              fill
                              className="object-cover"
                            />
                          </div>
                          
                          {/* Content */}
                          <div className="flex items-start gap-2">
                            <span className="text-2xl">{marker.flag}</span>
                            <div>
                              <h3 className="text-lg font-semibold">{marker.city}, {marker.country}</h3>
                              {marker.address && (
                                <p className="text-sm text-gray-600 mt-1 whitespace-pre-line">
                                  {marker.address}
                                </p>
                              )}
                            </div>
                          </div>
                        </div>
                        {/* Arrow */}
                        <div className="absolute bottom-[-8px] left-1/2 -translate-x-1/2 w-4 h-4 bg-white transform rotate-45 shadow-lg"></div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Our Mission Section */}
        <div className="mt-32">
          {/* Title */}
          <div className="flex items-baseline gap-3 mb-8">
            <h2 className="text-3xl md:text-5xl font-bold text-black">Our</h2>
            <h2 className="text-3xl md:text-5xl font-bold text-[#2E6D65]">Mission</h2>
          </div>
          
          {/* Underline */}
          <div className="w-full h-0.5 md:h-1 bg-[#2E6D65] mb-8 md:mb-16"></div>

          {/* Mission Points */}
          <div className="space-y-8 md:space-y-12">
            {/* Point 1 */}
            <div className="flex flex-col md:flex-row items-start gap-4 md:gap-8">
              <h3 className="text-xl md:text-2xl font-semibold text-black w-full md:w-[300px] md:flex-shrink-0">
                Empower professionals
              </h3>
              <p className="text-lg md:text-xl text-black">
                with the right skills, training, and career opportunities
              </p>
            </div>

            {/* Point 2 */}
            <div className="flex flex-col md:flex-row items-start gap-4 md:gap-8">
              <h3 className="text-xl md:text-2xl font-semibold text-black w-full md:w-[300px] md:flex-shrink-0">
                Support businesses
              </h3>
              <p className="text-lg md:text-xl text-black">
                with tailored hiring, payroll management, and contract-based workforce solutions
              </p>
            </div>

            {/* Point 3 */}
            <div className="flex flex-col md:flex-row items-start gap-4 md:gap-8">
              <h3 className="text-xl md:text-2xl font-semibold text-black w-full md:w-[300px] md:flex-shrink-0">
                Leverage AI & technology
              </h3>
              <p className="text-lg md:text-xl text-black">
                to streamline hiring, upskilling, and workforce management
              </p>
            </div>

            {/* Point 4 */}
            <div className="flex flex-col md:flex-row items-start gap-4 md:gap-8">
              <h3 className="text-xl md:text-2xl font-semibold text-black w-full md:w-[300px] md:flex-shrink-0">
                Bridge global talent gaps
              </h3>
              <p className="text-lg md:text-xl text-black">
                by facilitating international employment and mobility.
              </p>
            </div>
          </div>
        </div>

        {/* What We Do Section */}
        <div className="mt-32 relative">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image 
              src="/Testimonials.png"
              alt="What We Do Background"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Content */}
          <div className="relative z-10 px-5 md:px-4 py-16">
            {/* Title */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold">
                What We <span className="text-[#FF6B6B]">Do</span>?
              </h2>
            </div>

            {/* Cards Grid */}
            <div className="w-full mx-auto max-w-7xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                {/* Card 1: Skill Development & Training */}
                <div className="bg-white rounded-3xl p-8 shadow-lg">
                  <h3 className="text-2xl font-semibold text-[#FF6B6B] mb-6">
                    Skill Development & Training
                  </h3>
                  <ul className="space-y-6">
                    <li className="flex items-start gap-3">
                      <span className="text-[#FF6B6B] text-lg mt-1">◇</span>
                      <p className="text-gray-700 text-lg">
                        Professional courses in technical, non-technical, and soft skills training
                      </p>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#FF6B6B] text-lg mt-1">◇</span>
                      <p className="text-gray-700 text-lg">
                        AI-powered language learning and global workforce readiness programs,internal quality assurance.
                      </p>
                    </li>
                  </ul>
                </div>

                {/* Card 2: Outsourcing & Business Solutions */}
                <div className="bg-white rounded-3xl p-8 shadow-lg">
                  <h3 className="text-2xl font-semibold text-[#FF6B6B] mb-6">
                    Outsourcing & Business Solutions
                  </h3>
                  <ul className="space-y-6">
                    <li className="flex items-start gap-3">
                      <span className="text-[#FF6B6B] text-lg mt-1">◇</span>
                      <p className="text-gray-700 text-lg">
                        On-demand staffing for BPO, IT, customer support, and field operations
                      </p>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#FF6B6B] text-lg mt-1">◇</span>
                      <p className="text-gray-700 text-lg">
                        AI-driven workforce management tools for business optimization.
                      </p>
                    </li>
                  </ul>
                </div>

                {/* Card 3: Franchise & Partnership Opportunities */}
                <div className="bg-white rounded-3xl p-8 shadow-lg">
                  <h3 className="text-2xl font-semibold text-[#FF6B6B] mb-6">
                    Franchise & Partnership Opportunities
                  </h3>
                  <ul className="space-y-6">
                    <li className="flex items-start gap-3">
                      <span className="text-[#FF6B6B] text-lg mt-1">◇</span>
                      <p className="text-gray-700 text-lg">
                        Expand Gulfaar's global reach with franchise models and strategic partnerships.
                      </p>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#FF6B6B] text-lg mt-1">◇</span>
                      <p className="text-gray-700 text-lg">
                        Join our network of manpower agencies, training centers, and corporate partners.
                      </p>
                    </li>
                  </ul>
                </div>

                {/* Card 4: Global Mobility & Workforce Migration */}
                <div className="bg-white rounded-3xl p-8 shadow-lg">
                  <h3 className="text-2xl font-semibold text-[#FF6B6B] mb-6">
                    Global Mobility & Workforce Migration
                  </h3>
                  <ul className="space-y-6">
                    <li className="flex items-start gap-3">
                      <span className="text-[#FF6B6B] text-lg mt-1">◇</span>
                      <p className="text-gray-700 text-lg">
                        Visa assistance and relocation services for professionals seeking international careers.
                      </p>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#FF6B6B] text-lg mt-1">◇</span>
                      <p className="text-gray-700 text-lg">
                        Employer solutions for cross-border hiring and payroll management.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Card 5: End-to-End Workforce Solutions (Centered) */}
              <div className="flex justify-center">
                <div className="bg-white rounded-3xl p-8 shadow-lg max-w-[600px]">
                  <h3 className="text-2xl font-semibold text-[#FF6B6B] mb-6">
                    End-to-End Workforce Solutions
                  </h3>
                  <ul className="space-y-6">
                    <li className="flex items-start gap-3">
                      <span className="text-[#FF6B6B] text-lg mt-1">◇</span>
                      <p className="text-gray-700 text-lg">
                        AI-powered recruitment for permanent, contract-based, and on-demand
                      </p>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#FF6B6B] text-lg mt-1">◇</span>
                      <p className="text-gray-700 text-lg">
                        Industry-specific staffing for IT, healthcare, logistics, finance, construction, and more
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Statistics Section */}
        <div className="bg-[#2E6D65] py-20">
          <div className="w-full mx-auto px-5 md:container md:px-20">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Global Presence */}
              <div className="flex flex-col items-center text-center">
                <div className="bg-white rounded-full p-6 w-24 h-24 flex items-center justify-center mb-6">
                  <Image
                    src="/aboutusicon1.png"
                    alt="Global Presence"
                    width={40}
                    height={40}
                  />
                </div>
                <h3 className="text-white text-2xl font-semibold mb-3">
                  Global Presence
                </h3>
                <p className="text-[#FFD700] text-lg mt-8">
                  Operations in multiple continents.
                </p>
              </div>

              {/* Job Seekers */}
              <div className="flex flex-col items-center text-center">
                <div className="bg-white rounded-full p-6 w-24 h-24 flex items-center justify-center mb-6">
                  <Image
                    src="/aboutusicon2.png"
                    alt="Job Seekers"
                    width={40}
                    height={40}
                  />
                </div>
                <h3 className="text-white text-2xl font-semibold mb-3">
                  1 Million of Job Seekers Placed
                </h3>
                <p className="text-[#FFD700] text-lg">
                  Operations in multiple continents.
                </p>
              </div>

              {/* Employers */}
              <div className="flex flex-col items-center text-center">
                <div className="bg-white rounded-full p-6 w-24 h-24 flex items-center justify-center mb-6">
                  <Image
                    src="/Group.png"
                    alt="Employers"
                    width={40}
                    height={40}
                  />
                </div>
                <h3 className="text-white text-2xl font-semibold mb-3">
                  1000s of Employers Supported
                </h3>
                <p className="text-[#FFD700] text-lg">
                  Operations in multiple continents.
                </p>
              </div>

              {/* AI-Powered */}
              <div className="flex flex-col items-center text-center">
                <div className="bg-white rounded-full p-6 w-24 h-24 flex items-center justify-center mb-6">
                  <Image
                    src="/aboutusicon3.png"
                    alt="AI-Powered"
                    width={40}
                    height={40}
                  />
                </div>
                <h3 className="text-white text-2xl font-semibold mb-3">
                  AI-Powered Talent Matching
                </h3>
                <p className="text-[#FFD700] text-lg">
                  Reducing hiring time by over 50%.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Partner with Gulfaar Section */}
        <div className="relative mt-16">
          <div className="w-full mx-auto px-5 md:container md:px-48 lg:px-64">
            <div className="relative bg-[#F8E449] rounded-[32px] overflow-hidden">
              {/* Background Image */}
              <div className="absolute inset-0">
                <Image
                  src="/aboutuslastcover.png"
                  alt="Background"
                  fill
                  className="object-cover"
                  priority
                />
                {/* Yellow Overlay */}
                <div className="absolute inset-0 bg-[#F8E449] opacity-60"></div>
              </div>

              {/* Content */}
              <div className="relative z-10 p-5 md:p-16">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                  {/* Left Content */}
                  <div className="w-full md:max-w-lg">
                    <h2 className="text-3xl md:text-5xl font-bold text-[#1E1E1E] mb-6">
                      Partner with <span className="text-[#2E6D65]">Gulfaar</span>
                    </h2>
                    <p className="text-lg md:text-xl text-[#1E1E1E] mb-8">
                      At Gulfaar, we believe in building strong partnerships that create mutual growth and long-term success.
                    </p>
                    <div className="flex gap-4">
                      <button className="bg-[#2E6D65] text-white px-6 md:px-8 py-3 rounded-lg hover:bg-[#245a53] transition-colors">
                        Apply
                      </button>
                      <button className="bg-white text-[#1E1E1E] px-6 md:px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors">
                        Learn More
                      </button>
                    </div>
                  </div>

                  {/* Right Image Placeholder */}
                  <div className="w-full md:w-[400px] aspect-[4/3] bg-white/20 rounded-2xl backdrop-blur-sm flex items-center justify-center">
                    <p className="text-[#1E1E1E] text-lg font-medium">Image Placeholder</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
