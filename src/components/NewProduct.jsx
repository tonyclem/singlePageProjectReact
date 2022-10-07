import React from "react";
import styled from "styled-components";
import { carouseImages } from "../utils/Constants";

const NewProduct = () => {
  return (
    <Wrapper>
      <div>
        <h1> New Product</h1>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 3rem 2rem;
  background-color: #f1f1f1;
`;

export default NewProduct;
