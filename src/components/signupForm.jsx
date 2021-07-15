import React from "react";

function SignupForm() {
  //eslint-disable-next-line
  const passwordRegex = `^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,}$`;

  return (
    <div>
      <form>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="John Doe"
            required="true"
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
            aria-describedby="emailHelp"
            placeholder="example@example.com"
            required="true"
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
            pattern={passwordRegex}
            id="password"
            aria-describedby="passwordHelp"
            required="true"
            aria-required="true"
          />
          <div id="passwordHelp" className="form-text">
            Your Password Should be atleast 8 characters long, Contain a
            Lowercase Letter, an Uppercase Letter, a number and a Special
            Character.
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default SignupForm;
