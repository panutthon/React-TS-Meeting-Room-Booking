import { RouteObject } from "react-router-dom";
import DLayout from "../pages/dashboard/d-layout";
import DHome from "../pages/dashboard/d-home";
import DRoom from "../pages/dashboard/d-room";


const routeDashboard: RouteObject[] = [
  {
    path: "/dashboard",
    element: <DLayout />,
    children: [
      {
        path: "", //localhost:5173/dashboard
        element: <DHome />,
      },
      {
        path: "room", //localhost:5173/dashboard/room
        element: <DRoom />,
      },
    ],
  },
];

export default routeDashboard;
