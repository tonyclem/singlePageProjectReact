import React from "react";
import styled from "styled-components";
import { carouseImages } from "../utils/Constants";
import { BsStar, BsHeart } from "react-icons/bs";
import images from "../assets/fashion-logo.webp";

const NewProduct = () => {
  return (
    <Wrapper>
      <div className="container">
        <h1> New Products</h1>
        <hr />
        <div className="container-inner">
          <div className="images-container">
            <img src={images} alt="name" />
            <div className="icon-Container">
              <span className="icon">
                <p>
                  <BsHeart />
                </p>
              </span>
              <span className="icon">
                <p>
                  <BsHeart />
                </p>
              </span>
              <span className="icon">
                <p>
                  <BsHeart />
                </p>
              </span>
            </div>
            <div className="footer">
              <h6>$55</h6>
              <div className="btn-icon">
                <BsStar />
                <BsStar />
                <BsStar />
                <BsStar />
                <BsStar />
              </div>
              <p>smile fashion</p>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 3rem 2rem;
  background-color: #f1f1f1;
  height: 35vw;

  .container {
    margin: 2rem 1.5rem;
    width: 100%;

    h1 {
      padding: 1.2rem 0;
    }

    hr {
      margin-bottom: 1rem;
      width: 95%;
    }

    .container-inner {
      border-radius: 2px;
      .images-container {
        width: 200px;
        height: 320px;
        border: 1px solid #b3b3b3;
        border-radius: 2px;
        position: relative;

        img {
          width: 199px;
          height: 220px;
        }

        .icon {
          display: block;
          color: #000;
          background-color: #fff;
          border-radius: 50%;
          width: 2rem;
          height: 2rem;
          margin: auto;
          align-items: center;
          top: 5%;
          position: absolute;
          p {
            padding: 0.5rem;
          }
        }

        .footer {
          padding: 10px;

          .btn-icon {
            padding: 0.4rem 0;
          }
        }
      }

      .images-container:hover {
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
      }
    }
  }
`;

export default NewProduct;
