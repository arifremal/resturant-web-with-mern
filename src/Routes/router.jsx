import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home";
import Menus from "../Pages/MenuPage/Menus";
import Order from "../Pages/Order/Order";
import Login from "../Pages/Login/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'menu',
          element:<Menus></Menus>
        },
        {
          path:'order/:category',
          element:<Order></Order>
        },{
          path:'login',
          element:<Login></Login>
        }
    ]
  },
]);

export default router;
