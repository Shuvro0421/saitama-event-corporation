import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import Roots from './components/Roots';
import ErrorElement from './components/ErrorElement';
import Home from './components/Home';
import AuthProvider from './components/AuthProvider';
import Login from './components/Login';
import Register from './components/Register';
import Services from './components/Services';
import ServiceDetails from './components/ServiceDetails';
import HappyCustomer from './components/HappyCustomer';
import Contribution from './components/Contribution';
// import Footer from './components/Footer';

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorElement></ErrorElement>,
    element: <Roots></Roots>,
    children: [
      {
        path: "/",

        element: <Home></Home>
      },
      {
        path : "/login",
        element: <Login></Login>
      },
      {
        path : "/register",
        element : <Register></Register>
      },
      {
        path : "/services",
        element : <Services></Services>,
      },
      {
        path : "/details/:id",
        element : <ServiceDetails></ServiceDetails>,
        loader : () => fetch('/corporate.json'),
      },
      {
        path : "/customers",
        element : <HappyCustomer></HappyCustomer>
      },
      {
        path : "/contribution",
        element : <Contribution></Contribution>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
