import React, { useState } from "react";
import Advertisement from "../Advertisement/Advertisement";
import Banner from "../Banner/Banner";
import Categories from "../Categories/Categories";
import MobileApp from "../MobileApp/MobileApp";

const Home = () => {
  return (
    <div>
      <Banner />
      <Categories />
      <Advertisement />

      <MobileApp />
    </div>
  );
};

export default Home;
