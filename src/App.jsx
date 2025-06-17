import React from 'react'
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'

import Header from './Components/Header'
import Footer from './Components/Footer'
function App() {

  return (
    <>
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route index element={<Home/>} />
        <Route path="/" element={<Home/>} />
        <Route path="Login" element={<Login/>} />



      </Routes>
      <Footer/>
      </BrowserRouter>
        
    </>
  )
}

export default App
