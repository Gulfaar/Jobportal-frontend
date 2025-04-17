import Head from "next/head";
import Header from '../../Components/Header/Header'

import Footer from "../../Components/Home/Footer";
import InfrastructureSection from "../../Components/FacilitationManagment/InfrastructureSection";
import ComprehensiveServices from "../../Components/FacilitationManagment/ComprehensiveServices";
import SectorServices from "../../Components/FacilitationManagment/SectorServices";
import RopeAccess from "@/app/Components/FacilitationManagment/RopeAccess";
import WhyGulfaaar from "@/app/Components/FacilitationManagment/WhyGulfaaar";
import Inspection from "@/app/Components/FacilitationManagment/Inspection";
import UtilityWorks from "@/app/Components/FacilitationManagment/UtilityWorks";
import Cleaning from "@/app/Components/FacilitationManagment/Cleaning";
import TechBPOSection from "@/app/Components/FacilitationManagment/TechBPOSection";
import WorkforceDeployment from "@/app/Components/FacilitationManagment/WorkforceDeployment";
import HighlightsSection from "@/app/Components/FacilitationManagment/HighlightsSection";



const FacilitationManagmentPage = () => {
    return (
        <div className="flex flex-col w-full  min-h-screen">
            <Head>
            <title>FacilitationManagmentPage</title>
          </Head>
          <Header title={"FacilitationManagmentPage"} subtitle={"Where Infrastructure Meets Intelligence Global Solutions"} />
          <div className="flex-1 flex  flex-col items-center justify-center w-full">
          <InfrastructureSection />
          <ComprehensiveServices />
          <SectorServices />
          <RopeAccess />
          <Inspection />
          <UtilityWorks />
          <Cleaning />
          <TechBPOSection />
          <WorkforceDeployment />
          <HighlightsSection />
        
          <WhyGulfaaar />
          
            <Footer />
          </div>
        </div>
      );
    };

export default FacilitationManagmentPage;