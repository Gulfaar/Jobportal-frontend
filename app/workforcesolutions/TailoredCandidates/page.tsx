import Header from '@/app/Components/Header/Header'
import Footer from '@/app/Components/Home/Footer'
import TailoredCandidatesPage from '@/app/Components/tailoredcandidates/TailoredCandidates'
import React from 'react'

const page = () => {
  return (
    <div>
      <Header title='TAILORED CANDIDATES' subtitle='The Right Talent, Screened Smarter – AI-Driven Recruitment!'/>
      <TailoredCandidatesPage/>
      <Footer/>
      
    </div>
  )
}

export default page

