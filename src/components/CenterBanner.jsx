import React from "react";
import styled from "styled-components";
import { useProductsContext } from "../context/Products_context";

const CenterBanner = () => {
  const { centerBannerImages: centerBanner } = useProductsContext();
  return (
    <Wrapper>
      {centerBanner.map((banner) => {
        const { images, _id: id, name } = banner;
        return (
          <div key={id} className="container">
            <img src={images} alt={name} />
          </div>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 3rem 2rem;
  .container {
    img {
      width: 100%;
      height: 60%;
    }
  }
`;

export default CenterBanner;
