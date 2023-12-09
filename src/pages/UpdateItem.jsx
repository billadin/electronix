import React, { useContext, useEffect, useState } from 'react'
import { useLoaderData, useParams } from 'react-router-dom'
import { AuthContext } from '../provider/AuthProvider';
import { enqueueSnackbar } from 'notistack';
import { Rating } from '@smastrom/react-rating';

const UpdateItem = () => {
  const itemData = useLoaderData()
  const [isUpdated, setIsUpdated] = useState(false)
  const[ item, setItem] = useState(itemData[0])
  const {user, baseURL} = useContext(AuthContext);
  
  const {  brand_name, id } = useParams()

  const handleUpdateProduct = (e) => {
    e.preventDefault()
    const form = e.target;
    const name = form.name.value;
    const updatedBrand = form.brand.value;
    const category = form.category.value;
    const img = form.img.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const updatedProduct = {name, brand: updatedBrand, category, img, price, rating }

    const username = user.email;
    const userInfo = { username, updatedProduct, id: id, brand : brand_name }

    fetch(`${baseURL}/api/v1/brand/${brand_name}/${id}/update`, {
        method: 'PATCH',
        headers: {
          'content-type': 'application/json'
      },
      body: JSON.stringify(userInfo)
      })
      .then(res => res.json())
      .then(data => {
        // window.location.reload();
        if(data?.modifiedCount === 1 || data?.acknowledged === true){
          setIsUpdated(true);
          enqueueSnackbar(('Product updated successfully!'), {
            preventDuplicate: true,
            variant: 'success' ,
            anchorOrigin: {
                vertical: 'top',
                horizontal: 'right'
              },
        });
        }
      })
      .catch(e => {
        enqueueSnackbar(('Product updated failed, try again later!'), {
          preventDuplicate: true,
          variant: 'error' ,
          anchorOrigin: {
              vertical: 'top',
              horizontal: 'right'
            },
      });
      });
  }


  useEffect(()=> {
    if(isUpdated) {
      fetch(`${baseURL}/api/v1/brand/${brand_name}/${id}`)
      .then(res=> res.json())
      .then(data => {
        setItem(data[0])
      })
      .catch((e)=> console.log(e));
    }
    setIsUpdated(false)

  },[isUpdated])




  return (
    <div className="bg-gray-50 md:p-10 lg:p-16 p-4">
      <div>
        <section className="flex flex-col mx-auto overflow-hidden bg-white rounded-lg shadow-2xl  md:flex-row">
          <div className="md:flex md:items-center md:justify-around md:w-1/2  bg-[#419E66] p-4">
            <div>

              <img
                src={item?.img}
                className="mx-auto object-contain rounded-xl w-[95%] max-h-80"
              />
            </div>
            <div className="px-6 py-6 md:px-8 md:py-0">
              <h2 className="text-lg font-bold text-white md:text-gray-100">
                Product Information
              </h2>
              <p className="mt-2 text-sm text-white font-semibold">Name: {item?.name}</p>
              <p className="mt-2 text-sm text-white font-semibold">Brand: {item?.brand}</p>
              <p className="mt-2 text-sm text-white font-semibold">
                Product type: {item?.category}
              </p>
              <div className="flex gap-4 mt-2 text-sm text-white">
                <span className='font-semibold'>Rating</span>
                <Rating
                  style={{ width: 100 }}
                  value={item?.rating}
                  readOnly
                  className="inline-flex "
                />
              </div>
              <p className="mt-2 text-sm text-white font-semibold">Price: ${item?.price}</p>
            </div>
          </div>

          <div className="max-w-4xl p-6 mx-auto bg-white rounded-md md:rounded-r-md md:w-1/2">
            <h2 className="text-lg font-semibold text-gray-700 capitalize ">
              Update Product
            </h2>
            <form onSubmit={handleUpdateProduct}>
              <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                <div>
                  <label className="text-gray-700 " htmlFor="name">
                    Name
                  </label>
                  <input
                    required
                    name="name"
                    type="text"
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                  />
                </div>
                <div>
                  <label className="text-gray-700 " htmlFor="brand">
                    Brand
                  </label>
                  <input
                    required
                    name="brand"
                    type="brand"
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                  />
                </div>
                <div>
                  <label className="text-gray-700 " htmlFor="category">
                    Product Type
                  </label>
                  <input
                    required
                    name="category"
                    type="text"
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                  />
                </div>
                <div>
                  <label className="text-gray-700 " htmlFor="rating">
                    Rating
                  </label>
                  <input
                    required
                    name="rating"
                    type="text"
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                  />
                </div>
                <div>
                  <label className="text-gray-700 ">Image</label>
                  <input
                    required
                    type="text"
                    name="img"
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                  />
                </div>
                <div>
                  <label className="text-gray-700 ">Price</label>
                  <input
                    required
                    type="text"
                    name="price"
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                  />
                </div>
              </div>
              <div className="flex justify-center mt-6">
                <button
                  type="submit"
                  className="w-full py-3 px-6 text-center rounded-full transition bg-[#419E66] sm:w-max"
                >
                  <span className="block text-white font-semibold text-sm">
                    Submit
                  </span>
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
}

export default UpdateItem