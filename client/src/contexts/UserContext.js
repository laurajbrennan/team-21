import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
const uuid = require("uuid/v4");

export const UserContext = createContext();

const UserContextProvider = props => {
  const [user, setUser] = useState(
    [{ id: "", name: "", username: "", email: "" }],
    () => {
      const localData = localStorage.getItem("user");
      return localData ? JSON.parse(localData) : [];
    }
  );

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  });

  const updateUser = user => {
    setUser([
      {
        id: uuid(),
        name: user.name,
        username: user.username,
        email: user.email
      }
    ]);
    axios.post("/users", {
      id: user.id,
      name: user.name,
      username: user.username,
      email: user.email
    });
  };
  const loginUser = user => {
    setUser([
      {
        id: user.id,
        name: user.name,
        username: user.username,
        email: user.email
      }
    ]);
  };
  const logoutUser = () => {
    setUser([
      {
        id: "",
        name: "",
        username: "",
        email: ""
      }
    ]);
  };
  return (
    <UserContext.Provider value={{ user, updateUser, loginUser, logoutUser }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
