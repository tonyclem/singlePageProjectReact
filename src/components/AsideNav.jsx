import React from "react";
import styled from "styled-components";
import category from "../assets/fashion-logo.webp";

const AsideNav = () => {
  return (
    <Wrapper>
      <div className="container">
        <div className="category-h3">
          <h3>Categories</h3>
        </div>
        <div className="category-container">
          <img src={category} alt="category" />
          <h4>Men Suit</h4>
        </div>
        <div className="category-container">
          <img src={category} alt="category" />
          <h4>Men Suit</h4>
        </div>
        <div className="category-container">
          <img src={category} alt="category" />
          <h4>Men Suit</h4>
        </div>
        <div className="category-container">
          <img src={category} alt="category" />
          <h4>Men Suit</h4>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 2rem 1rem;
  .container {
    display: block;
    padding: 1rem;

    .category-h3 {
      background: #000;
      padding: 0.5rem 1rem;

      h3 {
        color: #fff;
      }
    }

    .category-container {
      display: flex;
      background: #f1f1f1;
      padding: 1rem 1rem;
      img {
        width: 2.5rem;
      }

      h4 {
        padding: 0 1rem;
      }
    }
  }
`;

export default AsideNav;
