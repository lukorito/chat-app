import React, { useContext, Suspense } from "react";
import UserProvider from "../contexts/UserProvider";
import UsersProvider from "../contexts/UsersProvider";
import Profile from "../components/Profile";
import TabContainer from "../components/TabContainer";
import { Route } from "react-router-dom";

const Messages = React.lazy(() => import("../components/Messages"));

function Chat() {
  // add lazy loading for this component
  const user: User = useContext(UserProvider.context);

  return (
    <div className="h-screen flex">
      <div className="w-1/4 bg-secondary">
        <div className="container max-h-full">
          <div className="">
            <Profile user={user} />
            <TabContainer />
          </div>
        </div>
      </div>
      <div className="w-3/4 bg-indigo-100">
        <Suspense fallback={<div>Loading...</div>}>
          <UsersProvider>
            <Route path="/chat/messages" component={Messages} />
          </UsersProvider>
        </Suspense>
      </div>
    </div>
  );
}

export default Chat;
