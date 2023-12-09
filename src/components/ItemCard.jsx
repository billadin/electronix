import { Rating } from '@smastrom/react-rating'
import React from 'react'
import {FaIndustry} from 'react-icons/fa'
import {BiCategory} from 'react-icons/Bi'
import { Link } from 'react-router-dom';

const ItemCard = ({product, brand_name}) => {
  const {img, rating, name, price, id, category} = product;

  return (
    <div>
      <div className="w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-lg ">
        <img
          className="object-cover object-center mx-auto p-6 max-h-64"
          src={img}
        />

        <hr className="h-1" />
        <div className="px-6 py-4">
          <div className="flex my-4">
            <Rating style={{ width: 100 }} value={rating} readOnly />
            {/* <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/> */}
          </div>
          <h1 className="text-xl font-semibold text-gray-800 ">
          {name}
          </h1>
          
          <p className="py-2 text-gray-700 ">
          ${price}
          </p>
          <div className="flex items-center mt-4 text-gray-700 ">
            <FaIndustry/>
            <h1 className="px-2 text-sm">Brand: {brand_name.toUpperCase()}</h1>
          </div>
          <div className="flex items-center mt-4 text-gray-700 ">
          <BiCategory/>
          <h1 className="px-2 text-sm">Type: {category}</h1>
          </div>
          <div className="flex items-center mt-4 text-gray-700  gap-4">
            <Link to={`/brand/${brand_name}/${id}`}>
          <button type="button" title="Start buying" className="w-full py-3 px-6 text-center rounded-full transition bg-[#419E66] hover:bg-white  sm:w-max">
                            <span className="block text-white hover:text-[#419E66] font-semibold text-sm">
                                Details
                            </span>
                        </button>
            </Link>
            <Link to={`/brand/${brand_name}/${id}/update`}>
          <button type="button" title="Start buying" className="w-full py-3 px-6 text-center rounded-full transition bg-white hover:bg-[#419E66]  sm:w-max">
                            <span className="block text-[#419E66] hover:text-white font-semibold text-sm">
                                Update
                            </span>
                        </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemCard