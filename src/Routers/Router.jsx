import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home/Home";
import MainLayouts from "../Layouts/MainLayouts/MainLayouts";
import About from "../Pages/About/About";
import ErrorPage from "../Pages/Error/ErrorPage";
import Favourite from "../Pages/Favourite/Favourite";

export const route = createBrowserRouter([
    {
        path: '/',
        Component: MainLayouts,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                Component: Home,
            },
            {
                path: 'about',
                Component: About,
            },
            {
                path: 'favorites',
                Component: Favourite,
            }
        ]
    }
])