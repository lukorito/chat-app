import React, { useState } from "react";
import Tab from "./Tab";

function TabContainer() {
  const [activeTab, setActiveTab] = useState("messages");
  const handleClick = (activeTab: string) => () => {
    setActiveTab(activeTab);
  };

  return (
    <div className="flex flex-col mt-10">
      <Tab
        title="messages"
        active={activeTab.includes("messages")}
        handleClick={handleClick}
        route="messages"
      />
      <Tab
        title="settings"
        active={activeTab.includes("settings")}
        handleClick={handleClick}
        route="settings"
      />
    </div>
  );
}

export default TabContainer;
