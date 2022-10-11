import React from "react";
import styled from "styled-components";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import logo from "../assets/fashion-logo.webp";
import { payments } from "../utils/Constants";

const PaymentInfo = () => {
  return (
    <Wrapper>
      <div className="payment-details">
        <div></div>
        <div className="social-media">
          <span className="icon-1">
            <FaFacebookF />
          </span>
          <span className="icon-1">
            <FaInstagram />
          </span>
        </div>
        <div className="payment">
          <div className="payment-container">
            {payments.map((payment) => {
              const { id, images } = payment;
              return (
                <span key={id}>
                  <img src={images} alt="logos" />
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: #00171F;
  padding: 1rem;
  color: #fff;
  .payment-details {
    display: grid;
    grid-template-columns: 500px 400px 300px;

    .social-media {
      .icon-1 {
        background: #fff;
        color: #000;
        margin: 0 0.5rem;
        padding: 0.5rem 0.5rem;
        border-radius: 50%;
        width: 30px;
      }
    }

    .payment {
      .payment-container {
        span {
            margin 0 0.5rem;
          img {
            width: 50px;
          }
        }
      }
    }
  }
`;

export default PaymentInfo;
