import React, { useContext, useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AuthContext } from '../provider/AuthProvider'
import profileImage from '../assets/profile-pic.jpg'
import Loading from './Loading'
import ThemeToggle from './ThemeToggle'

const Navbar = () => {

    const {user, logOut, loading, setLoading, updatingUser} = useContext(AuthContext)

   



    const handleLogout = () => {
        logOut()
        .then(res=> console.log('User is logged out'))
        .catch(e => console.error(e))
      }

      const navLinks = (
        <>
        <NavLink to={'/'} className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-[#419E66] font-bold underline"
              : ""
          }>
                            <li>
                                <p href="#" className="block md:px-4 transition dark:text-white ">
                                    <span>Home</span>
                                </p>
                            </li>
                            </NavLink>
                            <NavLink to={'/products'} className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-[#419E66] font-bold underline"
              : ""
          }>
                            <li>
                                <p href="#" className="block md:px-4 transition dark:text-white ">
                                    <span>All Products</span>
                                </p>
                            </li>
                            </NavLink>
                            <NavLink to={'/add-product'} className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-[#419E66] font-bold underline"
              : ""
          }>
                            <li>
                                <p href="#" className="block md:px-4 transition dark:text-white ">
                                    <span>Add Product</span>
                                </p>
                            </li>
                            </NavLink>
                            <NavLink to={'/cart'} className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-[#419E66] font-bold underline"
              : ""
          }>
                            <li>
                                <p href="#" className="block md:px-4 transition dark:text-white  ">
                                    <span>My Cart</span>
                                </p>
                            </li>
                            </NavLink>

                            <li className='absolute right-6 md:right-0'>
                                <p href="#" className="block md:px-4 transition dark:text-white  ">
                                    <span className='inline-flex absolute'>
                            <ThemeToggle  className="inline-flex"/>
                    </span>
                                </p>
                            </li>

        </>
   )

  return (
    <div>
    <nav className="w-full bg-white dark:bg-black md:bg-transparent">
        <div className="container m-auto px-2 md:px-12 lg:px-7">
            <div className="md:relative flex flex-wrap items-center justify-between py-3 gap-6 md:py-4 md:gap-0">
                <input type="checkbox" name="toggle_nav" id="toggle_nav" className="peer hidden"/>
                <div className="w-full px-6 flex justify-between lg:w-max md:px-0 z-30">
                    <a href="#" aria-label="logo" className="flex space-x-2 items-center">
                        <span className="text-2xl font-bold text-black dark:text-white ">
                            electroni<span className='text-4xl text-[#419E66]'>X</span>
                        </span>
                    </a>

                    <div className="flex items-center lg:hidden max-h-10">
                        <label role="button" htmlFor="toggle_nav" aria-label="humburger" id="hamburger" className="relative w-10 h-auto p-2 text-black">
                            <div id="line"
                                className="m-auto h-0.5 w-6 rounded bg-black dark:bg-white  text-black transition duration-300"></div>
                            <div id="line2"
                                className="m-auto mt-2 h-0.5 w-6 rounded bg-black dark:bg-white text-black transition duration-300">
                            </div>
                        </label>
                    </div>
                </div>

                <label role="button" htmlFor="toggle_nav" className="hidden peer-checked:block fixed w-full h-full left-0 top-0 z-10 lg:-z-10 bg-[#419E66] lg:bg-white bg-opacity-30 backdrop-blur backdrop-filter"></label>
                <div className="absolute dark:text-white dark:bg-black lg:static top-20 hidden peer-checked:flex flex-col lg:flex lg:flex-row justify-end z-30 items-center gap-y-6 p-6 rounded-xl bg-white  lg:gap-y-0 lg:p-0 md:flex-nowrap lg:bg-transparent w-[80%] lg:w-7/12">
                    <div className="text-gray-600 lg:pr-4 w-full dark:text-white">
                        <ul className="relative tracking-wide font-medium  text-sm 
                        flex flex-col gap-y-6 lg:gap-y-0 lg:flex-row w-full">
                            {navLinks}
                        </ul>
                    </div>


                    {
                     !loading &&
                    <div className="w-full min-w-max space-y-2 
                    border-[#419E66] dark:border-white lg:space-y-0 md:w-max lg:border-l ">

                        { user ? 
                          <div className='md:flex md:ml-2'>
                          <Link to={'/cart'}>
                          <div>
                          <img src={user.photoURL  } className='w-[40px] rounded-full inline-flex mb-4 md:mb-0'/>
                          <button type="button"  className="py-3 px-6 text-center rounded-full transition sm:w-max">
                              <span className="block text-[#419E66] dark:text-white font-semibold text-sm">
                                  {user.displayName}
                              </span>
                          </button>
                          </div>
                          </Link>
                          <Link to={'/login'}>
                          <button 
                          onClick={handleLogout}
                          type="button" title="Logout" className="w-full py-3 px-6 text-center rounded-full transition bg-[#419E66] hover:bg-yellow-100 active:bg-yellow-400 focus:bg-yellow-300 sm:w-max">
                              <span className="block text-white font-semibold text-sm">
                                  Logout
                              </span>
                          </button>
                          </Link>
                          </div> :

                            <div>
                            <Link to={'/register'}>
                            <button type="button" title="Sign Up" className="w-full py-3 px-6 text-center rounded-full transition active:bg-yellow-200  focus:bg-yellow-100 sm:w-max">
                                <span className="block text-[#419E66]  font-semibold text-sm">
                                    Sign up
                                </span>
                            </button>
                            </Link>
                            <Link to={'/login'}>
                            <button type="button" title="Start buying" className="w-full py-3 px-6 text-center rounded-full transition bg-[#419E66] hover:bg-yellow-100 active:bg-yellow-400 focus:bg-yellow-300 sm:w-max">
                                <span className="block text-white font-semibold text-sm">
                                    Login
                                </span>
                            </button>
                            </Link>
                            </div>
                        }
                        

                        






                    </div>
                    }
                </div>
            </div>
        </div>
    </nav>
</div>
  )
}

export default Navbar