import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home/Home";

export const route = createBrowserRouter([
    {
        path: '/',
        Component: Home
    }
])