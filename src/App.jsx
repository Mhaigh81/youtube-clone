import React from 'react'
import Home from './Pages/Home/Home.jsx'
import Video from './Pages/Video/Video.jsx'
import Navbar from './Components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/video/:CategoryID/:videoID' element={<Video />} />
      
      </Routes>
    </div>
  )
}

export default App