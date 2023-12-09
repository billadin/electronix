import { Rating } from '@smastrom/react-rating';
import React from 'react'

export const FeaturedCard = ({item}) => {

    const {brand, category, description, img, name, price, rating } = item;

  return (
    <>
    <div className="flex max-w-md overflow-hidden bg-white rounded-lg shadow-lg mx-auto">
    <div className="w-1/3 bg-cover bg-landscape p-2 my-auto">
      <img src={img} alt="" />
    </div>
    <div className="w-2/3 p-4">
        <h1 className="text-2xl font-bold text-gray-900">
            {name}
        </h1>
        <p className="mt-2 text-sm text-gray-600">
            {description.split(".")[0]}
        </p>
        <p className="mt-2 text-sm text-gray-600">
            {brand}
        </p>
        <p className="mt-2 text-sm text-gray-600">
            {category}
        </p>
        <div className="flex mt-2 item-center">
        <Rating style={{ width: 100 }} value={rating} readOnly className='text-[#419E66]'/>
        </div>
        <div className="flex justify-between mt-3 item-center">
            <h1 className="text-xl font-bold text-gray-700">
                ${price}
            </h1>
            <button className="px-3 py-2 text-xs font-bold text-white uppercase bg-gray-800 rounded">
                Prebook
            </button>
        </div>
    </div>
</div>
    </>
  )
}
