import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Page-Components/Home/Home";
import Blogs from "../Page-Components/Other-pages/Blogs"
import AuthProvider from "../Auth Components/AuthProvider";
import Login from "../Page-Components/Login-register/Login";
import Register from "../Page-Components/Login-register/Register";
import Error404 from "../Page-Components/Error/Error404";

const router=createBrowserRouter([
    {
        path:'/',
        element: <AuthProvider><App/></AuthProvider>,
        errorElement: <Error404></Error404> ,
        children: [
            {
                path:'/',
                element: <Home></Home>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path:'/login',
                element: <Login></Login>
            },
            {
                path:'/register',
                element: <Register></Register>
            }
        ]
    },
    {
        path:'*',
        element: <Error404></Error404>
    }
]);

export default router;