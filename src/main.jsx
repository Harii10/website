import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter,createRoutesFromElements,Route,RouterProvider} from 'react-router-dom'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Front from './components/Front.jsx'



const router = createBrowserRouter([
  {
    path: '/website/',
    element: <Front/>
  },
  {
    path: '/website//',
    element : <App/>,
    children: [{
      path: '/website/home',
      element: <Home/>
    },
    {
      path: '/website/about',
      element: <About/>
    }
      
    ]
  },

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
