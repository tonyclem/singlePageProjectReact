import React from "react";
import styled from "styled-components";
import { useProductsContext } from "../context/Products_context";

const AdvertDealBanner = () => {
  const { productBannerImages: bannerImages } = useProductsContext();
  return (
    <Wrapper>
      {bannerImages.map((bImages) => {
        const { images, _id: id, name } = bImages;
        return (
          <div key={id}>
            <img src={images} alt={name} />
          </div>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  div {
    margin: 3rem 2rem;
    img {
      text-align: center;
      width: 100%;
      height: 300px;
    }
  }
`;

export default AdvertDealBanner;
