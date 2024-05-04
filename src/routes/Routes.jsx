import { createBrowserRouter } from "react-router-dom";
import Mainlayouts from "../layouts/Mainlayouts";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signin from "../pages/Signin";
import PrivateRoute from "./PrivateRoute";
import ServiceDetails from "../pages/ServiceDetails";
import Checkout from "../pages/Checkout";
import ErrorPage from "../pages/ErrorPage";
import BookingList from "../pages/BookingList";
const router = createBrowserRouter([
    {
        path: '/',
        errorElement: <ErrorPage />,
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
                loader: ({params}) => fetch(`${import.meta.env.VITE_API_URL}/${params.id}`)
            }, 
            {
                path: '/checkout/:id',
                element: <Checkout />,
                loader: ({params}) => fetch(`${import.meta.env.VITE_API_URL}/services/${params.id}`)
            },
            {
                path: '/booking',
                element: <PrivateRoute><BookingList /></PrivateRoute>,

            }
        ]
    }
])
export default router;