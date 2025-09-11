import React from 'react'
import Awshero from '../components/Awshero'
import Mylearningprogress from '../components/Mylearningprogress'
import PendingCourse from '../components/PendingCourse'
import Footer from '../components/Footer'

const MyLearning = () => {
  return (
    <div>
      <Awshero/>
      <Mylearningprogress/>
      <PendingCourse/>
      <Footer/>
    </div>
  )
}

export default MyLearning
