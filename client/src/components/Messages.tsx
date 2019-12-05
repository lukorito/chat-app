import React, { useContext } from "react";
import UserCard from "../components/UserCard";
import UsersProvider from "../contexts/UsersProvider";
import { Link, Route } from "react-router-dom";
import Thread from "./Thread";

function SearchInput() {
  const handleOnChange = (e: any) => {
    console.log(e.target.value);
  };
  return (
    <input
      className="bg-indigo-100 w-full h-8 focus:outline-none mb-2 pr-2 text-gray-800"
      placeholder="Search users..."
      onChange={handleOnChange}
    />
  );
}

function Messages() {
  const users: any = useContext(UsersProvider.context);

  return (
    <div className=" h-full p-12">
      <div className="h-full">
        <h4 className="text-3xl text-gray-900 leading-tight">Chat</h4>
        <div className="flex h-full">
          <div className="w-1/3 h-full">
            <div className=" p-3">
              <h4 className="text-xl text-gray-900 leading-tight mb-3">
                Users
              </h4>
              <SearchInput />
              <div className="border-solid border-b border-gray-400" />
              {/* Map list of users here */}
              {users.map((user: User) => (
                <Link key={user._id} to={`/chat/messages/${user._id}`}>
                  <UserCard user={user} />
                </Link>
              ))}
            </div>
          </div>
          <div className="w-2/3 h-full">
            <Route path="/chat/messages/:id" component={Thread} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Messages;
