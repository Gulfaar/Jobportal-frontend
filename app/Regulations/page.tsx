import Head from "next/head";
import Header from '../Components/Header/Header'
import Footer from "../Components/Home/Footer";
import EmploymentLabourCompliance from "../Components/Regulations/Employment";
import DataProtectionSection from "../Components/Regulations/DataProtection";
import EthicalSection from "../Components/Regulations/EthicalRecuirment";
import IndustryRegulations from "../Components/Regulations/IndustryRegulations";
import CodeOfConduct from "../Components/Regulations/CodeOfConduct";
import LegalResponsibilities from "../Components/Regulations/LeagalResponsbility";
import ComplianceConsequences from "../Components/Regulations/ComplianceConsequences";
import ReportViolations from "../Components/Regulations/ReportViolations";







const RegulationsPage = () => {
    return (
        <div className="flex flex-col w-full  min-h-screen">
            <Head>
            <title>Regulations</title>
          </Head>
          <Header title={"Regulations"} subtitle={""} />
          <div className="flex-1 flex  flex-col items-center justify-center  w-full">
            <EmploymentLabourCompliance />
            <DataProtectionSection />
            <EthicalSection />
            <IndustryRegulations />
            <CodeOfConduct />
            <LegalResponsibilities />
            <ComplianceConsequences />
            <ReportViolations />
            <Footer />
          </div>
        </div>
      );
    };

export default RegulationsPage;
