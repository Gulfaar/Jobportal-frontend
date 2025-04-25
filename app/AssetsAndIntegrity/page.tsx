'use client'

import Header from "../Components/Header/Header";
import Image from "next/image";
import { FaPlay } from "react-icons/fa";
import React, { useState } from 'react';

const AssetsAndIntegrity = () => {
    const services = [
        {
            title: "Provision of QA/QC and Asset Integrity Inspectors",
            description:
                "We deploy certified inspectors to ensure full compliance with Saudi Aramco protocols, international standards (API, ASME, ISO), and customized client specifications across all operational phases.",
            points: [
                "Certified QA/QC and asset integrity inspectors",
                "Compliant with API, ASME, ISO standards",
                "Expertise in Saudi Aramco regulations",
                "Client-specific requirement adaptability",
                "Supports operational quality and safety goals",
            ],
            image: "/Asset-intgrity-1.png",
            video: "https://www.youtube.com/embed/NVmmwEGIZDk",
        },
        {
            title: "Pipeline Integrity",
            description:
                "Comprehensive inspection and monitoring solutions to prevent corrosion, degradation, and failure in pipelines, ensuring continuous, safe, and efficient transport of oil, gas, and fluids.",
            points: [
                "Pipeline inspection and condition monitoring",
                "Corrosion and leakage detection",
                "Preventive maintenance and risk reduction",
                "Improves operational efficiency and lifespan",
                "Supports regulatory and performance compliance",
            ],
            image: "/Asset-intgrity-2.png",
            video: "https://www.youtube.com/embed/NVmmwEGIZDk",
        },
        {
            title: "Umbilical/Underwater Inspection Services",
            description:
                "We offer specialized subsea inspections of umbilicals, risers, and flowlines (URF) to preserve offshore production performance, safety, and asset longevity in harsh environments.",
            points: [
                "Subsea inspection of URF systems",
                "Structural and integrity assessment",
                "Prevents failures in offshore operations",
                "Minimizes downtime and repair costs",
                "Ensures safety and production continuity",
            ],
            image: "/Asset-intgrity-3.png",
            video: "https://www.youtube.com/embed/NVmmwEGIZDk",
        },
        {
            title: "Electrical and Instrumentation Inspection Services",
            description:
                "Accurate testing and inspection of electrical systems, instrumentation, and control panels to ensure safe performance and compliance with operational and safety standards.",
            points: [
                "Testing of electrical and control systems",
                "Accuracy and calibration verification",
                "Compliance with safety regulations",
                "Prevents system failure or hazards",
                "Ideal for complex industrial installations",
            ],
            image: "/Asset-intgrity-4.png",
            video: "https://www.youtube.com/embed/NVmmwEGIZDk",
        },
        {
            title: "Mechanical and Civil Inspection Services",
            description:
                "Evaluation of machinery, pipelines, foundations, and civil structures to verify structural integrity and process safety across onshore and offshore industrial environments.",
            points: [
                "Inspection of mechanical and civil components",
                "Checks structural stability and reliability",
                "Covers static and rotating equipment",
                "Reduces breakdowns and safety risks",
                "Ensures long-term operational integrity",
            ],
            image: "/Asset-intgrity-5.png",
            video: "https://www.youtube.com/embed/NVmmwEGIZDk",
        },
        {
            title: "Painting, Welding, and Coating Inspection Services",
            description:
                "We inspect coating, painting, and welding works to ensure proper application, corrosion resistance, and full compliance with industry codes and quality standards.",
            points: [
                "Coating and painting quality inspections",
                "Welding process evaluation and testing",
                "Corためにrosion prevention assurance",
                "Conformance to ISO/API standards",
                "Supports long-term asset protection",
            ],
            image: "/Asset-intgrity-6.png",
            video: "https://www.youtube.com/embed/NVmmwEGIZDk",
        },
        {
            title: "Fabrication Integrity Services",
            description:
                "Ongoing monitoring and inspection during fabrication processes to maintain quality control and ensure finished components meet engineering, design, and safety specifications.",
            points: [
                "Quality control during fabrication",
                "Verification of design conformance",
                "Minimizes defects in final assemblies",
                "Improves component reliability and durability",
                "Supports EPC and industrial projects",
            ],
            image: "/Asset-intgrity-7.png",
            video: "https://www.youtube.com/embed/NVmmwEGIZDk",
        },
        {
            title: "Pigging Inspection Services",
            description:
                "Execution of pigging to clean and inspect pipelines from inside, identifying anomalies, buildup, or blockages — all without disrupting fluid transport operations.",
            points: [
                "Cleans and inspects pipelines internally",
                "Detects corrosion and internal defects",
                "No disruption to production flow",
                "Accurate internal condition assessment",
                "Essential for oil and gas pipelines",
            ],
            image: "/Asset-intgrity-8.png",
            video: "https://www.youtube.com/embed/NVmmwEGIZDk",
        },
        {
            title: "Non-Destructive Testing (NDT) Inspection Services",
            description:
                "We apply advanced NDT methods (UT, RT, MT, PT, VT) to detect flaws in materials or structures without damaging the asset — critical for safety and reliability.",
            points: [
                "Ultrasonic, radiography, magnetic particle testing",
                "Detects cracks and defects invisibly",
                "Preserves material strength and structure",
                "Prevents critical failure before it occurs",
                "Ideal for critical asset evaluation",
            ],
            image: "/Asset-intgrity-9.png",
            video: "https://www.youtube.com/embed/NVmmwEGIZDk",
        },
        {
            title: "Geophysical and Geotechnical Inspection Services",
            description:
                "Geotechnical and geophysical assessments to analyze subsurface stability, foundation strength, and soil conditions for construction, drilling, and offshore platforms.",
            points: [
                "Subsurface and soil condition assessments",
                "Foundation strength verification",
                "Supports safe civil and offshore works",
                "Ideal for pre-construction surveys",
                "Reduces geotechnical risks and surprises",
            ],
            image: "/Asset-intgrity-10.png",
            video: "https://www.youtube.com/embed/NVmmwEGIZDk",
        },
    ];

    const efficiencyPoints = [
        {
            title: "Strategic Alignment",
            description: "We contribute to national goals by enhancing asset reliability, safety, and performance across the energy infrastructure.",
            icon: "/efficiencyicon1.svg",
        },
        {
            title: "Operational Excellence",
            description: "Our services reduce risks, extend asset life, and optimize performance for both onshore and offshore facilities.",
            icon: "/efficiencyicon2.svg",
        },
        {
            title: "Energy Leadership",
            description: "By ensuring compliance and innovation, we help the Saudi oil industry remain at the forefront of global energy production.",
            icon: "/efficiencyicon3.svg",
        },
    ];

    const benefits = [
        {
            title: "Enhanced Operational Efficiency",
            description: "Thorough cleaning minimizes contamination, maximizes storage, and improves operational efficiency.",
            icon: "/oilgasbenefits1.svg",
        },
        {
            title: "Custom Solutions for All Facilities",
            description: "Custom cleaning programs tackle onshore and offshore challenges, ensuring flexible, efficient operations.",
            icon: "/oilgasbenefits2.svg",
        },
        {
            title: "Environmental Protection",
            description: "Proper waste disposal and sludge recycling minimize environmental impact and ensure regulatory compliance.",
            icon: "/oilgasbenefits3.svg",
        },
        {
            title: "Minimized Downtime",
            description: "Advanced cleaning speeds up projects, cuts downtime, and keeps oil operations running smoothly.",
            icon: "/oilgasbenefits4.svg",
        },
        {
            title: "Regulatory Compliance",
            description: "Our services fully comply with Saudi Aramco guidelines and global standards, ensuring audit and inspection readiness.",
            icon: "/oilgasbenefits5.svg",
        },
        {
            title: "Increased Asset Longevity",
            description: "Regular cleaning reduces corrosion and extends tank life, cutting down on costly replacements.",
            icon: "/oilgasbenefits6.svg",
        },
    ];

    const [activeVideo, setActiveVideo] = useState<string | null>(null);

    return (
        <div className="flex flex-col w-full min-h-screen bg-white">
            <Header title="Asset Integrity Solutions" subtitle="" />

            {/* Hero Section */}
            <section className="w-full bg-white">
                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16">
                        <div className="w-full lg:w-1/2">
                            <h1 className="text-[#2E5F5C] text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight mb-4">
                                Asset Integrity Solutions
                            </h1>
                            <p className="text-[#2E5F5C] text-base sm:text-lg lg:text-xl leading-relaxed mb-6 lg:mb-10 max-w-[650px]">
                                We provide end-to-end Oil Tank Cleaning and Disposal Services that prioritize safety, efficiency, and environmental compliance. Our advanced techniques support both onshore and offshore operations across the Saudi oil sector. Each solution is tailored to meet stringent regulatory and operational standards, including those of Saudi Aramco. By reducing downtime and extending asset life, we help ensure long-term operational continuity.
                            </p>
                        </div>
                        <div className="w-full lg:w-1/2">
                            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden">
                                <Image
                                    src="/Asset-intgriti.png"
                                    alt="Asset Integrity"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <button
                                        className="bg-[#2E5F5C] text-white rounded-full w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center hover:bg-teal-700 transition-colors"
                                        aria-label="Play Video"
                                        onClick={() => setActiveVideo("https://www.youtube.com/embed/NVmmwEGIZDk")}
                                    >
                                        <FaPlay className="w-6 h-6 sm:w-8 sm:h-8" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Service Cards Section */}
            <section className="w-full bg-gray-100 py-8 sm:py-12 lg:py-16">
                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16 lg:space-y-20">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className={`flex flex-col lg:flex-row items-center gap-6 lg:gap-12 ${index % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}
                        >
                            <div className="w-full lg:w-1/2">
                                <div className="relative w-full aspect-[4/2] rounded-2xl overflow-hidden shadow-md">
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        fill
                                        className="object-cover"
                                        priority={index < 3}
                                    />
                                    <div className="absolute bottom-4 right-4">
                                        <button 
                                            className="flex items-center bg-[#2E5F5C] text-white rounded-full px-3 py-2 hover:bg-teal-700 transition-colors text-xs sm:text-sm shadow-lg"
                                            onClick={() => setActiveVideo(service.video)}
                                        >
                                            <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-white flex items-center justify-center mr-2 sm:mr-3">
                                                <FaPlay className="text-[#2E5F5C] w-3 h-3 sm:w-4 sm:h-4" />
                                            </div>
                                            <span className="whitespace-nowrap">Want to Watch How We Work</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full lg:w-1/2">
                                <h3 className="text-[#2E5F5C] text-xl sm:text-2xl font-semibold mb-4">{service.title}</h3>
                                <p className="text-gray-700 text-base sm:text-lg mb-4 sm:mb-6">{service.description}</p>
                                <ul className="space-y-2 sm:space-y-3">
                                    {service.points.map((point, idx) => (
                                        <li key={idx} className="flex items-start gap-2 sm:gap-3">
                                            <span className="text-[#2E5F5C] font-bold text-lg sm:text-xl leading-6">→</span>
                                            <span className="text-gray-700 text-sm sm:text-base leading-6">{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Benefits to Saudi Oil Industry */}
            <section
                className="relative w-full bg-cover bg-center bg-no-repeat text-black py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8"
                style={{ backgroundImage: "url('/oil-bg.png')" }}
            >
                <div className="absolute inset-0 bg-[#FFF200]/50 z-0" />
                <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-stretch py-6 sm:py-8">
                    <div className="relative pr-0 sm:pr-4 lg:pr-8 flex items-center">
                        <div className="absolute top-0 bottom-0 right-0 w-[4px] bg-[#D6C161] rounded-full hidden sm:block" />
                        <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold leading-snug z-10">
                            Benefits to the <br />
                            <span className="text-black">Saudi Arabian Oil Industry</span>
                        </h2>
                    </div>
                    <div className="pl-0 sm:pl-4 lg:pl-8 flex items-center text-sm sm:text-base">
                        <p>
                            Our Oil Tank Cleaning and Disposal Services meet the vital operational demands of Saudi Arabia's oil industry. They are aligned with the nation's environmental goals under Vision 2030. We deliver solutions that boost efficiency, ensure compliance, and support sustainable practices.
                        </p>
                    </div>
                </div>
            </section>

            {/* Efficiency Highlights */}
            <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 max-w-7xl">
                <div className="flex flex-col lg:flex-row items-start justify-between gap-8 lg:gap-16">
                    <div className="w-full lg:w-[55%] space-y-8 sm:space-y-12">
                        {efficiencyPoints.map((point, index) => (
                            <div key={index} className="flex items-start gap-4 sm:gap-6">
                                <div className="w-16 h-16 sm:w-20 sm:h-20 min-w-[64px] bg-[#2E5F5C] rounded-2xl flex items-center justify-center p-3 sm:p-4">
                                    <Image src={point.icon} alt="" width={48} height={48} className="w-full h-full object-contain" />
                                </div>
                                <div className="pt-1 sm:pt-2">
                                    <h3 className="text-[#2E5F5C] text-xl sm:text-2xl lg:text-3xl font-bold mb-2 sm:mb-3 whitespace-nowrap">
                                        {point.title}
                                    </h3>
                                    <p className="text-[#2E5F5C]/80 text-base sm:text-lg lg:text-xl leading-relaxed max-w-[460px]">
                                        {point.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="w-full lg:w-[42%] relative aspect-square">
                        <Image
                            src="/oilgascover3.png"
                            alt="Oil and Gas Facility"
                            fill
                            className="object-cover rounded-2xl"
                            priority
                        />
                    </div>
                </div>
            </section>

            {/* Benefits Grid */}
            <section className="relative">
                <div className="absolute inset-0 w-full h-full">
                    <Image src="/benefitsbg.png" alt="" fill className="object-cover" priority />
                </div>
                <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 max-w-7xl z-10">
                    <h2 className="text-center text-[#2E5F5C] text-3xl sm:text-4xl lg:text-5xl font-semibold mb-8 sm:mb-12 leading-tight max-w-4xl mx-auto">
                        Key Benefits of Our Oil Tank Cleaning & Disposal Services
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 max-w-6xl mx-auto">
                        {benefits.map((benefit, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-[24px] sm:rounded-[32px] shadow-lg overflow-hidden relative min-h-[280px] sm:min-h-[310px] p-6 sm:p-8 max-w-[360px] mx-auto w-full group"
                            >
                                <div className="absolute top-0 right-0 w-0 h-0 border-t-[60px] sm:border-t-[80px] border-l-[60px] sm:border-l-[80px] border-t-[#2E5F5C] border-l-transparent transition-all duration-300 ease-in-out group-hover:border-t-[68px] group-hover:border-l-[68px] sm:group-hover:border-t-[88px] sm:group-hover:border-l-[88px]" />
                                <div className="flex flex-col items-center text-center h-full pt-2">
                                    <div className="w-12 h-12 sm:w-16 sm:h-16 mb-6 sm:mb-8 transition-transform duration-300 ease-in-out group-hover:scale-110">
                                        <Image src={benefit.icon} alt="" width={64} height={64} className="w-full h-full object-contain" />
                                    </div>
                                    <h3 className="text-[#2E5F5C] text-lg sm:text-xl lg:text-2xl font-semibold mb-4 sm:mb-6 leading-tight">
                                        {benefit.title}
                                    </h3>
                                    <p className="text-[#2E5F5C]/70 text-sm sm:text-base lg:text-lg leading-relaxed mt-auto">
                                        {benefit.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Work Section */}
            <section className="px-4 sm:px-6 lg:px-16 py-8 sm:py-12 lg:py-16 bg-white">
                <h1 className="text-[#2E5F5C] text-3xl sm:text-4xl lg:text-5xl font-semibold mb-8 sm:mb-12">Our Projects</h1>
                <div className="overflow-hidden w-full">
                    <div className="flex gap-4 sm:gap-6 items-center animate-marquee">
                        {Array.from({ length: 94 }).map((_, index) => {
                            const actualIndex = index % 47;
                            const image = `/assetAndIntegrit1/assets-integrity-${String(actualIndex + 1).padStart(3, '0')}.png`;
                            return (
                                <div
                                    key={index}
                                    className="min-w-[200px] sm:min-w-[250px] lg:min-w-[300px] flex-shrink-0 transform transition-all duration-300"
                                >
                                    <div className="bg-gray-200 rounded-[16px] sm:rounded-[24px] p-[8px] sm:p-[12px]">
                                        <div className="relative w-full h-[180px] sm:h-[240px] lg:h-[280px] rounded-[12px] sm:rounded-[16px] overflow-hidden">
                                            <Image
                                                src={image}
                                                alt={`Project ${actualIndex + 1}`}
                                                fill
                                                className="object-cover"
                                                priority={index < 8}
                                            />
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <style jsx>{`
                    @keyframes marquee {
                        0% {
                            transform: translateX(0);
                        }
                        100% {
                            transform: translateX(-50%);
                        }
                    }
                    .animate-marquee {
                        animation: marquee 30s linear infinite;
                    }
                    @media (hover: hover) {
                        .animate-marquee:hover {
                            animation-play-state: paused;
                        }
                    }
                `}</style>
            </section>

            {/* Video Modal */}
            {activeVideo && (
                <div
                  className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
                  onClick={() => setActiveVideo(null)}
                >
                  <div className="relative w-full max-w-4xl aspect-video" onClick={e => e.stopPropagation()}>
                    <iframe
                      className="w-full h-full rounded-xl"
                      src={`${activeVideo}?autoplay=1`}
                      title="Service Video"
                      allow="autoplay; encrypted-media"
                      allowFullScreen
                    />
                    <button 
                      className="absolute -top-2 -right-2 bg-white text-black rounded-full p-2 leading-none w-8 h-8 flex items-center justify-center shadow-lg"
                      onClick={() => setActiveVideo(null)}
                    >
                      ✕
                    </button>
                  </div>
                </div>
            )}

        </div>
    );
};

export default AssetsAndIntegrity;