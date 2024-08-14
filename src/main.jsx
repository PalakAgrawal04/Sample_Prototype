import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import SignInPage from './auth/sign-in/index.jsx';
import Home from './home/index.jsx';
import Dashboard from './dashboard/index.jsx';
import { ClerkProvider } from '@clerk/clerk-react';
import Aboutus from './components/custom/Aboutus.jsx';
import Donate from './components/custom/Donate.jsx'; 
import Partners from './components/custom/Partners.jsx';
import Volunteer from './components/custom/Volunteer.jsx';
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

const router = createBrowserRouter([
  {
    element: <App />, // Default element when path is /
    children: 
    [
      
      {
        path: '/dashboard',
        element: <Dashboard />
      } ,
      {
        path: '/aboutus',
        element: <Aboutus/>
      }
      ,
      {
        path: '/donate',
        element: <Donate/>
      } 
      ,
      {
        path:'/partners',
        element:<Partners/>
      },
      {
        path:'volunteer',
        element:<Volunteer/>
      }
    ]
  }, 
  {
    path: '/',
    element: <Home />
  },
    {
        path: '/auth/sign-in',
        element: <SignInPage /> // Element rendered when path is /auth/sign-in
    }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
      <RouterProvider router={router} />
    </ClerkProvider>
  </StrictMode>
);
