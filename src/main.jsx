import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root.jsx';
import Home from './Components/Home/Home.jsx';
import List from './Components/List/List.jsx';
import Read from './Components/Read/Read.jsx';
import BookDetails from './Components/BookDetails/BookDetails.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[

      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/Listed',
        element: <List></List>
      },
      {
        path:'/Read',
        element:<Read></Read>
      },
      {
        path:'/Book/:id',
        element:<BookDetails></BookDetails>,
        loader: ()=>fetch('../../../books.json')
      }





      
    ]

  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
