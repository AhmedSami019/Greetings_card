import { createBrowserRouter } from "react-router";
import Home from "./Pages/Home";
import GreetingPage from "./Pages/GreetingPage";

const router = createBrowserRouter([
    {
        path: '/',
        Component: Home,
        children : [
            {
                path: '/greetings',
                Component: GreetingPage
            }
        ]
    }
])

export default router