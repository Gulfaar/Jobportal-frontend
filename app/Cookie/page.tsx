import Head from "next/head";
import Header from '../Components/Header/Header'
import CookiesInfo from "../Components/Cookie/CookieInfo";
import CookiesUsage from "../Components/Cookie/CookieUsage";
import CookieChoice from "../Components/Cookie/CookieChoice";
import CookieManag from "../Components/Cookie/CookieManag";
import Footer from "../Components/Home/Footer";




const CookiePage = () => {
    return (
        <div className="flex flex-col w-full  min-h-screen">
            <Head>
            <title>Cookies</title>
          </Head>
          <Header title={"COOKIES"} subtitle={"We use cookies to improve your experience, enhance services, and deliver relevant content."} />
          <div className="flex-1 flex  flex-col items-center justify-center  w-full">
            <CookiesInfo />
            <CookiesUsage />
            <CookieChoice />
            <CookieManag />
           
           <Footer/>
          </div>
        </div>
      );
    };

export default CookiePage;
