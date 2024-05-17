import { createBrowserRouter } from "react-router-dom";
import Root from "../Component/Root/Root";
import Home from "../Component/Home/Home";
import Cart from "../Component/Cart/Cart";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
          path:"/cart",
          element:<Cart></Cart>
        }
    ]
  },
]);

export default router;
