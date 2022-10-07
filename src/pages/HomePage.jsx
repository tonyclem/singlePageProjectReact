import React from "react";
import {
  FashionImage,
  NavBar,
  HeroPage,
  AdvertDealBanner,
  NewProduct,
} from "../components";

const HomePage = () => {
  return (
    <div>
      <FashionImage />
      <NavBar />
      <HeroPage />
      <AdvertDealBanner />
      <NewProduct />
    </div>
  );
};

export default HomePage;
