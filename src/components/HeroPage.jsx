import React from "react";
import styled from "styled-components";
import AsideNav from "./AsideNav";
import SliderCarousel from "./SliderNav";
import TrackBar from "./TrackBar";

const HeroPage = () => {
  return (
    <Wrapper>
      <div className="products">
        <AsideNav />
        <SliderCarousel />
        <TrackBar />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .products {
    display: grid;
    gap: 1rem 1rem;
    margin: 2rem auto;
  }
  @media (min-width: 768px) {
    .products {
      grid-template-columns: 300px 700px 1fr;
    }
  }
`;

export default HeroPage;
