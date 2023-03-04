import React, { Component, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import homeBg from "../../assets/img/home-bg.png";
import { Containers } from "../Home/Header/header.style";
import {
  HeroBg,
  Title,
  TitleBox,
} from "./main.style";
import "./main.css";
import { SearchPage } from "./SearchPage/SearchPage";
import { BoxWraps } from "../../app.style";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 5000,
    };

    return (
      <>
        <BoxWraps className="position-relative">
          <Slider {...settings}>
            <BoxWraps
              className="position-relative"
            >
              <HeroBg src={homeBg} alt="" />
              <TitleBox>
                <Title>
                  Temuriylar <br /> davri <br /> adabiyoti
                </Title>
              </TitleBox>
            </BoxWraps>
            <BoxWraps
              className="position-relative"
            >
              <HeroBg src={homeBg} alt="" />
              <TitleBox>
                <Title>
                  Jadid <br /> davri <br /> adabiyoti
                </Title>
              </TitleBox>
            </BoxWraps>
            <BoxWraps
              // style={{ overflow: "hidden", borderRadius: "19px" }}
              className="position-relative"
            >
              <HeroBg src={homeBg} alt="" />
              <TitleBox>
                <Title>
                  Sovet <br /> davri <br /> adabiyoti
                </Title>
              </TitleBox>
            </BoxWraps>
            <BoxWraps
              // style={{ overflow: "hidden", borderRadius: "19px" }}
              className="position-relative"
            >
              <HeroBg src={homeBg} alt="" />
              <TitleBox>
                <Title>
                  Mustaqillik <br /> davri <br /> adabiyoti
                </Title>
              </TitleBox>
            </BoxWraps>
          </Slider>

          <SearchPage />
        </BoxWraps>
      </>
    );
  }
}
