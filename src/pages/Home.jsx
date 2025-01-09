import React from "react";
import Hero from "../components/Hero";
import { ShopContext } from "../context/ShopContext";
import LatestCollection from "../components/LatestCollection";
import BestSeller from "../components/BestSeller";

const Home = () => {
  return (
    <div>
      <Hero />
      <LatestCollection />
      <BestSeller />
    </div>
  );
};

export default Home;
