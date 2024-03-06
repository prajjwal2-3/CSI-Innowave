import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import AboutPage from './components/About/AboutPage';
import Team from './components/Team/Team';
import Gallery from './components/Gallery/Gallery';
import { appRouter } from './components/App';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <RouterProvider router={appRouter}/>
  
);

