import React from "react";
import styled from "styled-components";
import { BsTelephone } from "react-icons/bs";

const InfoContent = () => {
  return (
    <Wrapper>
      <hr />
      <div>
        <span className="content-help">
          <BsTelephone />
          <h5>Help</h5>
          <h4>+3160000000</h4>
        </span>
        <hr />
        <span>Login</span>
        <hr />
        <span>Register</span>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  div {
    display: flex;
    justify-content: end;
    margin-right: 2.5rem;

    span {
      margin: 9px;
    }

    .content-help {
      display: flex;
      h5 {
        padding: 0 13px;
      }
      h4 {
        padding-right: 10px;
      }
    }
  }

  @media (max-width: 600px) {
    font-size: 12px;
  }
`;

export default InfoContent;
