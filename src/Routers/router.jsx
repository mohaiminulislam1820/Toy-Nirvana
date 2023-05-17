import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Page-Components/Home/Home";
import Blog from "../Page-Components/Other-pages/Blog"

const router=createBrowserRouter([
    {
        path:'/',
        element: <App/>,
        children: [
            {
                path:'/',
                element: <Home></Home>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            }
        ]
    }
]);

export default router;