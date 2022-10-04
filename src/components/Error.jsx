import React from "react";
import styled from "styled-components";

const Error = () => {
  return (
    <Wrapper>
      <div className="section section-center text-center">
        <h2>there was an Error....</h2>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .section {
    padding: 5rem 0;
  }
  .section-center {
    width: 90vw;
    margin: 0 auto;
    max-width: var(--max-width);
  }
  .text-center {
    text-align: center;
  }
`;

export default Error;
