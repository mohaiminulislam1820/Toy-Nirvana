import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Page-Components/Home/Home";
import Blog from "../Page-Components/Other-pages/Blog"
import AuthProvider from "../Auth Components/AuthProvider";

const router=createBrowserRouter([
    {
        path:'/',
        element: <AuthProvider><App/></AuthProvider>,
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