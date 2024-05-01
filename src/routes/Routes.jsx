import { createBrowserRouter } from "react-router-dom";
import Mainlayouts from "../layouts/Mainlayouts";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signin from "../pages/Signin";
const router = createBrowserRouter([
    {
        path: '/',
        element: <Mainlayouts />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/signin',
                element: <Signin />
            }
        ]
    }
])
export default router;