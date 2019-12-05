import React from "react";
import CommentIcon from "@material-ui/icons/Comment";
import SettingsIcon from "@material-ui/icons/Settings";

import { Link } from "react-router-dom";

function Tab({
  title,
  active,
  route,
  handleClick
}: {
  title: string;
  active: boolean;
  route: string;
  handleClick: Function
}) {
  const iconSelector = (title: String) => {
    switch (title) {
      case "messages":
        return <CommentIcon fontSize="small" />;
      case "settings":
        return <SettingsIcon fontSize="small" />;
    }
  };

  return (
    <Link
      to={`/chat/${route}`}
      className={`flex items-center pl-10 relative w-full h-10 ${
        active
          ? "text-blue-500 border-l-8 border-blue-500 border-solid"
          : "text-gray-500"
      }`}
      onClick={handleClick(title)}
    >
      {iconSelector(title)}
      <span className="ml-10 font-bold leading-relaxed absolute left-8">
        {title.toUpperCase()}
      </span>
    </Link>
  );
}

export default Tab;
