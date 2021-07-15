import Head from "next/head";
import Image from "next/image";
import HomeScreen from "../screens/HomeScreen";
export default function Home() {
  return (
    <div>
      <div className="CircleContainerOne"></div>
      <div className="CircleContainerTwo"></div>
      <HomeScreen />
    </div>
  );
}
