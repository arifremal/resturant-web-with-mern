import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home";
import Menus from "../Pages/MenuPage/Menus";
import Order from "../Pages/Order/Order";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Login/Signup";
import Secret from "../Pages/Shared/shared component/secret";
import PrivateRoutes from "../Providers/PrivateRoutes";
import Dashboard from "../Admin Panel/Dashboard";
import Mycart from "../Admin Panel/Pages/Mycart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "menu",
        element: <Menus></Menus>,
      },
      {
        path: "order/:category",
        element: <Order></Order>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
      {
        path: "secret",
        element: (
          <PrivateRoutes>
            <Secret></Secret>
          </PrivateRoutes>
        ),
      },
    ],
  },
{
    path:'dashboard',
    element: <PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>,
    children:[
      {
        path:'mycart',
        element:<Mycart></Mycart>
      }
    ]
    
  }

]);

export default router;
