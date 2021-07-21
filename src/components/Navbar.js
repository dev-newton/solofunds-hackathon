import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbarr">
      <div className="containerr flex">
        <h1 className="logo">Solo KYC</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/kyc/verify-liveness">KYC</Link>
            </li>
            <li>
              <Link to="/docs">Docs</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
