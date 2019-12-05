import React from "react";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

function Profile({ user }: { user: User }) {
  return (
    <div className="h-40 flex justify-center items-center flex-col mt-10">
      <img
        className="block mx-auto sm:mx-0 sm:flex-shrink-0 h-16 sm:h-24 rounded-full border-solid border-4 border-white"
        src={user.photo}
        alt="profile"
      />
      <div className="flex relative">
        <div className="text-l leading-tight mt-4">{user.name}</div>
        <div className="absolute -mr-6 right-0 bottom-0 cursor-pointer">
          <ExpandMoreIcon />
        </div>
      </div>
    </div>
  );
}

export default Profile;
