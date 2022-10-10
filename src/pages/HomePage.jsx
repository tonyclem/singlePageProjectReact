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
  WomanProductPants,
  MenProductPants,
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
      <WomanProductPants />
      <MenProductPants />
    </div>
  );
};

export default HomePage;
