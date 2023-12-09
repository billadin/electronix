import React, { useContext, useEffect, useState } from 'react'
import { useLoaderData, useParams } from 'react-router-dom'
import ItemCard from '../components/ItemCard'
import { nanoid } from 'nanoid'
import { AuthContext } from '../provider/AuthProvider'
import axios from 'axios'

const Brand = () => {
  const {baseURL} = useContext(AuthContext);
  const [banner, setBanners] = useState([]);
  const products = useLoaderData()
  const {name : brand_name} = useParams()

  useEffect(()=> {
    
    axios.get(`${baseURL}/api/v1/brands`)
    .then((res)=> {
      const currentBrand = res.data.find(item => item.brand_name === brand_name)
      const banners  = currentBrand?.banner;
      setBanners(banners)
    })
    .catch(e => console.log(e)) 
  }, [])

  return (
    <div className='bg-gray-50'>
        
{/* Slider start*/}
<div className='mx-auto w-[90%]'>

<div className="carousel object-cover w-full max-h-[550px] rounded-b-lg">
  <div id="item1" className="carousel-item w-full">
    <img src={banner[0]} className="w-full" />
  </div> 
  <div id="item2" className="carousel-item w-full">
    <img src={banner[1]} className="w-full" />
  </div> 
  <div id="item3" className="carousel-item w-full">
    <img src={banner[2]} className="w-full" />
  </div>
</div> 
<div className="flex justify-center w-full py-2 gap-2">
  <a href="#item1" className="btn btn-xs">1</a> 
  <a href="#item2" className="btn btn-xs">2</a> 
  <a href="#item3" className="btn btn-xs">3</a> 

</div>
</div>
{/* Slider end */}


{/* Products section */}
<div className='w-[90%] mx-auto mt-16'>
      <h1 className='text-4xl font-medium '><span className='text-[#419E66]'>{brand_name.toUpperCase()}</span> Products List</h1>
      <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 py-10'>
      {
        products.length > 0 ?
        products.map(product => {
          return <ItemCard key={nanoid(10)} product={product} brand_name={brand_name}/>
          })
        : <p className='text-xl font-semibold mt-8'>Not Products available</p>
      }
      </div>
</div>

</div>
  )
}

export default Brand