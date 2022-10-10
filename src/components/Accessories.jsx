import React from "react";
import styled from "styled-components";

const Accessories = () => {
  return (
    <Wrapper>
      <div className="container">
        <div className="inner-container">
          <h4>Accessories</h4>
          <button>View More</button>
        </div>
        <hr />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 3rem 2rem;

  .container {
    background-color: #f1f1f1;
    padding: 2rem 2rem;
    border-radius: 5px;

    h4 {
      font-size: 22px;
    }
    .inner-container {
      padding-bottom: 1rem;
      display: flex;
      justify-content: space-between;

      button {
        border: none;
        padding: 0.8rem;
        background-color: green;
        color: white;
        border-radius: 0.5rem;
      }
    }
  }
`;

export default Accessories;
