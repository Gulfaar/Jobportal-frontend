import Head from "next/head";
import Navbar from "../Components/Contact Us/Navbar";
import HeroSection from "../Components/Contact Us/HeroSection";
import FlexibleHead from "../Components/FlexibleHiring/FlexibleHead";
import FlexibleHiringModels from "../Components/FlexibleHiring/HiringModels";
import ModernHiringSystem from "../Components/FlexibleHiring/ModernHiring";
import FlexibleHiringIndustries from "../Components/FlexibleHiring/HiringIndustrys";
import WhyChooseGulfaar from "../Components/FlexibleHiring/Choose";
import HireSmarterCTA from "../Components/FlexibleHiring/HireSmartCTA";
import Footer from "../Components/Contact Us/Footer";







const FlexibleHiringPage = () => {
    return (
        <div className="flex flex-col w-full  min-h-screen">
            <Head>
            <title>FlexibleHiring</title>
          </Head>
          <Navbar />
          <HeroSection />
          <div className="flex-1 flex  flex-col items-center justify-center  w-full">
            <FlexibleHead />
            <FlexibleHiringModels />
            <ModernHiringSystem />
            <FlexibleHiringIndustries />
            <WhyChooseGulfaar />
            <HireSmarterCTA />
            <Footer />
          </div>
        </div>
      );
    };

export default FlexibleHiringPage;