import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Root from './Root/Root.jsx';
import Login from './pages/Login/Login.jsx';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import Register from './pages/Register/Register.jsx';

const queryClient = new QueryClient()

const router=createBrowserRouter([
  {
    path:'/',
    Component:Root,
    children:[
      {
        path:'/',
        Component:Login,
      },
      {
        path:'/register',
        Component:Register,
      }
    ]

  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider  client={queryClient}>
    <RouterProvider router={router}>
    </RouterProvider>
    </QueryClientProvider>
  </StrictMode>,
)
