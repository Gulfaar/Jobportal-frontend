import React from 'react'
import HeroSection from '../Components/OnDemandSkilledProfessionals/HeroSection'
import OnDemandWorks from '../Components/OnDemandSkilledProfessionals/OnDemandWorks'
import OnDemandBenefits from '../Components/OnDemandSkilledProfessionals/OnDemandBenefits'
import OnDemandProfessional from '../Components/OnDemandSkilledProfessionals/OnDemandProfessional'
import IndustryServices from '../Components/OnDemandSkilledProfessionals/IndustryServices'
import Header from '../Components/Header/Header'
import Footer from '../Components/Home/Footer'

const page = () => {
  return (
    <div>
        <Header title='On-Demand Skilled Professionals' subtitle='Expert Talent, When You Need It AI-Powered Outsourcing '/>
        <HeroSection/>
        <IndustryServices/>
        <OnDemandWorks/>
        <OnDemandBenefits/>
        <OnDemandProfessional/>
        <Footer/>
      
    </div>
  )
}

export default page
