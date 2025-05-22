import LoginPage from '@/app/Components/employer/login'
import Header from '@/app/Components/Header/Header'
import Footer from '@/app/Components/Home/Footer'
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

