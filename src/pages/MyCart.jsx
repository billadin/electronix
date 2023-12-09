import React, { useContext, useEffect, useState } from 'react'
import CartItem from '../components/CartItem'
import { nanoid } from 'nanoid'
import { AuthContext } from '../provider/AuthProvider';
import Loading from '../components/Loading';
import { enqueueSnackbar } from 'notistack';
import { useNavigate } from 'react-router-dom';

const MyCart = () => {

  const [items, setItems] = useState([]);
  const [isDeleted, setIsDeleted] = useState(false)

  const {user, loading,  setLoading, baseURL} = useContext(AuthContext);
  const navigate = useNavigate()

  if(loading) {
    return <Loading/>
  }

  const handleDelete = (uid) => {
    const username = user.email;
    const userInfo = { username, uid}
    
    fetch(`${baseURL}/api/v1/user/cart`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json'
    },
    body: JSON.stringify(userInfo)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      enqueueSnackbar(('Product Deleted successfully!'), {
        preventDuplicate: true,
        variant: 'success' ,
        anchorOrigin: {
            vertical: 'top',
            horizontal: 'right'
          },
    });
    setIsDeleted(true);
    })
    .catch(e => {
      console.log(e);
      enqueueSnackbar(('Something wring happened!'), {
        preventDuplicate: true,
        variant: 'error' ,
        anchorOrigin: {
            vertical: 'top',
            horizontal: 'right'
          },
    });
    });
    }


  useEffect(()=>{
    setLoading(true);
    
    const userInfo = {
      username : user.email
    }
    
        fetch(`${baseURL}/api/v1/user/cart`, {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
      },
      body: JSON.stringify(userInfo)
      })
      .then(res => res.json())
      .then(data => setItems(data))
      .catch(e => console.log(e));


      if(isDeleted) {

        fetch(`${baseURL}/api/v1/user/cart`, {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(userInfo)
        })
        .then(res => res.json())
        .then(data => {
          console.log(data)
          setIsDeleted(false)
          setItems(data)
        })
        .catch(e => console.log(e));
      }
      setLoading(false)
    }, [isDeleted])


  return (
    <div className='mx-auto w-[90%]'>
      <h1 className='text-4xl font-medium py-16'>My cart items</h1>
      {
        
        items.length > 0 &&
        items.map((item)=> {
          if(item=== null) {
            return;
          }
        return <CartItem key={nanoid()} item={item} handleDelete={handleDelete}/>
        })
       || 
       <p className='text-xl font-semibold'>Cart is empty</p>
    
      }
    </div>
  )
}

export default MyCart