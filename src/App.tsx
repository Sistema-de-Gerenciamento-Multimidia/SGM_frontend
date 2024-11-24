import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { InicialPage } from "./pages/inicialpage";
import { DashboardPage } from "./pages/dashboardpage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <InicialPage />
  },
  {
    path: "/dashboard",
    element: <DashboardPage />,
  },
])

export function App() {
  return <RouterProvider router={router} />
}


