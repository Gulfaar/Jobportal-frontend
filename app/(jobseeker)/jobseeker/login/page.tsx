import Header from '@/app/Components/Header/Header'
import Footer from '@/app/Components/Home/Footer'
import LoginPage from '@/app/Components/jobseeker/login'
import React from 'react'

const page = () => {
  return (
    <div>
      
      <Header title='Login' subtitle=''/>

      <LoginPage/>

      <Footer/>

    </div>
  )
}

export default page
