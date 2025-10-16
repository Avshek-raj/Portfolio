import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import {Home} from './components/Home.jsx'
import { AppLayout } from './layout/AppLayout.jsx'
import { Contact } from './components/Contact.jsx'
import { Projects } from './components/Projects.jsx'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      Component: AppLayout,
      children: [
        {
          path:"/",
          Component: Home
        },
        {
          path:"/Contact",
          Component: Contact
        },
        {
          path:"/Projects",
          Component: Projects
        }
      ]
    } 
  ])
  return (
      <RouterProvider router={router}/>
  )
}

export default App
