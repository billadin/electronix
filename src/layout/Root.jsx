import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'

const Root = () => {
  return (
    <>
    <div>
        <Navbar/>
    </div>
    <div className='min-h-screen mx-auto bg-gray-50'>
        <Outlet/>
    </div>
    <div>
        <Footer/>
    </div>
    </>
  )
}

export default Root