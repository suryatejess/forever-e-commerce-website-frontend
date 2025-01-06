import React from "react";
import Hero from "../components/Hero";
import { ShopContext } from "../context/ShopContext";
import LatestCollection from "../components/LatestCollection";

const Home = () => {
  return (
    <div>
      <Hero />
      <LatestCollection />
    </div>
  );
};

export default Home;
