import Head from "next/head";
import Header from '../Components/Header/Header'
import PartnerWithGulfaar from "../Components/PartnerWithUs/PartnerContainer";
import PartnerUs from "../Components/PartnerWithUs/PartnerUS";
import PartnershipOpportunities from "../Components/PartnerWithUs/PartnerShipOpertunitys";
import PartnershipTypes from "../Components/PartnerWithUs/PartnerType";
import ContactSection from "../Components/PartnerWithUs/ContactSection";
import LaunchAndGrow from "../Components/PartnerWithUs/LaunchGrow";
import WhyPartnerWithGulfaar from "../Components/PartnerWithUs/WhyPartner";
import Footer from '../Components/Home/Footer'




const PartnerPage = () => {
    return (
        <div className="flex flex-col w-full  min-h-screen">
            <Head>
            <title>Cookies</title>
          </Head>
          <Header title={"Partner With Us"} subtitle={""} />
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
