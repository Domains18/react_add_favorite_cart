import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Home from './components/Home'
import Favorites from './components/Favorites'
import Cart from './components/Cart'
const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path='/cart' element={<Cart/>} />
      </Routes>
    </>
  )
}

export default App