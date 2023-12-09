import { SnackbarProvider, enqueueSnackbar } from 'notistack'
import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../provider/AuthProvider';
import ItemCard from '../components/ItemCard';
import UserProductCard from '../components/UserProductCard';
import { nanoid } from 'nanoid';

const AddProduct = () => {
  const {user, baseURL} = useContext(AuthContext);
  const [userItems, setUserItems] = useState([])
  const [isAdded, setIsAdded] = useState(false);
  const handleAddProduct = (e) => {
    e.preventDefault()
    const form = e.target;
    const name = form.name.value;
    const brand = form.brand.value;
    const category = form.category.value;
    const img = form.img.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const description = form.description.value;
    const uid = form.uid.value;
    const addProducts = {name, brand, category, img, price, rating, description, uid }



      const username = user.email;
      
      const userInfo = { username, addProducts}

      fetch(`${baseURL}/api/v1/user/add-product`, {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
      },
      body: JSON.stringify(userInfo)
      })
      .then(res => res.json())
      .then(data => {
        enqueueSnackbar(('Product added successfully!'), {
          preventDuplicate: true,
          variant: 'success' ,
          anchorOrigin: {
              vertical: 'top',
              horizontal: 'right'
            },
          });
          form.reset()
          setIsAdded(true);
      })
      .catch(e => {
        console.log(e)
        enqueueSnackbar(('Failed to add product, try again later'), {
          preventDuplicate: true,
          variant: 'error' ,
          anchorOrigin: {
              vertical: 'top',
              horizontal: 'right'
            },
          });
          setIsAdded(false)
      });
}

useEffect(()=> {
  const username = user.email;
  if(user) {
    fetch(`${baseURL}/api/v1/user/products`, {
      method: 'POST',
            headers: {
              'content-type': 'application/json'
          },
          body: JSON.stringify({username})
    })
    .then(res => res.json())
    .then(data=> {
      setUserItems(data);
    })
    .catch(e => console.log(e));
  }

  if(isAdded) {
    fetch(`${baseURL}/api/v1/user/products`, {
      method: 'POST',
            headers: {
              'content-type': 'application/json'
          },
          body: JSON.stringify({username})
    })
    .then(res => res.json())
    .then(data=> {
      setUserItems(data);
    })
    .catch(e => console.log(e));
  }

}, [isAdded])



  return (
    <div className='bg-gray-50 py-16 w-[90%] mx-auto'>
      <div className="max-w-4xl p-4 md:p-6 mx-auto bg-white rounded-md md:rounded-r-md md:w-1/2 w-[95%]">
  <h2 className="text-lg font-semibold text-gray-700 capitalize ">
    Add Product
  </h2>
  <form onSubmit={handleAddProduct}>
    <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
      <div>
        <label className="text-gray-700 " htmlFor="name">
          Name
        </label>
        <input
        required
          id="name"
          type="text"
          className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
        />
      </div>
      <div>
        <label
          className="text-gray-700 "
          htmlFor="brand"
        >
          Brand
        </label>
        <input
         required
        name='brand'
          type="text"
          className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
        />
      </div>
      <div>
        <label className="text-gray-700 " htmlFor="category">
          Product Type
        </label>
        <input
         required
        name='category'
          type="text"
          className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
        />
      </div>
      <div>
        <label
          className="text-gray-700 "
          htmlFor="rating"
        >
          Rating
        </label>
        <input
         required
          type="text"
          name='rating'
          
          className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
        />
      </div>
      <div>
        <label
          className="text-gray-700 "
          htmlFor="img"
        >
          Image
        </label>
        <input
         required
          type="text"
          name='img'
          className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
        />
      </div>
      <div>
        <label
          className="text-gray-700 "
          htmlFor="price"
        >
          Price
        </label>
        <input
         required
          type="text"
          name='price'
          className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
        />
      </div>
      <div className=''>
        <label
          className="text-gray-700 "
          htmlFor="description"
        >
          Short Description
        </label>
        <input
         required
          type="text"
          name='description'
          className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
        />
      </div>
      <div className=''>
        <label
          className="text-gray-700 "
          htmlFor="uid"
        >
          Unique Identifier
        </label>
        <input
        required
          type="text"
          name='uid'
          className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
        />
      </div>
    </div>
    <div className="flex justify-center mt-6">
    <SnackbarProvider maxSnack={1}/>
    <button type="submit" title="Start buying" className="w-full py-3 px-6 text-center rounded-full transition bg-[#419E66]  active:bg-[#419E66] sm:w-max">
                            <span className="block text-white font-semibold text-sm">
                                Add
                            </span>
                        </button>
    </div>
  </form>
</div>
<div>
<h1 className='text-4xl font-medium my-12 text-center lg:text-left'>Your Products List</h1>
<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-[90%] mx-auto mt-16 gap-8 justify-center items-center'>
  {
    userItems.map((item)=> <UserProductCard key={nanoid(8)} item={item}/>)
  }
</div>
</div>
    </div>
  )
}

export default AddProduct