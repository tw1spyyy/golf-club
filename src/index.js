import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Landing } from "./pages/Landing";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Lessons } from "./pages/Lessons";
import { Rental } from "./pages/Rental";
import { Dining } from "./pages/Dining";
import { Events } from "./pages/Events";
import { Shop } from "./pages/Shop";

const router = createBrowserRouter([
  {
    path: "/",
    element:  <Landing />,
  },
  {
    path: '/lessons',
    element: <Lessons />
  },
  {
    path: '/rental',
    element: <Rental />
  },
  {
    path: '/dining',
    element: <Dining />
  },
  {
    path: '/events',
    element: <Events />
  },
  {
    path: '/shop',
    element: <Shop />
  },
]);
  
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
        <RouterProvider router={router} />
  </React.StrictMode>
);

