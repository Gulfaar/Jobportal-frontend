import Image from "next/image";
import { FaPlay } from "react-icons/fa";

const BrownfieldAndPlatformSolutions = () => {


    const services = [
        {
            title: "Offshore Installation Engineering ",
            description:
                "We offer full-spectrum offshore engineering services—from design and planning to real-time simulation and installation—for fixed and floating platform deployments with performance precision.",
            points: [
                "Engineering for fixed and floating platforms ",
                "Advanced 3D modeling and load simulations ",
                "Optimized placement for performance and stability ",
                "Design aligned with offshore conditions",
                "Turnkey support from design to execution ",
            ],
            image: "/BrownfieldAndPlatformSolutionscover2.png",
        },
        {
            title: " Platform Installation and Modifications ",
            description:
                "We install new platforms and modify existing ones, including tie-ins, reinforcements, and upgrades—all while keeping operations running safely and smoothly. ",
            points: [
                " Platform installation and structural upgrades ",
                "Brownfield tie-in and retrofitting solutions ",
                "On-site structural reinforcement and repairs",
                "Live-operation-safe modifications ",
                "Boosts platform life and production capacity ",
            ],
            image: "/BrownfieldAndPlatformSolutionscover3.png",
        },
    ];
    return (
        <div className="flex flex-col w-full min-h-screen bg-white">
           

            {/* Hero Section */}
            <section className="w-full bg-white">
                <div className="max-w-[1400px] mx-auto px-16 py-14 max-md:px-8 max-sm:px-5">
                    <div className="flex items-center justify-between gap-24 max-lg:flex-col max-lg:gap-16">
                        {/* Text Content */}
                        <div className="flex-1 w-full">
                            <h1 className="text-[#2E5F5C] text-[42px] font-semibold leading-[1.2] mb-4 max-md:text-3xl max-sm:text-2xl">
                                <span className="text-3xl md:text-3xl">
                                  Brownfield and Platform Solutions
                                </span>
                            </h1>

                            <p className="text-[23px] text-[#2E5F5C] leading-[1.8] mb-10 max-w-[650px]">
                            We provide comprehensive Brownfield and Platform services designed to enhance, upgrade, 
                            and maintain existing offshore infrastructure. Our expertise in Offshore Installation 
                            Engineering and Platform Installation and Modifications supports the operational efficiency
                             and long-term sustainability of oil and gas assets. With a focus on safety, precision, and 
                             compliance, our solutions cater to the unique demands of the oil industry in Saudi Arabia, ensuring 
                             continued production and asset optimization.
                            </p>
                        </div>

                        {/* Image Section */}
                        <div className="flex-1 w-full">
                            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden">
                                <Image
                                    src="/BrownfieldAndPlatformSolutionscover.png"
                                    alt="Skill Development"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <button className="bg-[#2E5F5C] text-white rounded-full w-20 h-20 flex items-center justify-center hover:bg-teal-700 transition-colors">
                                        <FaPlay className="w-10 h-10" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* content section */}

            <section className="w-full bg-gray-100 py-14">
                <div className="max-w-[1400px] mx-auto px-16 max-md:px-8 max-sm:px-5 space-y-28">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className={`flex flex-col md:flex-row items-center gap-12 ${index % 2 !== 0 ? "md:flex-row-reverse" : ""
                                }`}
                        >
                            {/* Image */}
                            <div className="w-full md:w-1/2">
                                <div className="relative w-full aspect-[4/2] rounded-2xl overflow-hidden shadow-md">
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        fill
                                        className="object-cover"
                                        priority={index < 3}
                                    />
                                    <div className="absolute bottom-4 right-4">
                                        <button className="flex items-center bg-[#2E5F5C] text-white rounded-full pr-4 pl-2 py-2 hover:bg-teal-700 transition-colors text-sm shadow-lg">
                                            <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center mr-3">
                                                <FaPlay className="text-[#2E5F5C] w-3 h-3" />
                                            </div>
                                            <span className="whitespace-nowrap">Want to Watch How We Work</span>
                                        </button>
                                    </div>

                                </div>
                            </div>

                            {/* Content */}
                            <div className="w-full md:w-1/2">
                                <h3 className="text-[#2E5F5C] text-2xl font-semibold mb-4">
                                    {service.title}
                                </h3>
                                <p className="text-gray-700 text-lg mb-6">{service.description}</p>
                                <ul className="space-y-3">
                                    {service.points.map((point, idx) => (
                                        <li key={idx} className="flex items-start gap-3">
                                            <span className="text-[#2E5F5C] font-bold text-xl leading-6">→</span>
                                            <span className="text-gray-700 text-base leading-6">{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Image section */}

            <section
  className="relative w-full bg-cover bg-center bg-no-repeat text-black py-12 px-4 md:px-16"
  style={{
    backgroundImage: "url('/oil-bg.png')", // replace with your actual background
  }}
>
  {/* Yellow semi-transparent overlay */}
  <div className="absolute inset-0 bg-[#FFF200]/50 z-0" />

  {/* Content with vertical divider */}
  <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch py-8">
    {/* Left Side - Heading */}
    <div className="border-r-2 border-[#D6C161] h-full pr-4 md:pr-8 flex items-center">
      <h2 className="text-2xl md:text-3xl font-semibold leading-snug">
        Benefits to the <br />
        <span className="text-black">Saudi Arabian Oil Industry</span>
      </h2>
    </div>

    {/* Right Side - Paragraph */}
    <div className="pl-4 md:pl-8 flex items-center text-sm md:text-base">
      <p>
        Our Oil Tank Cleaning and Disposal Services meet the vital operational demands of
        Saudi Arabia’s oil industry. They are aligned with the nation’s environmental goals
        under Vision 2030. We deliver solutions that boost efficiency, ensure compliance, and
        support sustainable practices.
      </p>
    </div>
  </div>
</section>



        </div>
    );
};

export default BrownfieldAndPlatformSolutions;