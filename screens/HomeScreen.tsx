import React from "react";
import NavigationLg from "../components/Navigation/NavigationLg";
import Image from "next/image";
import BlobOne from "../public/blob/circleOne.svg";
const HomeScreen = () => {
  return (
    <div className={"home"}>
      <NavigationLg />
      <h1>Hello</h1>
    </div>
  );
};

export default HomeScreen;
