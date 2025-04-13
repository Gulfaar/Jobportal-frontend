  "use client";
  
  import Head from "next/head";
  import Header from '../Components/Header/Header'
  import Workforce from "../Components/TaskSpecific/WorkForce";
  import IndustriesAndServices from "../Components/TaskSpecific/IndustryAndService";
  import HiringProcess from "../Components/TaskSpecific/HiringProcess";
  import BenefitsOfHiring from "../Components/TaskSpecific/BenifitsOfHiring";
  
  import HireExperts from "../Components/TaskSpecific/HireExpert";
  import Footer from "../Components/Home/Footer";
  import dynamic from 'next/dynamic';
  
  const GulfaarFeatures = dynamic(() => import('../Components/TaskSpecific/GulfaarFeatures'), {
    ssr: false, // disables server-side rendering
  });






  const TaskSpecificPage = () => {
      return (
          <div className="flex flex-col w-full  min-h-screen">
            <Header title={"Task-Specific Experts"} subtitle={"Skilled Experts, On Demand – The Right People for the Right Job"} />
            <div className="flex-1 flex  flex-col items-center justify-center  w-full">
              <Workforce />
              <IndustriesAndServices />
              <HiringProcess />
              <BenefitsOfHiring />
              <GulfaarFeatures />
              <HireExperts />
              <Footer />
            </div>
          </div>
        );
      };

  export default TaskSpecificPage;
