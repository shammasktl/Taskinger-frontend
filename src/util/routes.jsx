import { createBrowserRouter, Navigate } from "react-router-dom"
import Dashboard from "../pages/Dashboard"
import Sidebar from "../components/templates/Sidebar/Sidebar.jsx"
import Analytics from "../pages/Analytics"
import Settings from "../pages/Settings"

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <Sidebar />,
        children: [
            {
                index: true,
                element: <Navigate to='/dashboard' replace />,
            },
            {
                path: "dashboard",
                element: <Dashboard />,
            },
            {
                path: "analytics",
                element: <Analytics />,
            }
        ]
    },
    {
        path: 'settings',
        element: <Settings />,
    }
])