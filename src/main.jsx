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
import AuthLayout from './components/AuthLayout';
import Login from './components/Login';
import Register from './components/Register';
import AuthProvider from './provider/AuthProvider';
import CardDetails from './components/CardDetails';
import Winter from './components/Winter';


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
    path: "/details/:_id",
    element: <CardDetails></CardDetails>,
    loader: () => fetch('../main.json'),
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
  {
    path: "auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "/auth/login",
        element: <Login></Login>
      },
      {
        path: "/auth/register",
        element: <Register></Register>
      },
      {
        path: "/auth/winter",
        element: <Winter></Winter>
      }
    ]
  },
  
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <AuthProvider>
        <RouterProvider router={router} />
     </AuthProvider>
  </StrictMode>,
)
