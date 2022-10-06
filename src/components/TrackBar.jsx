import React from "react";
import styled from "styled-components";
import { carouseImages } from "../utils/Constants";
import images from "../assets/fashion-logo.webp";

const TrackBar = () => {
  return (
    <Wrapper>
      <div className="container">
        <h4>Top Deals</h4>
        <div className="row">
          <div className="columns">
            <div className="inner-container">
              <img src={images} alt="images" />
              <p>$200</p>
            </div>
          </div>
          <div className="columns">
            <div className="inner-container">
              <img src={images} alt="images" />
              <p>$200</p>
            </div>
          </div>
          <div className="columns">
            <div className="inner-container">
              <img src={images} alt="images" />
              <p>$200</p>
            </div>
          </div>
          <div className="columns">
            <div className="inner-container">
              <img src={images} alt="images" />
              <p>$200</p>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-right: 2rem;
  .container {
    h4 {
      text-align: center;
      padding: 0.9em 0;
    }

    background-color: #f1f1f1;
    height: 450px;
    overflow-y: scroll;
    .row {
      background-color: #f1f1f1;
      margin: auto 0;
      text-align: center;
      .columns {
        .inner-container {
          background: #fff;
          padding: 0.8rem;

          p {
            padding: 0.4rem;
          }
        }
        background-color: #fff0;
        padding: 0.5rem;
        img {
          width: 150px;
        }

        p {
          font-size: 12px;
        }
      }
    }
  }
`;

export default TrackBar;
