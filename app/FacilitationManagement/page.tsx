import React from 'react'
import Footer from '../Components/Home/Footer'
import Header from '../Components/Header/Header'
import HeroSection from '../Components/FacilitationManagement/HeroSection'
import ServiceLists from '../Components/FacilitationManagement/ServiceLists'
import WhyGulfaar from '../Components/FacilitationManagement/WhyGulfaar'
import CustomerCare from '../Components/FacilitationManagement/CustomerCare'
import WhereWeWork from '../Components/FacilitationManagement/WhereWeWork'
import OurProjects from '../Components/FacilitationManagement/OurProjects'


const page = () => {
  return (
    <div>
            <Header title='Facilitation Management' subtitle='Where Infrastructure Meets Intelligence '/>

              <HeroSection/>
              <ServiceLists/>
              <WhyGulfaar/>
              <CustomerCare/>
              <WhereWeWork/>
              <OurProjects/>

         <Footer/> 
 
    </div>
  )
}

export default page
