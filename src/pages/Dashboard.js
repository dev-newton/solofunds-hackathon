import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <div className="container mb-5">
        <div className="mt-5">
          <h3>Welcome, Newton!</h3>
        </div>
        <Link to="/">
          <button className="btn btn-primary">Log out</button>
        </Link>
      </div>
    </>
  );
};

export default Dashboard;
