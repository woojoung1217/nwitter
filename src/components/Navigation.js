import React from "react";
/* eslint-disable */
import { Link, Route, Routes } from "react-router-dom";
import Profile from "routes/Profile";
const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
