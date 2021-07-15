import React, { useState, useContext } from "react";
import FirebaseContext from "../store/firebaseContext";
import { useHistory, Link } from "react-router-dom";

function SignupForm() {
  const history = useHistory();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const { firebase } = useContext(FirebaseContext);

  //eslint-disable-next-line
  const passwordRegex = `^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,}$`;

  /**
   * Handle Submit For SignUp Form.
   * @summary Create an Account and Redirect to Login Page.
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((res) => {
        res.user
          .updateProfile({ displayName: name })
          .then(() => {
            firebase.firestore()
              .collection("users")
              .add({
                id: res.user.uid,
                username: name,
                email: email,
              })
              .then(() => {
                setError("");
                setMessage("Account Created SuccessFully !!");
                setTimeout(() => {
                  history.push("/login");
                }, 2000);
              })
              .catch((err) => {
                setMessage("");
                setError(err.message);
              });
          })
          .catch((err) => {
            setMessage("");
            setError(err.message);
          });
      })
      .catch((err) => {
        setMessage("");
        setError(err.message);
      });
  };

  return (
    <div>
      {error && <p className="text-danger text-center">{error}</p>}
      {message && <p className="text-success text-center">{message}</p>}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="John Doe"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required={true}
            aria-required="true"
          />
        </div>
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
            aria-describedby="emailHelp"
            placeholder="example@example.com"
            required={true}
            aria-required="true"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
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
            aria-describedby="passwordHelp"
            required={true}
            aria-required="true"
          />
          <div id="passwordHelp" className="form-text">
            Your Password Should be atleast 8 characters long, Contain a
            Lowercase Letter, an Uppercase Letter, a number and a Special
            Character.
          </div>
        </div>
        <Link to={'/login'} className="link-info p-2 text-decoration-none">Have an Account? Login</Link>

        <button type="submit" className="btn btn-primary">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignupForm;
