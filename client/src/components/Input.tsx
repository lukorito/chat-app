import React, { useState, ChangeEvent } from "react";
import SendIcon from "@material-ui/icons/Send";
import io from "../utils/socket";

function Input() {
  const [text, setText] = useState("");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    io.emit("message", { text });
  };

  return (
    <div className=" p-5">
      <form
        className="w-full bg-white shadow-md rounded py-1 flex"
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <div className="w-4/5">
          <input
            className="w-full p-2 px-5 flex items-center text-gray-700 text-sm leading-normal focus:outline-none h-auto"
            id="message"
            placeholder="Type your message..."
            onChange={handleChange}
            value={text}
          />
        </div>
        <div className="w-1/5 flex justify-center items-center">
          <button
            type="submit"
            className="w-2/5 bg-blue-500 hover:bg-blue-700 text-white rounded p-1"
          >
            <SendIcon />
          </button>
        </div>
      </form>
    </div>
  );
}

export default Input;
