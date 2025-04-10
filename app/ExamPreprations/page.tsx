import Head from "next/head";
import Header from '../Components/Header/Header'

import Footer from "../Components/Home/Footer";
import GulfAdvantage from "../Components/ExamPrepration/GulfAdvantage";
import ExamFeatures from "../Components/ExamPrepration/ExamFeatures";
import AIEnhancements from "../Components/ExamPrepration/AiEnhanchment";
import ExamPrograms from "../Components/ExamPrepration/ExamPrograms";
import JourneyToSuccess from "../Components/ExamPrepration/JourneyToSuccess";
import WhyEnroll from "../Components/ExamPrepration/WhyEnroll";
import FAQSection from "../Components/ExamPrepration/FAQSection";


const GulfAdvantagePage = () => {
    return (
        <div className="flex flex-col w-full  min-h-screen">
            <Head>
            <title>ExamPrepration</title>
          </Head>
          <Header title={"EXAMPREPRATION"} subtitle={""} />
          <div className="flex-1 flex  flex-col items-center justify-center  w-full">
            <GulfAdvantage />
            <ExamFeatures />
            <AIEnhancements />
            <ExamPrograms />
            <JourneyToSuccess />
            <WhyEnroll />
            <FAQSection />
            <Footer />
          </div>
        </div>
      );
    };

export default GulfAdvantagePage;
