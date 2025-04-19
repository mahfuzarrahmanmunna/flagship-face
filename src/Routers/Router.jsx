import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home/Home";
import MainLayouts from "../Layouts/MainLayouts/MainLayouts";
import About from "../Pages/About/About";
import ErrorPage from "../Pages/Error/ErrorPage";
import PhoneDetails from "../Pages/PhoneDetails/PhoneDetails";
import Favorite from "../Pages/Favorite/Favorite";

export const route = createBrowserRouter([
    {
        path: '/',
        Component: MainLayouts,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                Component: Home,
                hydrateFallbackElement: <p>Loading data, please wait....</p>,
                loader: () => fetch('../phones.json')
            },
            {
                path: 'about',
                Component: About,
            },
            {
                path: 'favorites',
                Component: Favorite,
            },
            {
                path: 'phone-details/:id',
                Component: PhoneDetails,
                hydrateFallbackElement: <p>Loading ....</p>,
                loader: () => fetch('../phones.json')
            },
            {
                path: 'cart',
                element: <p>this is cart</p>
            }
        ]
    }
])