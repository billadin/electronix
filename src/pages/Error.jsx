import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div className='bg-gray-50'>
      <section className="bg-gray-50 w-[90%] mx-auto">
  <div className="container min-h-screen px-6 py-12 mx-auto lg:flex lg:items-center lg:gap-12">
    <div className="wf-ull lg:w-1/2">
      <h1 className="text-6xl font-semibold text-[#419E66] ">
        404 error
      </h1>
      <h1 className="mt-3 text-2xl font-semibold text-gray-800">
        Page not found
      </h1>
      <p className="mt-4 text-gray-500 ">
        Sorry, the page doesn't exist. Return to home?
      </p>
      <div className="flex items-center mt-6 gap-x-3">

        <Link to={'/'}>
        <button className="w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-[#419E66] rounded-lg shrink-0 sm:w-auto hover:bg-white hover:text-[#419E66] ">
          Take me home
        </button>
        </Link>
      </div>
    </div>
    <div className="relative w-full mt-8 lg:w-1/2 lg:mt-0">
      <img
        className=" w-full lg:h-[32rem] h-80 md:h-96 rounded-lg object-cover "
        src="https://images.unsplash.com/photo-1613310023042-ad79320c00ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
        alt=""
      />
    </div>
  </div>
</section>

    </div>
  )
}

export default Error