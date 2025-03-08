import { FC, useState } from "react";
import PlusSvg from "../../assets/icons/plus-solid.svg";

interface TabProps {
  onTabChange: (tab: string) => void;
}

export const Tabs: FC<TabProps> = ({ onTabChange }) => {
  const [activeTab, setActiveTab] = useState("0");
  const [tabs, setTabs] = useState([
    {
      lable: "Tab 1",
      id: "0",
    },
  ]);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    onTabChange(tab);
  };

  return (
    <div role="tablist" className="tabs tabs-lift">
      {tabs.map((tab) => (
        <a
          role="tab"
          className={`tab ${
            tab.id === activeTab
              ? "tab-active [--tab-border-color:text-base-content]"
              : ""
          }`}
          key={tab.id}
          onClick={() => handleTabChange(tab.id)}
        >
          {tab.lable}
        </a>
      ))}
      <button
        role="tab"
        className="btn btn-square ml-2 bg-blue-100 tooltip tooltip-bottom"
        onClick={() =>
          setTabs([
            ...tabs,
            { lable: `Tab ${tabs.length + 1}`, id: `${tabs.length}` },
          ])
        }
        data-tip="Add Tab"
      >
        <img src={PlusSvg} alt="Add" className="size-5" />
      </button>
    </div>
  );
};
