import React, { useContext, useEffect, useState } from 'react'
import { nanoid } from 'nanoid';
import ProductCard from '../components/ProductCard';
import { AuthContext } from '../provider/AuthProvider';
import { useLoaderData } from 'react-router-dom';

const AllProducts = () => {
    const items = useLoaderData()
    const {baseURL} = useContext(AuthContext);
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(0)
    const [itemsPerPage, setItemsPerPage] = useState(10)
    const [count, setCount] = useState(0)
    const numberOfPages = Math.ceil( count / itemsPerPage)

    const pages  = [...Array(numberOfPages).keys()]

    const handlePrevPage = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
    }

    const handleNextPage = () => {
        if (currentPage < pages.length - 1) {
            setCurrentPage(currentPage + 1);
        }
    }

    const handleItemPerPage = (e) => {
        const value = parseInt(e.target.value);
        setItemsPerPage(value)
        setCurrentPage(0)
        console.log(value)
    }


    useEffect(()=> {
        fetch(`${baseURL}/api/v1/products`)
        .then(res=> res.json())
        .then(data => {
            setCount(data.count)
        })
        .catch(e=> console.log(e));
    },[])


    useEffect(()=> {
        console.log(currentPage, itemsPerPage)
        fetch(`${baseURL}/api/v1/products?page=${currentPage}&size=${itemsPerPage}`)
        .then(res=> res.json())
        .then(data => {
            setProducts(data.products)
        })
        .catch(e=> console.log(e));
    },[currentPage, itemsPerPage])


  return (
    <div className='w-[90%] mx-auto py-16'>
        <div className='flex justify-between'>
        <h1 className='w-1/2 text-4xl font-medium text-center md:text-left'><span className='text-[#419E66]'>{count}</span> Products Found </h1>
        <div>
            <button
            onClick={handlePrevPage}
            className='px-2 py-1 bg-gray-200 mr-1 rounded-lg'>Prev</button>
            {
                pages.map((page)=> <button
                onClick={()=> setCurrentPage(page)}
                className={currentPage === page ? 'px-2 py-1 bg-[#419E66] mr-1 rounded-lg' : 'px-2 py-1 bg-gray-200 mr-1 rounded-lg'}
                key={nanoid(8)}>{page}</button> )
            }
            <button
            onClick={handleNextPage}
            className='px-2 py-1 bg-gray-200 mr-1 rounded-lg'>Next</button>
            <select className='px-2 py-1 ml-1 rounded-lg border-0 bg-[#419E66] text-white'
            value={itemsPerPage}
            onChange={handleItemPerPage}>
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="20">20</option>
            </select>
        </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 py-10 mx-auto">
            {
                products.map((product => <ProductCard product={product} key={nanoid(10)}/>))
            }
        </div>
    </div>
  )
}

export default AllProducts