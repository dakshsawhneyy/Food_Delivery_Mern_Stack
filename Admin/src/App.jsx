import React from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import { Route, Routes } from 'react-router-dom'
import Add from './pages/Add'
import List from './pages/List'
import Orders from './pages/Orders'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

export const url = "http://localhost:5000"

const App = () => {
  
  return (
    <div className='bg-[#fcfcfc] h-screen'>
      <ToastContainer/>
      <Navbar/>
      <div className='flex'>
      <Sidebar/>
      <Routes>
        <Route path='/add' element={<Add/>} />
        <Route path='/list' element={<List/>} />
        <Route path='/orders' element={<Orders/>} />
      </Routes>
      </div>
    </div>
  )
}

export default App
