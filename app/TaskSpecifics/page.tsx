  import Head from "next/head";
  import Header from '../Components/Header/Header'
  import Workforce from "../Components/TaskSpecific/WorkForce";
  import IndustriesAndServices from "../Components/TaskSpecific/IndustryAndService";
  import HiringProcess from "../Components/TaskSpecific/HiringProcess";
  import BenefitsOfHiring from "../Components/TaskSpecific/BenifitsOfHiring";
  import GulfaarFeaturess from "../Components/TaskSpecific/GulfaarFeatures";
  import HireExperts from "../Components/TaskSpecific/HireExpert";
  import Footer from "../Components/Contact Us/Footer";






  const TaskSpecificPage = () => {
      return (
          <div className="flex flex-col w-full  min-h-screen">
              <Head>
              <title>SpecificTask</title>
            </Head>
            <Header />
            <div className="flex-1 flex  flex-col items-center justify-center  w-full">
              <Workforce />
              <IndustriesAndServices />
              <HiringProcess />
              <BenefitsOfHiring />
              <GulfaarFeaturess />
              <HireExperts />
              <Footer />
            </div>
          </div>
        );
      };

  export default TaskSpecificPage;
