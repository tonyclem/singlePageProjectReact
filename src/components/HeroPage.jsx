import React from "react";
import styled from "styled-components";
import AsideNav from "./AsideNav";
import SliderNav from "./SliderNav";
import TrackBar from "./TrackBar";

const HeroPage = () => {
  return (
    <Wrapper>
      <div>
        <AsideNav />
        <SliderNav />
        <TrackBar />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  div {
    display: flex;
    justify-content: space-between;
  }
`;

export default HeroPage;
