import './App.css'
import React from 'react'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Portfolio from './components/PortfolioPage/portfolio';
import Contact from './components/ContactPage/Contact';
import Pricing from './components/Pricing';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  // const Router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <Hero />
  //   },
  //   {
  //     path: "/portfolio",
  //     element: <Portfolio />
  //   },
  //   {
  //     path: "/pricing",
  //     element: <Pricing />
  //   },
  //   {
  //     path: "/contact",
  //     element: <Contact />
  //   }
  // ])
  return (
    <>
      {/* <RouterProvider router={Router} /> */}
      <BrowserRouter basename='/Photography'>
      <Navbar />
      <Routes>
      <Route path='/' element={<Hero />}/>
      <Route path='/portfolio' element={<Portfolio />}/>
      <Route path='/pricing' element={<Pricing />}/>
      <Route path='/contact' element={<Contact />}/>

      </Routes>
      </BrowserRouter>

    </>
  )
}

export default App