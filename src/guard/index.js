import React, { useContext } from "react";
import { AuthContext } from "../store/Context";
import { Redirect } from "react-router-dom";

export const RouteGuard = ({ children, User }) => {
  if (User) {
    return children;
  } else {
   return <Redirect to={'/login'} />
  }
};

export const AuthGuard = ({ children }) => {
  const { user } = useContext(AuthContext);
  if (user) {
    return <Redirect to={'/'}/>
  } else {
    return children;
  }
};

