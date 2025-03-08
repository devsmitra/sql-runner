import React from "react";
import { AppRouteProps } from "./helper";

// Lazy load the History and Worksheet components
const History = React.lazy(() => import("../pages/SaveAndHistory"));
const Worksheet = React.lazy(() => import("../components/Worksheet"));

// Define the paths for history and save routes
const paths = ["history", "save"] as const;

/**
 * Generate routes for history and save paths.
 * @returns {AppRouteProps[]} The generated routes.
 */
const generateHistoryRoutes = (): AppRouteProps[] => {
  return paths.map((type) => ({
    path: `/${type}`,
    element: <History type={type} />,
    children: [
      {
        index: true,
        element: <Worksheet parent={type} />,
      },
      {
        path: `/${type}/:id`,
        element: <Worksheet parent={type} />,
      },
    ],
  }));
};

// Export the generated routes
const historyRoutes: AppRouteProps[] = generateHistoryRoutes();
export default historyRoutes;
