import React from 'react'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Home/Footer'
import LanguageTraining from '../../Components/LanguageTraining/LanguageTraining'

const page = () => {
  return (
    <div>
              <Header title='Language Training' subtitle='Explore a wide range of job opportunities available'/>

            <LanguageTraining/>


            <Footer/>
    </div>
  )
}

export default page
