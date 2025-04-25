import React from 'react'
import Footer from '../Components/Home/Footer'
import Header from '../Components/Header/Header'
import Efficiency from '../Components/OilGas/Efficiency'
import Benefits from '../Components/OilGas/Benefits'

import OilTankCleaningComponent from '../Components/OilGas/OilTankCleaningComponent'
import OurWorks from '../Components/OilGas/OurWorks'

const page = () => {
  return (
    <div>
            <Header title='Oil Tank Cleaning & Disposal Services' subtitle=''/>
           <OilTankCleaningComponent/>
          <Efficiency/>
          <Benefits/>
          <OurWorks/>
         


     <Footer/> 
    </div>
  )
}

export default page
