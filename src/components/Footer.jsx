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
        <div>
          <h5>Contact Info</h5>
          <div className="address">
            <address>
              <small>Address</small> : Lorem ipsum, dolor <br /> 34, 1285 DM
            </address>
            <phone>
              <small>Phone</small> : 0613459600
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
  background: blue;
  color: #fff;
  padding: 3rem 2rem;
  .container {
    display: grid;
    grid-template-columns: auto auto auto;
    padding: 1rem;

    div {
      img {
        width: 70px;
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
    .account {
      span {
        display: block;
      }
    }
  }
`;

export default Footer;
