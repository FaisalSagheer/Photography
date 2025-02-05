import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Portfolio from './components/PortfolioPage/portfolio';
import Contact from './components/ContactPage/Contact';
import Pricing from './components/Pricing';
import { RouterProvider, Outlet, createHashRouter } from 'react-router-dom';

const Layout = () => (
  <>
    <Navbar />
    <Outlet />
  </>
);

function App() {
  const router = createHashRouter(
    [
      {
        path: "/",
        element: <Layout />,
        children: [
          { path: "/", element: <Hero /> },
          { path: "/portfolio", element: <Portfolio /> },
          { path: "/pricing", element: <Pricing /> },
          { path: "/contact", element: <Contact /> },
        ],
      },
    ],
    // { basename: '/Photography' }
  );

  return <RouterProvider router={router} />;
}

export default App;
