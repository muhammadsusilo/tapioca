import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import "./index.css";
import "./style.css";
import NavbarPage from "./Element/Navbar"
const router = createBrowserRouter([
  {
    path: "/",
    element: <NavbarPage />
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
