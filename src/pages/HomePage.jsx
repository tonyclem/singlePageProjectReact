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
  Accessories,
  Policy,
  Footer,
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
      <Accessories />
      <Policy />
      <Footer />
    </div>
  );
};

export default HomePage;
