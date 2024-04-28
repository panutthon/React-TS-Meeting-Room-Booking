import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/home-page";
import AboutPage from "../pages/about-page";
import LoginPage from "../pages/login-page";
import routeDashboard from "./dashboard";
import SignupPage from "../pages/signup-page";

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
    path: "/signup",
    element: <SignupPage />,
  },
  ...routeDashboard,
]);

export default router;
