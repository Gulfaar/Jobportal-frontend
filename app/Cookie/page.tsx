import Head from "next/head";
import Navbar from "../Components/Contact Us/Navbar";
import HeroSection from "../Components/Contact Us/HeroSection";
import CookiesInfo from "../Components/Cookie/CookieInfo";
import CookiesUsage from "../Components/Cookie/CookieUsage";
import CookieChoice from "../Components/Cookie/CookieChoice";
import CookieManag from "../Components/Cookie/CookieManag";
import Footer from "../Components/Contact Us/Footer";
import ContactUS from "../Components/ContactUS";


const CookiePage = () => {
    return (
        <div className="flex flex-col w-full  min-h-screen">
            <Head>
            <title>Cookies</title>
          </Head>
          <Navbar />
          <HeroSection />
          <div className="flex-1 flex  flex-col items-center justify-center  w-full">
            <CookiesInfo />
            <CookiesUsage />
            <CookieChoice />
            <CookieManag />
            <ContactUS />
            <Footer />
          </div>
        </div>
      );
    };

export default CookiePage;
