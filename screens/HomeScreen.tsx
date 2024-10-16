import React from "react";
import Hero from "../components/Hero/Hero";
import NavigationLg from "../components/Navigation/NavigationLg";

const HomeScreen = () => {
  return (
    <>
      <div className="CircleContainerOne"></div>
      <div className="CircleContainerTwo"></div>
      <div className="CircleContainerThree"></div>
      <div className={"home"}>
        <NavigationLg />
        <Hero />
      </div>
    </>
  );
};

export default HomeScreen;
