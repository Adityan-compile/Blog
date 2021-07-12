import React from "react";
import "./styles/navbar.css";
// import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'

function Navbar() {
  return (
    <div className="navbar">
      <nav className="nav p-3">
          <div>
            <h1 className="brand-text">
              <span>&#60;</span>
              <span>Codeable</span>
              <span>/&#62;</span>
            </h1>
          </div>
          <div>
            <input type="checkbox" id="click" />
            <label for="click" className="toggle">
             <FontAwesomeIcon icon={faBars} />
            </label>
          </div>
      </nav>
    </div>
  );
}

export default Navbar;
