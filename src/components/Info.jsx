import React from "react";
import styled from "styled-components";
import { BsTelephone } from "react-icons/bs";

const InfoContent = () => {
  return (
    <Wrapper>
      <BsTelephone />
      <h4>+3160000000</h4>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: end;
`;

export default InfoContent;
