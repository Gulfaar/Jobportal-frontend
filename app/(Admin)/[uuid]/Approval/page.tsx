import EmployerApproval from '@/app/Components/Admin/EmployerApproval'
import Header from '@/app/Components/Header/Header'
import Footer from '@/app/Components/Home/Footer'
import React from 'react'

const page = () => {
  return (
    <div>

      <Header title='Employer Approval' subtitle=''/>
      <EmployerApproval/>
      <Footer/>

    </div>
  )
}

export default page
