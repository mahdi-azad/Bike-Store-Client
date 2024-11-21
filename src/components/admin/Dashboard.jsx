import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <h1>Admin Dashboard</h1>
      <Link to="/createproduct" className="nav-link">
        Product Creation
      </Link>
      <Link to="/displayproduct" className="nav-link">
        Product Display
      </Link>
      <Link to="/display-service" className="nav-link">
        Service Display
      </Link>
    </div>
  );
};

export default Dashboard;
