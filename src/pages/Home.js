import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar show />
      <div className="container home">
        <h1 className="text-center">Welcome to Solo KYC</h1>
        <p className="text-center">Your #1 Identity verification Provider</p>
        <div className="center">
          <Link to="/kyc/verify-liveness">
            <button className="btn">Get Started</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
