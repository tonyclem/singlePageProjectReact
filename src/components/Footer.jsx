import React from "react";
import styled from "styled-components";
import logo from "../assets/logo.svg";

const Footer = () => {
  return (
    <Wrapper>
      <div className="container">
        <div>
          <span className="logo">
            <img src={logo} alt="logo" />
          </span>
          <div className="update-input">
            <input type="text" />
            <button>Subscribe</button>
          </div>
        </div>
        <div className="contact-container">
          <h5>Contact Info</h5>
          <div className="address">
            <address>
              <small>Address</small>: Lorem ipsum, dolor <br /> 34, 1285 DM
            </address>
            <phone>
              <small>Phone</small>: 0613459600
            </phone>
          </div>
        </div>
        <div className="account">
          <h5>My Account</h5>
          <span>Login</span>
          <span>Order History</span>
          <span>My Wishlist</span>
          <span>Track Order</span>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  color: #fff;
  padding: 3rem 2rem;
  background: #6c757d;
  .container {
    display: grid;
    grid-template-columns: auto auto auto;
    padding: 1rem;

    h5 {
      font-size: 1.3rem;
      padding-bottom: 1.2rem;
    }

    div {
      img {
        width: 75px;
        border-radius: 50%;
      }

      .update-input {
        margin: 1rem 0;

        input,
        button {
          padding: 0.5rem 0.4rem;
        }
      }
    }
    .contact-container {
      .address {
        address {
          padding-bottom: 0.5rem;
        }
      }
    }
    .account {
      span {
        display: block;
        padding: 0.5rem 0;
      }
    }
  }
`;

export default Footer;
