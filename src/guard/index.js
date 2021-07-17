import React, { useContext } from "react";
import { AuthContext } from "../store/Context";
import { Redirect } from "react-router-dom";

const RouteGuard = ({ Component }) => {
  const { user } = useContext(AuthContext);
  if (user) {
    return <Component />;
  } else {
   return <Redirect to={'/login'} />
  }
  // return (
  //     <div>

  //     </div>
  // );
};

export const AuthGuard = ({ Component }) => {
  const { user } = useContext(AuthContext);
  if (user) {
    return <Redirect to={'/'}/>
  } else {
    return <Component />;
  }
  // return (
  //     <div>

  //     </div>
  // );
};

export default RouteGuard;
