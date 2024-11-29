import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { InicialPageLogin } from "./pages/inicialpagelogin";
import { DashboardPage } from "./pages/dashboardpage";
import { PerfilPage } from "./pages/perfilpage"
import { PasswordRecuperation } from "./pages/password_recuperation";
import { InicialPageRegister } from "./pages/inicialpageregister";

const router = createBrowserRouter([
  {
    path: "/",
    element: <InicialPageLogin />
  },
  {
    path: "/register",
    element: <InicialPageRegister />
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


