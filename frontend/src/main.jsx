import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
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
    path:'/Rent',
    element:<RentPage/>
  },
  {
    path: '/login',
    element: <Login/>
  },
  {
    path: '/signup',
    element: <Signup/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
