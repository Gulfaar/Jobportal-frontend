import React from 'react'
import Footer from '../Components/Home/Footer'
import Header from '../Components/Header/Header'
import Efficiency from '../Components/OilGas/Efficiency'
import Benefits from '../Components/OilGas/Benefits'

import OilTankCleaningComponent from '../Components/OilGas/OilTankCleaningComponent'
import OurProjects from '../Components/OilGas/OurWorks'

const page = () => {
  return (
    <div>
              <Header title='Oil & Gas Sector Capabilities' subtitle=''/>
           <OilTankCleaningComponent/>
          <Efficiency/>
          <Benefits/>
          <OurProjects/>
         


     <Footer/> 
    </div>
  )
}

export default page
