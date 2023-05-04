import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom"

import './index.css'
import { Root } from './routes/root'
import { ErrorRoute } from './pages/error'

const router = createBrowserRouter([
  {
      path: "/",
      element: <Root/>,
      errorElement: <ErrorRoute/>,
      children: [
        {
            path: "/notes",
            element: <>Notes</>
        },
        {
            path: "/about",
            element: <>Acerca de</>
        }
      ]
  },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
