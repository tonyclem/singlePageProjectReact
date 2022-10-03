import React from "react";
import styled from "styled-components";
import { BsXLg } from "react-icons/bs";

const NavBarDiscount = () => {
  return (
    <Wrapper className="container">
      <h4>Save 30% - 60% in each orders you purchase</h4>
      <BsXLg />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  text-align: center;
  justify-content: space-around;
  margin: 0.8rem;
  font-size: 1.2rem;

  @media (max-width: 600px) {
    font-size: 10px;
  }
`;

export default NavBarDiscount;
