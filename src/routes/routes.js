import { createBrowserRouter } from "react-router-dom";
import AddBlog from "../pages/Blogs/AddBlog";
import ManageBlogs from "../pages/Blogs/ManageBlogs";
import Home from "../pages/Home/Home";
import Main from "../pages/Layout/Main/Main";

const routes = createBrowserRouter([
{
  path: "/",
  element: <Main/>,
  children : [
    
    {
      path: "/",
      element: <Home/>
    },
    {
      path: "/home",
      element: <Home/>
    },
    {
      path: "/post-blog",
      element: <AddBlog/>
    },
    {
      path: "/manage-blogs",
      element: <ManageBlogs/>
    },
  ]
}
  ]);

export default routes;