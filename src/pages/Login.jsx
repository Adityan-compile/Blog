import React from "react";
import LoginForm from "../components/loginForm";

function Login() {
  return (
    <div>
      <div className="p-4">
        <h1 className="text-center fw-bold">Login</h1>
        <LoginForm />
      </div>
    </div>
  );
}

export default Login;
