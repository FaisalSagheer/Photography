

import './App.css'
import React from 'react'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Portfolio from './components/PortfolioPage/portfolio'
// import Contact from './components/ContactPage/Contact'
import Pricing from './components/Pricing'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Hero />
    },
    {
      path: "/portfolio",
      element: <Portfolio />
    },
    {
      path: "/pricing",
      element: <Pricing />
    },
    // {
    //   path: "/contact",
    //   element: <Contact />
    // }
  ])
  return (
    <>
      <Navbar />
      <RouterProvider router={router} />
    </>
  )
}

export default App
