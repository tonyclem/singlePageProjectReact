import React from "react";
import styled from "styled-components";
import { useProductsContext } from "../context/Products_context";

const TrackBar = () => {
  const { productScrollImages: scrollImage } = useProductsContext();
  return (
    <Wrapper>
      <div className="container">
        <h4>Top Deals</h4>
        <div className="row">
          <div className="columns">
            {scrollImage.map((scrollImages) => {
              const { _id: id, name, images, price } = scrollImages;
              return (
                <div className="inner-container" key={id}>
                  <img src={images} alt={name} />
                  <p>{price}</p>
                </div>
              );
            })}
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
      position: sticky;
      top: 0;
      background-color: #f1f1f1;
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
          border: 6px solid green;

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
