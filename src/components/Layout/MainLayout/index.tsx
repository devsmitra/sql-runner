import { NavLink, Outlet } from "react-router";
import mainMenu from "./config";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorPage } from "../../Error";
import React from "react";
import { PageLoader } from "../../Loaders";

/**
 * MainLayout component to define the main layout of the application.
 * It includes a navigation menu and an outlet for nested routes.
 * @returns {JSX.Element} The rendered component.
 */
const MainLayout = () => {
  return (
    <main className="flex min-h-screen">
      {/* Navigation menu */}
      <ul className="menu bg-base-200 sticky top-0 z-2 p-2">
        {mainMenu.map((item) => (
          <li key={item.label}>
            <NavLink
              data-tip={item.label}
              to={item.link}
              className={({ isActive }) =>
                `tooltip tooltip-right mt-2 ${isActive ? "bg-black" : ""}`
              }
            >
              <img
                src={item.icon}
                alt={item.label}
                className="size-6"
                style={{
                  filter: "invert(0.9)",
                }}
              />
            </NavLink>
          </li>
        ))}
      </ul>
      {/* Main content area */}
      <section className="flex-1">
        <ErrorBoundary fallback={<ErrorPage />}>
          <React.Suspense fallback={<PageLoader />}>
            <Outlet />
          </React.Suspense>
        </ErrorBoundary>
      </section>
    </main>
  );
};

export default MainLayout;
