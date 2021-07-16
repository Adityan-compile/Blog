import React, { useContext } from "react";
import { AuthContext } from "../store/Context";
import { useHistory } from "react-router-dom";

const RouteGuard = ({ Component }) => {
  const { user } = useContext(AuthContext);
  const history = useHistory();
  if (user) {
    return <Component />;
  } else {
    history.push("/login");
  }
  // return (
  //     <div>

  //     </div>
  // );
};

export const AuthGuard = ({ Component }) => {
  const { user } = useContext(AuthContext);
  const history = useHistory();
  console.log(user);
  if (user) {
    history.push("/");
  } else {
    return <Component />;
  }
  // return (
  //     <div>

  //     </div>
  // );
};

export default RouteGuard;
