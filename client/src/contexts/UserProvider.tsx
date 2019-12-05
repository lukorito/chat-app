import React, { createContext, useEffect, useState } from "react";
import axiosInstance from "../utils/axiosInstance";

const context = createContext({});

interface Props {}

function UserProvider(props: React.PropsWithChildren<Props>) {
  const [user, setUser] = useState({ 
    photo: "",
    name: "",
    googleId: ""
  });

  useEffect(() => {
    axiosInstance
      .get("/user")
      .then(({ data }) => {
        setUser(data);
      })
      .catch(e => console.log(e));
  }, []);

  return <context.Provider value={user}>{props.children}</context.Provider>;
}

UserProvider.context = context;

export default UserProvider;
