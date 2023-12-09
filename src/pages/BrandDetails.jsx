import { Rating } from '@smastrom/react-rating';
import React, { useContext, useEffect, useState } from 'react';
import { SnackbarProvider, enqueueSnackbar } from 'notistack';
import { useLoaderData, useParams } from 'react-router-dom';
import Description from '../components/Description';
import { AuthContext } from '../provider/AuthProvider';
import { nanoid } from 'nanoid';

const BrandDetails = () => {

  const {user, baseURL} = useContext(AuthContext);
  const productDetails = useLoaderData()
  const { name: brand_name } = useParams()
  const { description, id, img, name, price, rating, images } = productDetails[0];


  const getUserInfo =  () => {
    console.log(productDetails[0]);
    const { _id, ...products } =  productDetails[0];
    products.uid = nanoid(10);
    const username = user.email;
     const userInfo =  { 
      username: username,
       cart: products
    }
    return userInfo;
  }


    const handleAddToCart = async () => {


      const userInfo = await getUserInfo()
      console.log(userInfo);
      fetch(`${baseURL}/api/v1/user`, {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
      },
      body: JSON.stringify(userInfo)
      })
      .then(res => res.json())
      .then(data => {
        enqueueSnackbar(('Item added to cart!'), {
          preventDuplicate: true,
          variant: 'success' ,
          anchorOrigin: {
              vertical: 'top',
              horizontal: 'right'
            },
      });
      })
      .catch(e =>{
        enqueueSnackbar(('Something wrong happened!'), {
          preventDuplicate: true,
          variant: 'error' ,
          anchorOrigin: {
              vertical: 'top',
              horizontal: 'right'
            },
      });
      });


        
    }



  return (
    <div className='w-[90%] mx-auto my-16'>

        {/* Product details section */}
        <section className="text-gray-600 body-font overflow-hidden">
  <div className="container px-5 py-12 mx-auto">
    <div className="mx-auto flex flex-wrap lg:items-center">
      <img

        className="lg:w-1/2 w-full lg:h-auto h-64 object-contain object-center rounded"
        src={images[0] || images[1]}
      />
      <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
        <h2 className="text-sm title-font text-gray-500 tracking-widest">
          BRAND NAME: {brand_name}
        </h2>
        <h2 className="text-sm title-font text-gray-500 tracking-widest">
          Condition: New
        </h2>
        <h2 className="text-sm title-font text-gray-500 tracking-widest">
          Stock: 45 Items
        </h2>
        <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
          {name}
        </h1>
        <div className="flex mb-4">
          <span className="flex items-center">
          <Rating style={{ width: 100 }} value={rating} readOnly />
            {/* <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/> */}
            <span className="text-gray-600 ml-3">4 Reviews</span>
          </span>
        </div>
        <p className="leading-relaxed">
         {description}
        </p>
        <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
          <div className="flex">
            <span className="mr-3">Color</span>
            <button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none" />
            <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none" />
            <button className="border-2 border-gray-300 ml-1 bg-indigo-500 rounded-full w-6 h-6 focus:outline-none" />
          </div>
          
        </div>
        <div className="flex flex-col gap-4">
          <span className="title-font font-medium text-2xl text-gray-900">
            ${price}
          </span>
          <SnackbarProvider maxSnack={3}/>
          <button onClick={handleAddToCart} className="flex mr-auto text-white bg-[#419E66] border-0 py-2 px-6 focus:outline-none hover:text-[#419E66] hover:bg-white rounded">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  </div>
</section>
{/* Product details section end */}

{/* Description section */}
<section>
<div className=" flex flex-col items-center px-5 py-8  sm:px-6 lg:px-8">
    <div className="flex flex-col w-full  text-left">
      <div className="w-4/5">
        <h2 className='text-3xl font-semibold mb-6'>Description</h2>
        <p className='mb-6'>{description}</p>
        <Description productDetails={productDetails}/>
      </div>
    </div>
  </div>
</section>
{/* Description section end */}

    </div>
  )
}

export default BrandDetails