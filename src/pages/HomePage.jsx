import React from "react";
import {
  FashionImage,
  NavBar,
  HeroPage,
  AdvertDealBanner,
  NewProduct,
  WomanProductCmp,
  MenProductSuit,
  CenterBanner,
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
      <MenProductSuit />
      <CenterBanner />
    </div>
  );
};

export default HomePage;
