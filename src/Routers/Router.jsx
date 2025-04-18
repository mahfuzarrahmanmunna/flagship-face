import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home/Home";
import MainLayouts from "../Layouts/MainLayouts/MainLayouts";
import About from "../Pages/About/About";
import ErrorPage from "../Pages/Error/ErrorPage";
import Favourite from "../Pages/Favourite/Favourite";
import PhoneDetails from "../Pages/PhoneDetails/PhoneDetails";

export const route = createBrowserRouter([
    {
        path: '/',
        Component: MainLayouts,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                Component: Home,
                loader: () => fetch('phones.json')
            },
            {
                path: 'about',
                Component: About,
            },
            {
                path: 'favorites',
                Component: Favourite,
            },
            {
                path: 'phone-details',
                Component: PhoneDetails
            }
        ]
    }
])