import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { InicialPage } from "./pages/inicialpage";
import { Home } from "./pages/home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <InicialPage />
  },
  {
    path: "/home",
    element: <Home />,
  },
])

export function App() {
  return <RouterProvider router={router} />
}


