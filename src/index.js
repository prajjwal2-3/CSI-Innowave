import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { createBrowserRouter,RouterProvider } from "react-router-dom";



import { appRouter } from './Components/App';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <RouterProvider router={appRouter}/>
  
);

