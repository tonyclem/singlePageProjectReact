import React from "react";
import {
  FashionImage,
  NavBar,
  HeroPage,
  AdvertDealBanner,
} from "../components";

const HomePage = () => {
  return (
    <div>
      <FashionImage />
      <NavBar />
      <HeroPage />
      <AdvertDealBanner />
    </div>
  );
};

export default HomePage;
