import React from "react";
import styled from "styled-components";
import { BiFile, BiUndo, BiPieChartAlt2, BiErrorCircle } from "react-icons/bi";

const Policy = () => {
  return (
    <Wrapper>
      <div className="container">
        <hr />
        <div>
          <BiFile className="icon" />
          <p>Term & condition</p>
        </div>
        <hr />
        <div>
          <BiUndo className="icon" />
          <p>return policy</p>
        </div>
        <hr />
        <div>
          <BiPieChartAlt2 className="icon" />
          <p>Support Policy</p>
        </div>
        <hr />
        <div>
          <BiErrorCircle className="icon" />
          <p>privacy Policy</p>
        </div>
        <hr />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .container {
    background-color: #f1f1f1;
    display: flex;
    justify-content: center;
    div {
      align-items: center;
      padding: 2rem 3.5rem;

      .icon {
        font-size: 2.2rem;
        color: green;
      }
      p {
        padding-top: 0.5rem;
        font-size: 1.3rem;
      }
    }
  }
`;

export default Policy;
