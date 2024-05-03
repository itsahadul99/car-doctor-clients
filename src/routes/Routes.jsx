import { createBrowserRouter } from "react-router-dom";
import Mainlayouts from "../layouts/Mainlayouts";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signin from "../pages/Signin";
import PrivateRoute from "./PrivateRoute";
import ServiceDetails from "../pages/ServiceDetails";
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
            },
            {
                path: '/serviceDetails/:id',
                element: <PrivateRoute><ServiceDetails /></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
            }
        ]
    }
])
export default router;