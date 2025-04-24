import Head from "next/head";
import Header from '../../Components/Header/Header'

import Footer from "../../Components/Home/Footer";
import InfrastructureSection from "../../Components/FacilitationManagmentold/InfrastructureSection";
import ComprehensiveServices from "../../Components/FacilitationManagmentold/ComprehensiveServices";
import SectorServices from "../../Components/FacilitationManagmentold/SectorServices";
import RopeAccess from "@/app/Components/FacilitationManagmentold/RopeAccess";
import WhyGulfaaar from "@/app/Components/FacilitationManagmentold/WhyGulfaaar1";
import Inspection from "@/app/Components/FacilitationManagmentold/Inspection";
import UtilityWorks from "@/app/Components/FacilitationManagmentold/UtilityWorks";
import Cleaning from "@/app/Components/FacilitationManagmentold/Cleaning";
import TechBPOSection from "@/app/Components/FacilitationManagmentold/TechBPOSection";
import WorkforceDeployment from "@/app/Components/FacilitationManagmentold/WorkforceDeployment";
import HighlightsSection from "@/app/Components/FacilitationManagmentold/HighlightsSection";



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