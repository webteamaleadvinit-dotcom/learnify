import React from 'react'
import Landing from './Pages/Landing'
import Dashboard from './Pages/Dashboard'
import { Routes, Route } from 'react-router'
import MyLearning from './Pages/MyLearning'
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path='/mylearning' element={<MyLearning/>} />
      </Routes>
    </div>
  )
}

export default App
