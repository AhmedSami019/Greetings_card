import { createBrowserRouter } from "react-router";
import Home from "./Pages/Home";
import GreetingPage from "./Pages/GreetingPage";
import Layout from "./Pages/Layout";
import Loading from "./Components/Loading";

const router = createBrowserRouter([
    {
        path: '/',
        Component: Layout,
        HydrateFallback: Loading,
        children : [
            {
                index : true,
                Component: Home
            },
            {
                path: 'greetings',
                Component: GreetingPage
            }
        ]
    }
])

export default router