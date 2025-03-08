import React from "react";
import MainLayout from "../components/Layout/MainLayout";
import { AppRouteProps, toAppRouter } from "./helper";
import databasesRoutes from "./databases.routes";
import historyRoutes from "./saveAndHistory.routes";
import ErrorPage from "../components/Error";

const Dashboard = React.lazy(() => import("../pages/Dashboard"));

/**
 * Define the main application routes.
 */
const routes: AppRouteProps[] = [
  {
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      ...databasesRoutes,
      ...historyRoutes,
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
];

/**
 * AppRouter component to convert the route configuration to a React Router structure.
 * @returns {JSX.Element} The React Router structure.
 */
const AppRouter: React.FC = () => toAppRouter(routes);

export default AppRouter;
