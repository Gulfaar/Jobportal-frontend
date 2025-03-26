import Head from "next/head";
import Navbar from "../Components/Contact Us/Navbar";
import HeroSection from "../Components/Contact Us/HeroSection";
import FormContact from "../Components/Contact Us/FormContact";
import Footer from "../Components/Contact Us/Footer";
import Header from "../Components/Header/Header";

const ContactUSPage = () => {
    return (
        <div className="flex flex-col min-h-screen">
          <Head>
            <title>Contact Us - Gulfaar</title>
          </Head>
          <Header title={'Contact US'} subtitle={'Have questions about hiring, job opportunities, workforce solutions, or partnerships? Get in touch with Gulfaar—our team is ready to assist you '} />
          <div className="flex-1 flex flex-col items-center justify-center px-6 md:px-20 w-full max-w-full mx-auto">
            <FormContact />
          </div>
          <Footer />
        </div>
      );
    };

export default ContactUSPage;
