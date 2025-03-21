import Head from "next/head";
import Navbar from "../Components/Contact Us/Navbar";
import HeroSection from "../Components/Contact Us/HeroSection";
import FormContact from "../Components/Contact Us/FormContact";
import Footer from "../Components/Contact Us/Footer";

const HomePage = () => {
    return (
        <div className="flex flex-col min-h-screen">
          <Head>
            <title>Contact Us - Gulfaar</title>
          </Head>
          <Navbar />
          <HeroSection />
          <div className="flex-1 flex flex-col items-center justify-center px-6 md:px-20 w-full max-w-7xl mx-auto">
            <FormContact />
          </div>
          <Footer />
        </div>
      );
    };

export default HomePage;
