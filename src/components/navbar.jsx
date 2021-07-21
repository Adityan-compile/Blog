import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { AuthContext, FirebaseContext } from "../store/Context";
import "./styles/navbar.css";

function Navbar() {
  const history = useHistory();
  //eslint-disable-nextline
  const { user } = useContext(AuthContext);
  const { firebase } = useContext(FirebaseContext);
  const logout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        history.push("/login");
      })
      .catch((err) => {
        alert("Error Logging Out");
      });
  };
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-lg">
        <div className="container-fluid">
          <Link className="navbar-brand" to={"/"}>
            <span className="brand-text">&lt;Codable/&gt;</span>
          </Link>
          <button
            className="navbar-toggler shadow"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fa fa-bars nav-btn"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to={"/"}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to={"/search"}>
                  Search
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to={"/posts/browse"}>
                  Browse
                </Link>
              </li>
                {user ? (
                    <li className="nav-item">
                      <Link
                        className="nav-link active"
                        aria-current="page"
                        to={"/user/profile"}
                      >
                        <span className="fw-bold">{user.displayName}</span>
                      </Link>
                    </li>
                ) : (
                  <li className="nav-item">
                    <Link
                      className="nav-link active"
                      aria-current="page"
                      to={"/login"}
                    >
                      Login
                    </Link>
                  </li>
                )}
                {user && (
                  <li className="nav-item">
                    <span role="button" className="nav-link active" onClick={logout}>
                      <span>Logout</span>
                    </span>
                  </li>
                )}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
