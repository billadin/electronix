import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/router'
import '@smastrom/react-rating/style.css'
import AuthProvider from './provider/AuthProvider'
import { SnackbarProvider } from 'notistack'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SnackbarProvider>
    <AuthProvider>
    <RouterProvider router={router}/>
    </AuthProvider>
    </SnackbarProvider>
  </React.StrictMode>,
)
