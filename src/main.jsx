import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root.jsx';
import ErrorPage from './Components/Error/ErrorPage.jsx';
import Home from './Components/Home/Home.jsx';
import ListedBooks from './Components/ListedBooks/ListedBooks.jsx';
import PagesToRead from './Components/PagesToRead/PagesToRead.jsx';
import BookDetials from './Components/BookDetails/BookDetials.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path:"books/:bookId",
        element:<BookDetials></BookDetials>,
        loader: ()=> fetch('./../public/booksData.json'),
      },
      {
        path: "/listed-books",
        element:<ListedBooks></ListedBooks>,
      },
      {
        path: "/pages-to-read",
        element:<PagesToRead></PagesToRead>,
      },
    ],
    
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
