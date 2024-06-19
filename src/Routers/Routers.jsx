import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../Pages/Home/Home";
import Login from "../Auth/Login/Login";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,

      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/login",
          element: <Login/>
        }
      ],
    },
    
  ]);

  export default router;