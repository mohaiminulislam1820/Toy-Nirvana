import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Page-Components/Home/Home";
import Blogs from "../Page-Components/Other-pages/Blogs"
import AuthProvider from "../Auth Components/AuthProvider";
import Login from "../Page-Components/Login-register/Login";
import Register from "../Page-Components/Login-register/Register";
import Error404 from "../Page-Components/Error/Error404";
import PrivateRoute from "./PrivateRoute";
import MyToys from "../Page-Components/PrivateRoutedComponents/MyToys";
import AddAToy from "../Page-Components/PrivateRoutedComponents/AddAToy";
import AllToys from "../Page-Components/Other-pages/AllToys";
import ToyDetails from "../Page-Components/PrivateRoutedComponents/ToyDetails";
import UpdateToy from "../Page-Components/PrivateRoutedComponents/UpdateToy";

const router = createBrowserRouter([
    {
        path: '/',
        element: <AuthProvider><App /></AuthProvider>,
        errorElement: <Error404></Error404>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/my-toys',
                element: <PrivateRoute>
                    <MyToys></MyToys>
                </PrivateRoute>
            },
            {
                path: '/add-a-toy',
                element: <PrivateRoute>
                    <AddAToy></AddAToy>
                </PrivateRoute>
            },
            {
                path: '/all-toys',
                element: <AllToys />
            },
            {
                path: 'toy/:id',
                element: <PrivateRoute>
                    <ToyDetails></ToyDetails>
                </PrivateRoute>
            },
            {
                path: 'update-toy/:id',
                element:
                    <PrivateRoute>
                        <UpdateToy />
                    </PrivateRoute>
            }
        ]
    },
    {
        path: '*',
        element: <Error404></Error404>
    }
]);

export default router;