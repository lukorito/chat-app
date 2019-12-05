import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import SignIn from "./views/SignIn";
import Chat from "./views/Chat";
import UserProvider from "./contexts/UserProvider";
import ProtectedRoute from "./Routes/config";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={SignIn} />
        {/* wrapp the chat component with the user details */}
        <UserProvider>
          <ProtectedRoute path="/chat" component={Chat} />
        </UserProvider>
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
