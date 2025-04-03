import React from 'react'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Home/Footer'
import PersonalityDevelopment from '../../Components/PersonalityDevelopment/PersonalityDevelopment'


const page = () => {
  return (
    <div >
      <Header 
        title='Personality Development' 
        subtitle='AI-powered training shapes impactful professionals.'
      />
       <PersonalityDevelopment/>

      <Footer/>
    </div>
  )
}

export default page
