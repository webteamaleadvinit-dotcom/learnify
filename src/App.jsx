import React from 'react'
import Landing from './Pages/Landing'
import Dashboard from './Pages/Dashboard'
import { Routes, Route } from 'react-router'
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
      </Routes>
    </div>
  )
}

export default App
