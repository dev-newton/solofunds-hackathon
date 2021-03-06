import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ show }) => {
  return (
    <div className="navbarr">
      <div className="containerr flex">
        <Link to="/">
          <h1 className="logo">Solo Funds</h1>
        </Link>
        {show && (
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li className="font-weight-bold">
                <Link to="/kyc/verify-liveness">Sign Up</Link>
              </li>
              <li>
                <Link to="/docs">Docs</Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </div>
  );
};

export default Navbar;
