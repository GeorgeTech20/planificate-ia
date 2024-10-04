import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import TripForm from './trip-form/index.jsx'
import { GoogleOAuthProvider } from '@react-oauth/google'
import TripDetails from './trip-detail/[tripid]/Index.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/trip-form",
    element: <TripForm />
  },
  {
    path: "/trip-detail/:tripid",
    element: <TripDetails />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_AUTH_CLIENT_ID}>
      <RouterProvider router={router} />
    </GoogleOAuthProvider>
  </StrictMode>,
)
