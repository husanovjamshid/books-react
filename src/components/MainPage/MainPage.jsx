import React, { Component, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import homeBg from "../../assets/img/home-bg.png";
import { Containers } from "../Home/Header/header.style";
import {
  Title,
  TitleBox,
  MainWrapper,
  MainInputTitle,
  MainInput,
  MainButton,
} from "./main.style";
import "./main.css";
import axios from "axios";
import { SearchPage } from "./SearchPage/SearchPage";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      // speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 5000,
    };

    

    return (
      <Containers>
        <div className="position-relative">
          <Slider {...settings}>
            <div
              // style={{ overflow: "hidden", borderRadius: "19px" }}
              className="position-relative"
            >
              <img src={homeBg} alt="" />
              <TitleBox>
                <Title>
                  Temuriylar <br /> davri <br /> adabiyoti
                </Title>
              </TitleBox>
            </div>
            <div
              // style={{ overflow: "hidden", borderRadius: "19px" }}
              className="position-relative"
            >
              <img src={homeBg} alt="" />
              <TitleBox>
                <Title>
                  Jadid <br /> davri <br /> adabiyoti
                </Title>
              </TitleBox>
            </div>
            <div
              // style={{ overflow: "hidden", borderRadius: "19px" }}
              className="position-relative"
            >
              <img src={homeBg} alt="" />
              <TitleBox>
                <Title>
                  Sovet <br /> davri <br /> adabiyoti
                </Title>
              </TitleBox>
            </div>
            <div
              // style={{ overflow: "hidden", borderRadius: "19px" }}
              className="position-relative"
            >
              <img src={homeBg} alt="" />
              <TitleBox>
                <Title>
                  Mustaqillik <br /> davri <br /> adabiyoti
                </Title>
              </TitleBox>
            </div>
          </Slider>

          <SearchPage />
        </div>
      </Containers>
    );
  }
}
