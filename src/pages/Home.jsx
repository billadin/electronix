import React, { useContext, useEffect, useState } from 'react'
import {FiSend} from 'react-icons/fi'
import BrandCard from '../components/BrandCard';
import { nanoid } from 'nanoid';
import { MdAssignmentReturn, MdProductionQuantityLimits } from 'react-icons/md';
import { BiSupport } from 'react-icons/Bi';
import { AuthContext } from '../provider/AuthProvider';
import { FeaturedCard } from '../components/FeaturedCard';


const Home = () => {

  const { baseURL} = useContext(AuthContext);
  const [brands, setBrands] = useState([]);
  const [featuredItems, setFeaturedItems] = useState([]);


  useEffect(()=> {
    fetch(`${baseURL}/api/v1/brands`)
    .then(res=> res.json())
    .then(data=> setBrands(data))
    .catch(e => console.log(e));


    fetch(`${baseURL}/api/v1/brand/featured`)
    .then(res=> res.json())
    .then(data=> setFeaturedItems(data))
    .catch(e => console.log(e));

  }, [])



  return (
    <div className='bg-gray-50 pb-16 dark:bg-black dark:text-white'>

{/* Slider start*/}

<div className='mx-auto w-[99.9%] lg:w-[90%]'>

<div className="carousel object-cover w-full max-h-[550px]">
  <div id="item1" className="carousel-item w-full">
    <img src="https://i.ibb.co/Px4ZYX6/main-banner-4.jpg" className="w-full" />
  </div> 
  <div id="item2" className="carousel-item w-full">
    <img src="https://i.ibb.co/WxRBycX/main-banner-3.jpg" className="w-full" />
  </div> 
  <div id="item3" className="carousel-item w-full">
    <img src="https://i.ibb.co/ypB7hKq/main-banner-1.png" className="w-full" />
  </div>
</div> 
<div className="flex justify-center w-full py-2 gap-2">
  <a href="#item1" className="btn btn-xs dark:text-black dark:bg-white">1</a> 
  <a href="#item2" className="btn btn-xs dark:text-black dark:bg-white">2</a> 
  <a href="#item3" className="btn btn-xs dark:text-black dark:bg-white">3</a> 

</div>
</div>


    
{/* Slider end */}



{/* Brand section */}
<div className='w-[90%] mx-auto my-16'>
      <h1 className='text-4xl font-medium'>Popular Brands</h1>
      <div className="relative items-center w-full mx-auto  py-14">
          <div className="grid grid-cols-2 gap-0.5 md:grid-cols-6">
            {
              brands.map(brand => <BrandCard brand={brand} key={nanoid(10)}/>)
            }
          </div>
      </div>            
    </div>


{/* Discount section start */}
<div className='w-[90%] mx-auto'>

<h1 className='text-4xl font-medium'>Current Discounts</h1>
    <div className='flex flex-col lg:flex-row gap-8  justify-between my-16'>
    
      <div className="card relative bg-base-100 shadow-lg rounded-md">
        <figure><img className="w-full" src="https://demo.codezeel.com/prestashop/PRS17/PRS170419/img/cms/sub-banner-1.jpg" alt="Movie"/></figure>
        <div className="card-body absolute flex flex-col px-4 ">
          <p className='dark:text-black'>Flat 20% Discount</p>
          <h2 className="card-title dark:text-black">Lenovo Phones</h2>
          <div className="card-actions">
            <button className="btn btn-md xl:mt-8 bg-[#419E66] dark:text-black text-white">Shop Now</button>
          </div>
        </div>
      </div>
      <div className="card relative bg-base-100 shadow-lg rounded-md">
        <figure><img className="w-full" src="https://demo.codezeel.com/prestashop/PRS17/PRS170419/img/cms/sub-banner-2.jpg" alt="Movie"/></figure>
        <div className="card-body absolute flex flex-col px-4">
          <p className='dark:text-black'>Flat 12% Discount</p>
          <h2 className="card-title dark:text-black">Android TV</h2>
          <div className="card-actions">
            <button className="btn btn-md xl:mt-8 bg-[#419E66] text-white dark:text-black">Shop Now</button>
          </div>
        </div>
      </div>
      <div className="card relative bg-base-100 shadow-lg rounded-md">
        <figure><img className="w-full" src="https://demo.codezeel.com/prestashop/PRS17/PRS170419/img/cms/sub-banner-3.jpg" alt="Movie"/></figure>
        <div className="card-body absolute flex flex-col px-4">
          <p className='dark:text-black'>Flat 30% Discount</p>
          <h2 className="card-title dark:text-black">Motorolla Phone</h2>
          <div className="card-actions">
            <button className="btn btn-md xl:mt-8 bg-[#419E66] text-white dark:text-black">Shop Now</button>
          </div>
        </div>
      </div>


    </div>
</div>
{/* Discount section end */}







{/* Featured section */}
<div className='w-[90%] mx-auto mt-16 mb-28'>
<h1 className='text-4xl font-medium'>Featured Products</h1>
<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-14'>
{
  featuredItems.map((item)=> <FeaturedCard item={item} key={nanoid(10)}/>)
}

</div>

</div>
{/* Featured section end */}


{/* Service section */}
<div className='w-[90%] mx-auto '>
  
<section>
                <div className="relative w-full mx-auto">
                  <div className="py-12 mx-auto bg-white rounded-lg">
                    <div>

                      <div className="grid grid-cols-1 gap-4 md:gap-12 md:grid-cols-2 lg:grid-cols-4 lg:space-y-0 lg:text-center">

                        <div className='flex justify-center items-center gap-6'>
                          <div >
                            <div>
                              <FiSend className='text-4xl'/>
                            </div>
                          </div>
                          <div >
                          <p className="mt-4 text-lg font-medium leading-6 text-black">
                          Worldwide Shipping
                            </p>
                            <h3 className="mt-4 text-base text-gray-500">
                            Order above $100
                              </h3>
                          </div>
                        </div>

                        <div className='flex justify-center items-center gap-6'>
                          <div >
                            <div>
                              <MdProductionQuantityLimits className='text-4xl dark:text-black'/>
                            </div>
                          </div>
                          <div >
                          <p className="mt-4 text-lg font-medium leading-6 text-black">
                          Genuine Products
                            </p>
                            <h3 className="mt-4 text-base text-gray-500">
                            All products are brand new
                              </h3>
                          </div>
                        </div>
                        <div className='flex justify-center items-center gap-6'>
                          <div >
                            <div>
                              <MdAssignmentReturn className='text-4xl dark:text-black'/>
                            </div>
                          </div>
                          <div >
                          <p className="mt-4 text-lg font-medium leading-6 text-black">
                          Moneyback guarantee
                            </p>
                            <h3 className="mt-4 text-base text-gray-500">
                            Simple return policy
                              </h3>
                          </div>
                        </div>
                        <div className='flex justify-center items-center gap-6'>
                          <div >
                            <div>
                              <BiSupport className='text-4xl dark:text-black'/>
                            </div>
                          </div>
                          <div >
                          <p className="mt-4 text-lg font-medium leading-6 text-black">
                          24/7 Support
                            </p>
                            <h3 className="mt-4 text-base text-gray-500">
                            Always Online to help
                              </h3>
                          </div>
                        </div>

                        
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            
</div>
{/* Service section end */}

    </div>
  )
}

export default Home