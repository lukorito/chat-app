import React from "react";
import MessageThread from "./MessageThread";
import Input from "../components/Input";

function Thread() {
  return (
    <div className="h-full p-3 px-5">
      <h4 className="text-xl text-gray-900 leading-tight pb-3">Messages</h4>
      <div className="border-solid border-b border-gray-400" />
      <MessageThread />
      <Input />
    </div>
  );
}

export default Thread;
