
import { Rating } from '@smastrom/react-rating';
import React, { useContext, useState } from 'react'
import {MdDelete} from 'react-icons/md'
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import { enqueueSnackbar } from 'notistack';
import Loading from './Loading';

const CartItem = ({item : receivedItems, handleDelete}) => {
  const  [item, setItem] = useState(receivedItems)

  const {user, loading,  setLoading} = useContext(AuthContext);
 

  if (loading) {
    return <Loading/>
  }
    const {brand, img, name, price, category, rating, id, _id, uid} = item;
    
  return (
    <div className='py-6'>
      {
        !loading &&
  <div className="overflow-hidden max-w-xs bg-white flex flex-col mx-auto lg:mx-0 lg:flex-row lg:max-w-5xl lg:w-full lg:shadow-md rounded-lg  lg:rounded-xl">
   
    <div className="lg:w-1/4">
      <div
        className="p-6 mx-auto"
      >
        <img src={img}  className='mx-auto text-center max-h-32'/>
      </div>
    </div>


    <div className="max-w-md px-6 lg:px-10 py-6 lg:max-w-4xl lg:w-1/4 mx-auto">
      <h2 className="text-lg font-semibold text-gray-800">{name}</h2>
      <p className="mt-2 text-gray-500 font-semibold">
        {brand}
      </p>
      <p className="mt-2 text-gray-500 font-semibold">
        {category}
      </p>
      <div className="mt-2 text-gray-500 font-semibold">
      <Rating style={{ width: 100 }} value={rating} readOnly/>
      </div>
    </div>

    <div className="max-w-xl px-6 py-6 my-auto lg:max-w-5xl lg:w-1/4 mx-auto">
      <p className="mt-2 text-black text-xl lg:text-2xl font-bold lg:text-center">
        ${price}
      </p>
      
      
    </div>

    <div className="max-w-xl px-6 py-6 my-auto lg:max-w-5xl lg:w-1/4 mx-auto">
        <Link>
          <button onClick={()=> handleDelete(uid)}>

        <MdDelete className='text-2xl lg:text-4xl text-[#419E66] lg:mx-auto'/>
          </button>
        </Link>
    </div>
      
  </div>
      }
    </div>
  )
}

export default CartItem