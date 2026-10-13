import App from "./App";
import { createBrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import Users from "./pages/Users";
import Tasks from "./components/Tasks";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        children: [
         {
              index: true,
            element: <Tasks></Tasks>
         },
         {
               path: "users",
            element: <Users></Users>
         },
        ]
    },
    {
        path: "/login",
        element: <Login></Login>
    }
])

export default routes;