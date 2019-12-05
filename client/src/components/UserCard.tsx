import React from "react";
import { Link } from "react-router-dom";

function UserCard({ user }: { user: User }) {
  return (
    <div className="max-w-sm mx-auto flex p-4 bg-white rounded-lg shadow mt-3">
      <div className="flex-shrink-0">
        <img
          className="h-12 w-12 block rounded-full"
          src={user.photo}
          alt="ChitChat Logo"
        />
      </div>
      <div className="ml-6 pt-1">
        <h4 className="text-gray-900 leading-tight">{user.name}</h4>
        <p className="text-sm text-gray-600 leading-normal">
          You have a new message!
        </p>
      </div>
    </div>
  );
}

export default UserCard;
