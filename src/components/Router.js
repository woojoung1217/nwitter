/*eslint-disable */
import React, { useState } from "react";
import { Routes, Route, Link, Router } from "react-router-dom";
import Auth from "../routes/Auth";
import Home from "../routes/Home";
import Navigation from "./Navigation";
import { useNavigate } from "react-router-dom";
import Profile from "routes/Profile";
const AppRouter = ({ isLoggedIn }) => {
  return (
    <Routes>
      {/* <>{isLoggedIn && <Route element={<Navigation></Navigation>}></Route>}</> */}
      <>
        <Route
          path="/"
          element={isLoggedIn ? <Home isLoggedIn={isLoggedIn} /> : <Auth />}
        ></Route>
        <Route
          path="/profile"
          element={isLoggedIn == true ? <Profile></Profile> : null}
        />
      </>
    </Routes>
  );
};

export default AppRouter;
