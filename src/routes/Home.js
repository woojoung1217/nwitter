import React from "react";
import Navigation from "components/Navigation";
import Auth from "./Auth";

const Home = ({ isLoggedin }) => {
  return (
    <>
      <div>{!isLoggedin ? <Navigation /> : null}</div>
      <div>home</div>
    </>
  );
};
export default Home;
