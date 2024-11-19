import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home';
import Error from './components/Error';
import Support from './components/Support';
import Pages from './components/Pages';
import Blogs from './components/Blogs';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    loader: () => fetch('../main.json'),
    children: [
      {
       
      }
    ]
  },
  {
    path: "/support",
    element: <Support></Support>
  },
  {
    path: "/pages",
    element: <Pages></Pages>
  },
  {
    path: "/blogs",
    element: <Blogs></Blogs>
  },
  {
    path: "*",
    element: <Error></Error>,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
