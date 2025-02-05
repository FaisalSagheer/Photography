import './App.css'
import React from 'react'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Portfolio from './components/PortfolioPage/portfolio';
import Contact from './components/ContactPage/Contact';
import Pricing from './components/Pricing';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

function App() {
  const Router = createBrowserRouter([
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
    {
      path: "/contact",
      element: <Contact />
    }
  ])
  return (
    <>
      <RouterProvider router={Router} />
      <Navbar />
    </>
  )
}

export default App