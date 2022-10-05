import React, { Component } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import { carouseImages } from "../utils/Constants";

export default class SliderCarousel extends Component {
  render() {
    const settings = {
      dots: true,
      arrows: true,
      speed: 1000,
      className: "sliders",
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
    };

    return (
      <Slider {...settings}>
        {carouseImages.map((imagesDs) => {
          const { id, images, name } = imagesDs;
          return (
            <Wrapper>
              <div key={id} className="wrapper">
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

const Wrapper = styled.div``;
