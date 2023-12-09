import React from 'react'

const Footer = () => {
  return (
    <div>
        
        <footer>
  <div className="bg-gray-50  pt-8 md:pt-20  mx-auto dark:bg-black">
    <div className="container flex justify-around px-6 text-gray-600  md:px-12 lg:px-20 w-[90%]">
        <div
          className="mb-6 gap-6 py-6 sm:flex md:mb-16 md:space-y-6 md:py-0"
        >
          <a href="#" aria-label="logo" className="">
                        <span className="text-2xl font-bold text-black dark:text-white">
                            electroni<span className='text-4xl text-[#419E66] '>X</span>
                        </span>
                    </a>
        </div>
        <div className='text-center'>
          <div className="grid grid-cols-1 pb-10">

            <div>
              <h6 className="text-lg font-medium text-gray-700 dark:text-white">Site Links</h6>
              <ul className="mt-4 list-inside space-y-4 text-left">
                <li>
                  <a href="#" className="transition hover:text-primary dark:text-white">Login</a>
                </li>
                <li>
                  <a href="#" className="transition hover:text-primary dark:text-white">Sign up</a>
                </li>
                <li>
                  <a href="#" className="transition hover:text-primary dark:text-white">Home</a>
                </li>
              </ul>
            </div>
          </div>

        </div>
    </div>
          <div className="flex gap-2 border-t border-cyan-800 dark:border-white py-8 text-gray-500 w-[90%] mx-auto dark:text-white">
            <span>&copy; ElectroniX - <span id="year">2023</span></span>
            <span>All right reserved</span>
          </div>
  </div>
</footer>
                                    
    </div>
  )
}

export default Footer