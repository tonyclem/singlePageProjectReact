import React from "react";
import styled from "styled-components";
import logo from "../assets/logo.svg";
import bag from "../assets/shoppingbag.svg";
import NavBarDiscount from "./NavBarDiscount";
import InfoContent from "./Info";

const NavBar = () => {
  return (
    <div>
      <NavBarDiscount />
      <InfoContent />
      <Wrapper>
        <nav className="nav-container">
          <div className="nav-logo">
            <img src={logo} alt="img" />
          </div>
          <ul className="nav-ul">
            <li className="nav-hover underline">Home</li>
            <li className="nav-hover underline">Product</li>
            <li className="nav-hover underline">About</li>
          </ul>
          <div className="nav-ul">
            <img src={bag} alt="bag" />
            <label className="switch-theme">
              <input type="checkbox" />
              <div className="slider round"></div>
            </label>
          </div>
        </nav>
      </Wrapper>
    </div>
  );
};

const Wrapper = styled.div`
  .nav-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #f1f1f1;
    padding: 0.5rem 2.5rem;
    text-decoration: none;

    .nav-logo {
      img {
        width: 80px;
        border-radius: 50%;
      }
    }

    .nav-ul {
      display: flex;
      gap: 1rem;

      img {
        width: 2.2rem;
        height: 2.2rem;
        margin: 0 1.2rem;
      }

      li {
        font-size: 2.1rem;
        font-weight: bold;
        margin-left: 1.5rem;
        text-transform: capitalize;
        position: relative;
      }

      .nav-hover::after {
        content: " ";
        position: absolute;
        width: 100%;
        height: 3px;
        left: 0;
        bottom: -5px;
        background: var(--clr-green-dark);
      }

      .underline::after {
        transform: scale(0, 1);
        transform-origin: 0% 100%;
        transition: transform 0.3s ease;
      }
      .underline:hover::after {
        transform: scale(1, 1);
      }
    }

    .switch-theme {
      display: inline-block;
      height: 34px;
      position: relative;
      width: 60px;

      input {
        display: none;
      }

      .slider {
        background: #ccc;
        bottom: 0;
        cursor: pointer;
        left: 0;
        position: absolute;
        right: 0;
        top: 0;
        transition: 0.4s;
      }

      .slider::before {
        content: " ";
        position: absolute;
        background: #fff;
        bottom: 4px;
        height: 26px;
        left: 4px;
        transition: 0.4s;
        width: 26px;
      }

      input:checked + .slider.round {
        background: var(--on-primary);
      }

      input:checked + .slider::before {
        transform: translateX(26px);
      }

      .slider.round {
        border-radius: 45px;
      }

      .slider.round::before {
        border-radius: 50%;
      }
    }
  }
`;

export default NavBar;
