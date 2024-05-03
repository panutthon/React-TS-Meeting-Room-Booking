import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../pages/login-page";
import routeDashboard from "./dashboard";
import Successpage from "../pages/success-page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "success", //localhost:5173/dashboard/room
    element: <Successpage />,
  },
  ...routeDashboard,
]);

export default router;
