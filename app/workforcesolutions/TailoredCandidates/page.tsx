import Header from '@/app/Components/Header/Header'
import Footer from '@/app/Components/Home/Footer'
import CallToActionSectionTailored from '@/app/Components/Tailored/CallToActionSectionTailored'
import HiringProcessSection from '@/app/Components/Tailored/HiringProcessTailored'
import IntroductionSection from '@/app/Components/Tailored/IntroductionSection'
import JobCategoriesSection from '@/app/Components/Tailored/JobCategoriesSectionTailored'
import WhyChooseGulfaarTailored from '@/app/Components/Tailored/WhyChooseGulfaarTailored'

import React from 'react'

const page = () => {
  return (
    <div>
      <Header title='TAILORED CANDIDATES' subtitle='The Right Talent, Screened Smarter – AI-Driven Recruitment!'/>
      <IntroductionSection/>
      <HiringProcessSection/>
      <JobCategoriesSection/>
      <WhyChooseGulfaarTailored/>
      
      
      <Footer/>
      
    </div>
  )
}

export default page

