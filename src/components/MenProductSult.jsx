import React from "react";
import styled from "styled-components";
import { BsHeart, BsCart3 } from "react-icons/bs";
import { BiRefresh } from "react-icons/bi";
import { useProductsContext } from "../context/Products_context";
import Stars from "./Stars";
import { formatPrice } from "../utils/Helper";
import Carousel from "react-elastic-carousel";

const MenProductSuit = () => {
  const { menSuitImages: menSuits } = useProductsContext();
  return (
    <Wrapper>
      <div className="container">
        <h1> Men Suits</h1>
        <hr />
        <div className="container-inner">
          <Carousel itemsToShow={4} pagination={false}>
            {menSuits.map((products) => {
              const { _id: id, images, rating, price } = products;
              return (
                <div className="images-container" key={id}>
                  <img src={images} alt="name" />
                  {/* icon Container */}
                  <div className="icon-Container">
                    <span className="icon-heart">
                      <BsHeart className="heart" />
                    </span>
                    <span className="icon-heart">
                      <BiRefresh className="heart" />
                    </span>
                    <span className="icon-heart">
                      <BsCart3 className="heart" />
                    </span>
                  </div>
                  <div className="footer">
                    <h6>{formatPrice(price)}</h6>
                    <div className="btn-icon">
                      <Stars {...rating} className="star-icon" />
                    </div>
                    <p>smile fashion</p>
                  </div>
                </div>
              );
            })}
          </Carousel>
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
      width: 95%;
      border-radius: 2px;
      display: flex;
      overflow-y: auto;
      padding-bottom: 0.9rem;

      .images-container {
        margin-right: 2.2rem;
        width: 200px;
        height: 320px;
        border: 1px solid #b3b3b3;
        border-radius: 5px;
        position: relative;

        img {
          width: 199px;
          height: 220px;
          border-radius: 5px;
        }

        .icon-Container {
          color: #000;
          top: 5%;
          position: absolute;
          margin: auto 0;
          left: 80%;

          .icon-heart {
            display: block;
            margin: 0.3rem 0;
            padding: 0.5rem;
            background-color: #fff;
            border-radius: 50%;
            width: 2rem;
            height: 2rem;
          }

          .icon-heart:hover {
            background-color: green;
            color: #fff;
          }
        }

        .footer {
          padding: 10px;

          .btn-icon {
            padding: 0.4rem 0;

            .star-icon {
              padding-right: 0.2rem;
            }
          }
        }
      }

      .images-container:hover {
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
      }
    }
  }
`;

export default MenProductSuit;
