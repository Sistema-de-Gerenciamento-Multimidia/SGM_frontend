import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { InicialPage } from "./pages/inicialpage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <InicialPage />
  },
])

export function App() {
  return <RouterProvider router={router} />
}


