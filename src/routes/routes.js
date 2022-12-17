import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";

const routes = createBrowserRouter([
    {
      path: "/",
      element: <Home/>
    },
    {
      path: "/home",
      element: <Home/>
    },
  ]);

export default routes;