import React, { useState } from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Footer from './components/Footer'
import Login from './components/Login'
import PlaceOrder from './pages/PlaceOrder'

const App = () => {
  const [showLogin, setShowLogin] = useState(false)
  return (
    <>
    {showLogin ? <Login setShowLogin={setShowLogin}/> : <></>}
      <div className='md:max-w-[90vw] md:m-auto'>
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/Cart' element={<Cart/>} />
          <Route path='/order' element={<PlaceOrder />} />
        </Routes>
      </div>
      <Footer/>
    </>
  )
}
export default App