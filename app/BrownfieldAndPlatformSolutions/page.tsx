import React from 'react'
import Header from '../Components/Header/Header'
import Footer from '../Components/Home/Footer'
import Benefits from '../Components/BrownfieldandPlatformSolutions/Benefits'
import BrownfieldAndPlatformSolutions from '../Components/BrownfieldandPlatformSolutions/BrownfieldAndPlatformSolutions'
import Efficiency from '../Components/BrownfieldandPlatformSolutions/Efficiency'
import OurWorks from '../Components/BrownfieldandPlatformSolutions/OurWorks'

const page = () => {
  return (
    <div>
        <Header title='Brownfield And PlatformSolutions' subtitle=''/>
        <BrownfieldAndPlatformSolutions/>
        <Efficiency/>
        <Benefits/>
        <OurWorks/>
        
        <Footer/>
      
    </div>
  )
}

export default page
