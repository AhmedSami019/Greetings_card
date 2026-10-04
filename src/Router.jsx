import { createBrowserRouter } from "react-router";
import Home from "./Pages/Home";
import GreetingPage from "./Pages/GreetingPage";
import Layout from "./Pages/Layout";

const router = createBrowserRouter([
    {
        path: '/',
        Component: Layout,
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