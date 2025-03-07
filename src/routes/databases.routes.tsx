import { AppRouteProps } from "./helper";
import React from "react";

const Databases = React.lazy(() => import("../pages/Databases"));
const Worksheet = React.lazy(() => import("../pages/Worksheet"));

const databasesRoutes: AppRouteProps[] = [
  {
    path: "/databases",
    element: <Databases />,
    children: [
      {
        index: true,
        element: <Worksheet parent="databases" />,
      },
      {
        path: "/databases/:id",
        element: <Worksheet parent="databases" />,
      },
    ],
  },
];
export default databasesRoutes;
