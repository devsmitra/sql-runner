import { FC, ReactNode } from "react";
import { Outlet } from "react-router";

interface SideBarLayoutProps {
  Sidebar: ReactNode;
}

/**
 * SideBarLayout component to render a layout with a sidebar.
 */
const SideBarLayout: FC<SideBarLayoutProps> = ({ Sidebar }) => {
  return (
    <main className="bg-slate-100 h-[100%] grid grid-cols-12 gap-[1px]">
      <aside className="col-span-3 bg-base-100">{Sidebar}</aside>
      <section className="col-span-9 bg-base-100">
        <Outlet />
      </section>
    </main>
  );
};

export default SideBarLayout;
