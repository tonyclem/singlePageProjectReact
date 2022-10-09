import React from "react";
import styled from "styled-components";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";

const Stars = ({ reviews }) => {
  const tempStars = Array.from({ length: 5 }, (_, index) => {
    const number = index + 0.5;
    return (
      <span key={index}>
        {reviews >= index + 1 ? (
          <BsStarFill />
        ) : reviews >= number ? (
          <BsStarHalf />
        ) : (
          <BsStar />
        )}
      </span>
    );
  });
  return (
    <Wrapper>
      <div className="stars">{tempStars}</div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  span {
    color: #ffb900;
    font-size: 1rem;
    margin-right: 0.25rem;
  }

  margin-bottom: 0.2rem;
`;

export default Stars;
