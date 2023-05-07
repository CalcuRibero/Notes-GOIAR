import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom"

import './index.css'
import { AddNotes } from './pages/Notes/AddNotes'
import { ErrorRoute } from './pages/error'
import { Notes } from './pages/Notes/Notes'
import { Root } from './routes/root'

const router = createBrowserRouter([
  {
      path: "/",
      element: <Root/>,
      errorElement: <ErrorRoute/>,
      children: [
        {
            path: "/notes",
            element: <Notes/>
        },
        {
            path: "/about",
            element: <>Acerca de</>
        },
        {
          path: "/create-note",
          element: <AddNotes />
        }
      ]
  },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
