import Head from "next/head";
import Header from '../Components/Header/Header'
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
          <Header title={"COOKIES"} subtitle={"At Gulfaar, we use cookies and similar technologies to enhance your experience, improve our services, and provide you with relevant content. This Cookie Policy explains what cookies are, how we use them, and your choices regarding their use."} />
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
