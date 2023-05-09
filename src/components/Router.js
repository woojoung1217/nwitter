/*eslint-disable */
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Auth from "../routes/Auth";
import Home from "../routes/Home";
const AppRouter = ({ isLoggedIn }) => {
  return (
    <Routes>
      <>
        <Route path="/" element={isLoggedIn ? <Home /> : <Auth />}></Route>
      </>
    </Routes>
  );
};

export default AppRouter;
