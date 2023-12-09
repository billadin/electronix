import { createBrowserRouter } from "react-router-dom";
import Error from "../pages/Error";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AddProduct from "../pages/AddProduct";
import MyCart from "../pages/MyCart";
import Root from "../layout/Root";
import Brand from "../pages/Brand";
import BrandDetails from "../pages/BrandDetails";
import UpdateItem from "../pages/UpdateItem";
import PrivateRoute from "./PrivateRoute";
import AllProducts from "../pages/AllProducts";

const baseURL = `https://electronix-backend-3dvs7lvzd-mir-billadins-projects.vercel.app`;

const router =  createBrowserRouter([
    {
        path: '/',
        element: <Root/>,
        errorElement: <Error/>,
        children: [
            {
                path: '/',
                element: <Home/>,
            },
            {
                path: '/login',
                element: <Login/>
            },
            {
                path: '/register',
                element: <Register/>
            },
            {
                path: '/add-product',
                element: <PrivateRoute><AddProduct/></PrivateRoute>
            },
            {
                path: '/products',
                element: <AllProducts/>,
                loader: () =>fetch(`${baseURL}/api/v1/brand/products`)
            },
            {
                path: '/cart',
                element: <PrivateRoute><MyCart/></PrivateRoute>
            },
            {
                path: `/brand/:name`,
                element: <Brand/>,
                loader: ({params}) =>fetch(`${baseURL}/api/v1/brand/${params.name}`)
            },
            {
                path: 'brand/:name/:id',
                element: <PrivateRoute><BrandDetails/></PrivateRoute>,
                loader: ({params}) =>fetch(`${baseURL}/api/v1/brand/${params.name}/${params.id}`)
            },
            {
                path: 'brand/:brand_name/:id/update',
                element: <PrivateRoute><UpdateItem/></PrivateRoute>,
                loader: ({params}) =>fetch(`${baseURL}/api/v1/brand/${params.brand_name}/${params.id}`)
            }
        ]
    }
])


export default router;