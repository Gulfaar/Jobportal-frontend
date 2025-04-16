import Head from "next/head";
import Header from '../Components/Header/Header'
import PartnerWithGulfaar from "../Components/PartnerWithUs/PartnerContainer";
import PartnerUs from "../Components/PartnerWithUs/PartnerUS";
import PartnershipOpportunities from "../Components/PartnerWithUs/PartnerShipOpertunitys";
import PartnershipTypes from "../Components/PartnerWithUs/PartnerType";
import SuccessNetwork from "../Components/PartnerWithUs/SuccessNetwork";
import WhyPartnerWithGulfaar from "../Components/PartnerWithUs/WhyPartner";
import Footer from '../Components/Home/Footer'




const PartnerPage = () => {
    return (
        <div className="flex flex-col w-full  min-h-screen">
            <Head>
            <title>Cookies</title>
          </Head>
          <Header title={"Partner With Us"} subtitle={"Grow, and Succeed with Gulfaar"} />
          <div className="flex-1 flex  flex-col items-center justify-center ">
                <PartnerWithGulfaar />
                <WhyPartnerWithGulfaar />
                <PartnerUs />
                <PartnershipOpportunities />
                <PartnershipTypes />
              
                <Footer />
          </div>
        </div>
      );
    };

export default PartnerPage;
