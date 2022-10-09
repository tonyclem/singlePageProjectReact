import React from "react";
import {
  FashionImage,
  NavBar,
  HeroPage,
  AdvertDealBanner,
  NewProduct,
  WomanProductCmp,
} from "../components";

const HomePage = () => {
  return (
    <div>
      <FashionImage />
      <NavBar />
      <HeroPage />
      <AdvertDealBanner />
      <NewProduct />
      <WomanProductCmp />
    </div>
  );
};

export default HomePage;
