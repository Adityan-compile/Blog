import React, { useState, useContext } from "react";
import { Link, useHistory } from 'react-router-dom';
import FirebaseContext from "../store/firebaseContext";

function LoginForm() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [message, setMessage] = useState("");
    const { firebase } = useContext(FirebaseContext);
  
    //eslint-disable-next-line
    const passwordRegex = `^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,}$`;

    const history = useHistory();

    const handleSubmit = (e)=>{
        e.preventDefault();
        firebase.auth().signInWithEmailAndPassword(email, password).then((res)=>{
            setMessage("LoggedIn");
            setTimeout(()=>history.pushState('/'), 2000);
        }).catch(err=>{
            console.log(err);
        });
    };

  return (
    <div>
      {error && <p className="text-danger text-center">{error}</p>}
      {message && <p className="text-success text-center">{message}</p>}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="example@example.com"
            required={true}
            aria-required="true"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            minLength="8"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            pattern={passwordRegex}
            id="password"
            required={true}
            aria-required="true"
          />
        </div>
        <Link to={'/login'} className="link-info p-2 text-decoration-none">Don't Have an Account? Create One</Link>
        <button type="submit" className="btn btn-primary">
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default LoginForm;