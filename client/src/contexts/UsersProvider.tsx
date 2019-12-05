import React, { createContext, useEffect, useState } from "react";
import axiosInstance from "../utils/axiosInstance";

const context = createContext({});

interface Props {}

function UsersProvider(props: React.PropsWithChildren<Props>) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axiosInstance
      .get("/users")
      .then(({ data }) => {
        setUsers(data);
      })
      .catch(e => console.log(e));
  }, []);

  return <context.Provider value={users}>{props.children}</context.Provider>;
}

UsersProvider.context = context;

export default UsersProvider;
