import React from "react";
import styled from "styled-components";

const NavBarDiscount = () => {
  return (
    <Wrapper className="container  ">
      <h4>Save 30% - 60% in each orders you purchase</h4>
      <hr />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .btn {
    margin-left: 15rem;
  }
`;

export default NavBarDiscount;
