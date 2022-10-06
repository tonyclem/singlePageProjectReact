import React, { Component } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import { carouseImages } from "../utils/Constants";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        // display: "block",
        background: "black",
        margin: "0px 2rem",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        // display: "block",
        background: "black",
        fontSize: "12px",
        margin: "0px 2rem",
      }}
      onClick={onClick}
    />
  );
}

export default class SliderCarousel extends Component {
  render() {
    const settings = {
      dots: true,
      speed: 1000,
      className: "slides",
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      // autoplay: true,
      autoplaySpeed: 2000,
    };

    return (
      <Slider {...settings}>
        {carouseImages.map((imagesDs) => {
          const { id, images, name } = imagesDs;
          return (
            <Wrapper key={id}>
              <div className="wrapper">
                <img src={images} alt={name} className="sliderImg" />
                <p>{name}</p>
              </div>
            </Wrapper>
          );
        })}
      </Slider>
    );
  }
}

const Wrapper = styled.div`
  .wrapper {
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
    align-content: center;
  }

  .sliderImg {
    height: 400px;
    width: 600px;
    padding: 0px 2vw;
    object-fit: contain;
  }
`;
