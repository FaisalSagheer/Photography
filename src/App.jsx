import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Portfolio from './components/PortfolioPage/portfolio';
import Contact from './components/ContactPage/Contact';
import Pricing from './components/Pricing';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';

const Layout = () => (
  <>
    <Navbar />
    <Outlet/> {/* This renders the matched child route */}
  </>
);

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Hero /> },
        { path: "/portfolio", element: <Portfolio /> },
        { path: "/pricing", element: <Pricing /> },
        { path: "/contact", element: <Contact /> }
      ]
    }
  ]);

  return <RouterProvider router={router} />;
}

export default App;
