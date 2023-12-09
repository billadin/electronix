import React from 'react'
import { Link } from 'react-router-dom'

const BrandCard = ({brand}) => {
    const { brand_name, image } = brand

    
  return (
    <>
    <Link to={`/brand/${brand_name}`}>
        <div className="relative flex flex-col gap-4 justify-center items-center col-span-1 p-8 border rounded-xl bg-white">
            <img className="max-h-12 min-h-12 object-contain" src={image} alt="logo"/>
            <p className='font-bold dark:text-black text-xs mt-4'>{brand_name?.toUpperCase()}</p>
        </div>
    </Link>
    </>
  )
}

export default BrandCard