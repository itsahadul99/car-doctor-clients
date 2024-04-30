import { createBrowserRouter } from "react-router-dom";
import Mainlayouts from "../layouts/Mainlayouts";
import Home from "../pages/Home";
const router = createBrowserRouter([
    {
        path: '/',
        element: <Mainlayouts />,
        children: [
            {
                path: '/',
                element: <Home />
            }
        ]
    }
])
export default router;