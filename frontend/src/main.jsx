import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import './pages/AdminRentCheckPage.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import RentPage from './pages/RentPage.jsx';
import AdminRentCheckPage from './pages/AdminRentCheckPage.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element:<App /> ,
  },
  {
    path:'/Rent',
    element:<RentPage/>
  },
  {
    path:'/Admin',
    element: <AdminRentCheckPage/>

  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
