import Head from "next/head";
import Navbar from "../Components/Contact Us/Navbar";
import HeroSection from "../Components/Contact Us/HeroSection";
import PartnerWithGulfaar from "../Components/PartnerWithUs/PartnerContainer";
import PartnerUs from "../Components/PartnerWithUs/PartnerUS";
import PartnershipOpportunities from "../Components/PartnerWithUs/PartnerShipOpertunitys";
import PartnershipTypes from "../Components/PartnerWithUs/PartnerType";
import ContactSection from "../Components/PartnerWithUs/ContactSection";
import LaunchAndGrow from "../Components/PartnerWithUs/LaunchGrow";
import Footer from "../Components/Contact Us/Footer";
import WhyPartnerWithGulfaar from "../Components/PartnerWithUs/WhyPartner";




const PartnerPage = () => {
    return (
        <div className="flex flex-col w-full  min-h-screen">
            <Head>
            <title>Cookies</title>
          </Head>
          <Navbar />
          <HeroSection />
          <div className="flex-1 flex  flex-col items-center justify-center  w-full">
                <PartnerWithGulfaar />
                <WhyPartnerWithGulfaar />
                
                <PartnerUs />
                <PartnershipOpportunities />
                <PartnershipTypes />
                <ContactSection />
                <LaunchAndGrow />
                <Footer />
          </div>
        </div>
      );
    };

export default PartnerPage;
