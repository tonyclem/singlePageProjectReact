import React from "react";
import styled from "styled-components";
import category from "../assets/fashion-logo.webp";

const AsideNav = () => {
  return (
    <Wrapper>
      <div className="container">
        <h3>categories</h3>
        <div className="category-container">
          <img src={category} alt="category" />
          <h4>Men Suit</h4>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-left: 1rem;
  .container {
    display: block;
    background: #f1f1f1;
    .category-container {
      display: flex;
      img {
        width: 2.2rem;
      }
    }
  }
`;

export default AsideNav;
