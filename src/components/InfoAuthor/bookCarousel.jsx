import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import Slider from "react-slick";
import {
  AuthorNovel,
  BookAuthorName,
  BookImg,
  BookItem,
  BookList,
  BooksList,
  BookTitleName,
} from "./infoAuth.style";
import book from "../../assets/img/book.png";
import { BoxWraps } from "../../app.style";

export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 6,
      autoplay: true,
      speed: 3000,
      autoplaySpeed: 4000,
    };
    
    
    return (
      <BoxWraps className="mb-5">
        <BooksList>
          <BoxWraps className="d-flex justify-content-between align-items-center">
            <AuthorNovel>Asarlari</AuthorNovel>
            <Link to="/books">Barchasini ko’rish</Link>
          </BoxWraps>
          <BookList>
            {/* <BookItem>
              
            </BookItem> */}
          </BookList>
        </BooksList>

        <Slider {...settings}>
          <BoxWraps>
            <NavLink to="/books">
              <BoxWraps className="books">
                <BookImg src={book} alt="" />
                <BookTitleName>Dunyoning ishlari</BookTitleName>
                <BookAuthorName>O’tkir Hoshimov</BookAuthorName>
              </BoxWraps>
            </NavLink>
          </BoxWraps>
          <BoxWraps>
            <NavLink to="/books">
              <BoxWraps className="books">
                <BookImg src={book} alt="" />
                <BookTitleName>Dunyoning ishlari</BookTitleName>
                <BookAuthorName>O’tkir Hoshimov</BookAuthorName>
              </BoxWraps>
            </NavLink>
          </BoxWraps>
          <BoxWraps>
            <NavLink to="/books">
              <BoxWraps className="books">
                <BookImg src={book} alt="" />
                <BookTitleName>Dunyoning ishlari</BookTitleName>
                <BookAuthorName>O’tkir Hoshimov</BookAuthorName>
              </BoxWraps>
            </NavLink>
          </BoxWraps>
          <BoxWraps>
            <NavLink to="/books">
              <BoxWraps className="books">
                <BookImg src={book} alt="" />
                <BookTitleName>Dunyoning ishlari</BookTitleName>
                <BookAuthorName>O’tkir Hoshimov</BookAuthorName>
              </BoxWraps>
            </NavLink>
          </BoxWraps>
          <BoxWraps>
            <NavLink to="/books">
              <BoxWraps className="books">
                <BookImg src={book} alt="" />
                <BookTitleName>Dunyoning ishlari</BookTitleName>
                <BookAuthorName>O’tkir Hoshimov</BookAuthorName>
              </BoxWraps>
            </NavLink>
          </BoxWraps>
          <BoxWraps>
            <NavLink to="/books">
              <BoxWraps className="books">
                <BookImg src={book} alt="" />
                <BookTitleName>Dunyoning ishlari</BookTitleName>
                <BookAuthorName>O’tkir Hoshimov</BookAuthorName>
              </BoxWraps>
            </NavLink>
          </BoxWraps>
          <BoxWraps>
            <NavLink to="/books">
              <BoxWraps className="books">
                <BookImg src={book} alt="" />
                <BookTitleName>Dunyoning ishlari</BookTitleName>
                <BookAuthorName>O’tkir Hoshimov</BookAuthorName>
              </BoxWraps>
            </NavLink>
          </BoxWraps>
          <BoxWraps>
            <NavLink to="/books">
              <BoxWraps className="books">
                <BookImg src={book} alt="" />
                <BookTitleName>Dunyoning ishlari</BookTitleName>
                <BookAuthorName>O’tkir Hoshimov</BookAuthorName>
              </BoxWraps>
            </NavLink>
          </BoxWraps>
          <BoxWraps>
            <NavLink to="/books">
              <BoxWraps className="books">
                <BookImg src={book} alt="" />
                <BookTitleName>Dunyoning ishlari</BookTitleName>
                <BookAuthorName>O’tkir Hoshimov</BookAuthorName>
              </BoxWraps>
            </NavLink>
          </BoxWraps>
          <BoxWraps>
            <NavLink to="/books">
              <BoxWraps className="books">
                <BookImg src={book} alt="" />
                <BookTitleName>Dunyoning ishlari</BookTitleName>
                <BookAuthorName>O’tkir Hoshimov</BookAuthorName>
              </BoxWraps>
            </NavLink>
          </BoxWraps>
          <BoxWraps>
            <NavLink to="/books">
              <BoxWraps className="books">
                <BookImg src={book} alt="" />
                <BookTitleName>Dunyoning ishlari</BookTitleName>
                <BookAuthorName>O’tkir Hoshimov</BookAuthorName>
              </BoxWraps>
            </NavLink>
          </BoxWraps>
          <BoxWraps>
            <NavLink to="/books">
              <BoxWraps className="books">
                <BookImg src={book} alt="" />
                <BookTitleName>Dunyoning ishlari</BookTitleName>
                <BookAuthorName>O’tkir Hoshimov</BookAuthorName>
              </BoxWraps>
            </NavLink>
          </BoxWraps>
        </Slider>
      </BoxWraps>
    );
  }
}

