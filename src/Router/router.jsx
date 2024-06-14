import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Page/HomePage/Home";
import Banner from "../Components/HomeComponents/Banner";
import SignUp from "../Page/signUp";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children:
      [
        {
          path:"/",
          element:<Home></Home>
        },
        {
          path:"/login",
          element:<Banner></Banner>
        },
        {
          path:"/signUp",
          element:<SignUp></SignUp>
        }
      ]
    },
  ]);

export default router;