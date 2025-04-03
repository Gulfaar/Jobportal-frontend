import React from 'react'
import Header from '../Components/Header/Header'
import Footer from '../Components/Home/Footer'
import AboutUs from '../Components/AboutUs/AboutUs'

const page = () => {
  return (
    <div>
        <Header title='About Us' subtitle=''/>

        <AboutUs/>

        <Footer/>
      
    </div>
  )
}

export default page
