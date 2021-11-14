import LoginForm from "../components/loginForm";
import React from "react";

function Login() {
  return (
    <div>
      <div className="p-4">
        <h1 className="text-center title-text fw-bold">Login</h1>
        <LoginForm />
      </div>
    </div>
  );
}

export default Login;
