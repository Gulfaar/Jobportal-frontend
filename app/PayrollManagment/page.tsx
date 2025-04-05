
  import Header from '../Components/Header/Header'
  import Footer from "../Components/Home/Footer";
import PayrollSection from "../Components/PayrollMangments/PayrollSection";
import PayrollSystemSection from "../Components/PayrollMangments/PayrollSystem";
import PayrollBenifits from "../Components/PayrollMangments/PayrollBenifits";
import PayrollChooseGulf from "../Components/PayrollMangments/PayrollChooseGulf";
import PayrollHero from "../Components/PayrollMangments/PayrollHero";






  const PayrollManagmentPage = () => {
      return (

            
            <div className="flex-1 flex  flex-col items-center justify-center  w-full">
              <Header title={"Payroll Managment"} subtitle={"Your Team, Managed by Us"} />
                <PayrollSection />
                <PayrollSystemSection />
                <PayrollBenifits />
                <PayrollChooseGulf />
                <PayrollHero />
            <Footer />
          </div>
        );
      };

  export default PayrollManagmentPage;
