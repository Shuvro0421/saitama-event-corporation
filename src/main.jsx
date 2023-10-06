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

const router = createBrowserRouter([
  {
    path: "/",
    errorElement : <ErrorElement></ErrorElement>,
    element: <Roots></Roots>,
    children : [
      {
        path : "/",
        element : <Home></Home>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
