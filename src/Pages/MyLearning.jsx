import React from 'react'
import Navbar from '../components/Navbar'
import Awshero from '../components/Awshero'
import Mylearningprogress from '../components/Mylearningprogress'
import PendingCourse from '../components/PendingCourse'
import Footer from '../components/Footer'

const MyLearning = () => {
  return (
    <div>
      <Navbar />
      <Awshero/>
      <Mylearningprogress/>
      <PendingCourse/>
      <Footer/>
    </div>
  )
}

export default MyLearning
