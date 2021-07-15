import React from "react";
import { Link } from "react-router-dom";
import './styles/navbar.css';

function Navbar() {
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
                    <Link className="nav-link" to={"/"}>
                      Features
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={"/"}>
                      Pricing
                    </Link>
                  </li>
                </ul>
            </div>
          </div>
      </nav>
    </header>
  );
}

export default Navbar;
