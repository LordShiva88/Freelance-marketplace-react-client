import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import AddJob from "../Pages/AddJob/AddJob";
import MyPost from "../Pages/MyPost/MyPost";
import MyRequest from "../Pages/MyRequest/MyRequest";
import MyBids from "../Pages/MyBids/MyBids";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";




const Router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/addJob',
        element: <AddJob></AddJob>
      },
      {
        path: '/post',
        element: <MyPost></MyPost>
      },
      {
        path: '/bids',
        element: <MyBids></MyBids>
      },
      {
        path: '/request',
        element: <MyRequest></MyRequest>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
    ]
  }
])

export default Router;