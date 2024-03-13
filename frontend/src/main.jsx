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
import Login from './Components/LoginPage.jsx';
import Signup from './Components/SignupPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element:<App /> ,
  },
  {
    path:'/:carid',
    element:<RentPage/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
