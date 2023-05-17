import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Page-Components/Home";

const router=createBrowserRouter([
    {
        path:'/',
        element: <App/>,
        children: [
            {
                path:'/',
                element: <Home></Home>
            }
        ]
    }
]);

export default router;