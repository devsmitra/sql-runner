import React, { JSX } from "react";
import { Route, BrowserRouter, Routes } from "react-router";

// Define the props for the AppRoute component
export type AppRouteProps = {
  path?: string;
  element?: React.ReactNode;
  children?: AppRouteProps[];
  index?: boolean;
};

/**
 * Create routes recursively from the given route configuration.
 * @param {AppRouteProps[]} routes - The route configuration.
 * @returns {JSX.Element[]} The created routes.
 */
const createRoutes = (routes: AppRouteProps[]): JSX.Element[] => {
  return routes.map(({ children, ...route }: AppRouteProps, i: number) => {
    if (route.index) {
      return <Route key={`${route.path}-${i}`} {...route} />;
    }

    return (
      <Route {...(route as object)} key={`${route.path}-${i}`}>
        {children ? createRoutes(children as AppRouteProps[]) : null}
      </Route>
    );
  });
};

/**
 * Convert the given route configuration to a React Router structure. It'll help to keep the routes configuration clean, readable and independent from router version changes. Later, we can easily switch to a different router library if needed from a single place.
 * @param {AppRouteProps[]} routes - The route configuration.
 * @returns {JSX.Element} The React Router structure.
 */
export function toAppRouter(routes: AppRouteProps[]): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>{createRoutes(routes)}</Routes>
    </BrowserRouter>
  );
}
