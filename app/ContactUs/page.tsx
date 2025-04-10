
import FormContact from "../Components/Contact Us/FormContact";

import Header from "../Components/Header/Header";
import Footer from "../Components/Home/Footer";

const ContactUSPage = () => {
    return (
        <div className=" ">
       
        <Header title="Contact us" subtitle="For hiring, jobs, or partnerships, contact Gulfaar!"/>

          
          <div className="flex-1  flex flex-col items-center justify-center px-6 md:px-20 w-full max-w-full mx-auto">
            <FormContact  />
          </div>
          <Footer />
        </div>
      );
    };

export default ContactUSPage;
