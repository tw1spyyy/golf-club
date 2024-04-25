import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Landing } from "./pages/Landing";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Lessons } from "./pages/Lessons";

const router = createBrowserRouter([
  {
    path: "/",
    element:  <Landing />,
  },
  {
    path: '/lessons',
    element: <Lessons />
  }
]);
  
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
        <RouterProvider router={router} />
  </React.StrictMode>
);

