import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import AddJob from "../Pages/AddJob/AddJob";
import MyPost from "../Pages/MyPost/MyPost";
import MyRequest from "../Pages/MyRequest/MyRequest";
import MyBids from "../Pages/MyBids/MyBids";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import JobDetails from "../Pages/Home/JobDetails";
import Update from "../Pages/Update/Update";
import PrivateRoute from "./PrivateRoute";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/addJob",
        element: <PrivateRoute>
          <AddJob></AddJob>
        </PrivateRoute>,
      },
      {
        path: "/post",
        element: <PrivateRoute>
          <MyPost></MyPost>
        </PrivateRoute>,
      },
      {
        path: "/bids",
        element: <PrivateRoute>
           <MyBids></MyBids>
        </PrivateRoute>,
      },
      {
        path: "/request",
        element: <PrivateRoute>
          <MyRequest></MyRequest>
        </PrivateRoute>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/details/:id",
        element: <PrivateRoute>
          <JobDetails></JobDetails>
        </PrivateRoute>,
        loader: ({ params }) =>
          fetch(`http://localhost:4000/jobs/${params.id}`),
      },
      {
        path: 'update/:id',
        element: <Update></Update>,
        loader: ({ params }) =>
          fetch(`http://localhost:4000/jobs/${params.id}`),
      }
    ],
  },
]);

export default Router;
