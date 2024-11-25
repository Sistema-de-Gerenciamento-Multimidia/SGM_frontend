import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { InicialPage } from "./pages/inicialpage";
import { DashboardPage } from "./pages/dashboardpage";
import { PerfilPage } from "./pages/perfilpage"
import { PasswordRecuperation } from "./pages/password_recuperation";

const router = createBrowserRouter([
  {
    path: "/",
    element: <InicialPage />
  },
  {
    path: "/dashboard",
    element: <DashboardPage />,
  },
  {
    path: "/perfil",
    element: <PerfilPage />
  },
  {
    path: "/password_recuperation",
    element: <PasswordRecuperation />
  }
])

export function App() {
  return <RouterProvider router={router} />
}


