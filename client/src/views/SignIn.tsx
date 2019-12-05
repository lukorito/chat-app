import React from "react";

import GroupChat from "../assets/images/group-chat.svg";

function SignIn() {
  return (
    <div className="h-screen flex">
      <div className="w-1/4">
        <div className="container h-full flex">
          <div className="container flex justify-center">
            <div className="h-64 mt-auto mb-auto w-full p-6">
              <h4 className="mx-auto text-xl text-gray-900 leading-tight">
                Sign in with google
              </h4>
              <a href="/auth/google">Login</a>
            </div>
          </div>
        </div>
      </div>
      <div className="w-3/4 bg-gray-200">
        <div className="container my-auto h-full flex justify-center items-center">
          <div className="p-10">
            <div>
              <h4 className="text-3xl text-gray-900 leading-tight">
                Welcome to Chat Chitto
              </h4>
              <h4 className="text-xl text-gray-900 leading-tight ">
                Chat, Simply
              </h4>
            </div>
            <img src={GroupChat} alt="group-chat" className="p-5" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
