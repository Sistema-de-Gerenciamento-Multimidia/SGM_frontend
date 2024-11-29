import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import { InicialPageLogin } from "./pages/inicialpagelogin";
import { DashboardPage } from "./pages/dashboardpage";
import { PerfilPage } from "./pages/perfilpage";
import { PasswordRecuperation } from "./pages/password_recuperation";
import { InicialPageRegister } from "./pages/inicialpageregister";


const isAuthenticated = () => {
 
  return localStorage.getItem("authToken") !== null;
};

// Componente para proteger rotas
const ProtectedRoute = ({ element }: { element: JSX.Element }) => {
  return isAuthenticated() ? element : <Navigate to="/" replace />;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <InicialPageLogin />,
  },
  {
    path: "/register",
    element: <InicialPageRegister />,
  },
  {
    path: "/dashboard",
    element: <ProtectedRoute element={<DashboardPage />} />,
  },
  {
    path: "/perfil",
    element: <ProtectedRoute element={<PerfilPage />} />,
  },
  {
    path: "/password_recuperation",
    element: <ProtectedRoute element={<PasswordRecuperation />} />,
  },
]);

export function App() {
  return <RouterProvider router={router} />;
}
