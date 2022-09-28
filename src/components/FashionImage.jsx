import React from "react";
import styled from "styled-components";
import logo from "../assets/fashion-logo.webp";

const FashionImage = () => {
  return (
    <Wrapper>
      <img src={logo} alt="logo" className="logo" />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .logo {
    height: 50vh;
    width: 100vw;
  }
`;

export default FashionImage;
