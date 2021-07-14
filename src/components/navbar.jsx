import React from "react";
import './styles/navbar.css';

function Navbar() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-lg">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <span className="brand-text">&lt;Codable/&gt;</span>
          </a>
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
                    <a className="nav-link active" aria-current="page" href="/">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/">
                      Features
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/">
                      Pricing
                    </a>
                  </li>
                </ul>
            </div>
          </div>
      </nav>
    </header>
  );
}

export default Navbar;
