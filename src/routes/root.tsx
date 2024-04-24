import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/home-page";
import AboutPage from "../pages/about-page";
import LoginPage from "../pages/login-page";
import DLayout from "../pages/dashboard/d-layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/dashboard",
    element: <DLayout />,
  },
]);

export default router;
