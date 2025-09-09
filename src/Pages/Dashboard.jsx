import React from 'react'
import WelcomeSection from '../components/WelcomeSection'
import LearningProgress from '../components/LearningProgress'
import CourseProgress from '../components/CourseProgress'
import Recommneded from '../components/Recommneded'
import { Unlock } from 'lucide-react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <WelcomeSection />
      <LearningProgress />
      <CourseProgress />
      <Recommneded />
      <Unlock />
      <Footer />
    </div>
  )
}

export default Dashboard
