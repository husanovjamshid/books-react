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

export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 6,
      slidesToScroll: 6,
      autoplay: true,
      speed: 3000,
      autoplaySpeed: 4000,
    };
    
    
    return (
      <div className="mb-5">
        <BooksList>
          <div className="d-flex justify-content-between ">
            <AuthorNovel>Asarlari</AuthorNovel>
            <Link to="/books">Barchasini ko’rish</Link>
          </div>
          <BookList>
            {/* <BookItem>
              
            </BookItem> */}
          </BookList>
        </BooksList>

        <Slider {...settings}>
          <div>
            <NavLink to="/books">
              <div className="books">
                <BookImg src={book} alt="" />
                <BookTitleName>Dunyoning ishlari</BookTitleName>
                <BookAuthorName>O’tkir Hoshimov</BookAuthorName>
              </div>
            </NavLink>
          </div>
          <div>
            <NavLink to="/books">
              <div className="books">
                <BookImg src={book} alt="" />
                <BookTitleName>Dunyoning ishlari</BookTitleName>
                <BookAuthorName>O’tkir Hoshimov</BookAuthorName>
              </div>
            </NavLink>
          </div>
          <div>
            <NavLink to="/books">
              <div className="books">
                <BookImg src={book} alt="" />
                <BookTitleName>Dunyoning ishlari</BookTitleName>
                <BookAuthorName>O’tkir Hoshimov</BookAuthorName>
              </div>
            </NavLink>
          </div>
          <div>
            <NavLink to="/books">
              <div className="books">
                <BookImg src={book} alt="" />
                <BookTitleName>Dunyoning ishlari</BookTitleName>
                <BookAuthorName>O’tkir Hoshimov</BookAuthorName>
              </div>
            </NavLink>
          </div>
          <div>
            <NavLink to="/books">
              <div className="books">
                <BookImg src={book} alt="" />
                <BookTitleName>Dunyoning ishlari</BookTitleName>
                <BookAuthorName>O’tkir Hoshimov</BookAuthorName>
              </div>
            </NavLink>
          </div>
          <div>
            <NavLink to="/books">
              <div className="books">
                <BookImg src={book} alt="" />
                <BookTitleName>Dunyoning ishlari</BookTitleName>
                <BookAuthorName>O’tkir Hoshimov</BookAuthorName>
              </div>
            </NavLink>
          </div>
          <div>
            <NavLink to="/books">
              <div className="books">
                <BookImg src={book} alt="" />
                <BookTitleName>Dunyoning ishlari</BookTitleName>
                <BookAuthorName>O’tkir Hoshimov</BookAuthorName>
              </div>
            </NavLink>
          </div>
          <div>
            <NavLink to="/books">
              <div className="books">
                <BookImg src={book} alt="" />
                <BookTitleName>Dunyoning ishlari</BookTitleName>
                <BookAuthorName>O’tkir Hoshimov</BookAuthorName>
              </div>
            </NavLink>
          </div>
          <div>
            <NavLink to="/books">
              <div className="books">
                <BookImg src={book} alt="" />
                <BookTitleName>Dunyoning ishlari</BookTitleName>
                <BookAuthorName>O’tkir Hoshimov</BookAuthorName>
              </div>
            </NavLink>
          </div>
          <div>
            <NavLink to="/books">
              <div className="books">
                <BookImg src={book} alt="" />
                <BookTitleName>Dunyoning ishlari</BookTitleName>
                <BookAuthorName>O’tkir Hoshimov</BookAuthorName>
              </div>
            </NavLink>
          </div>
          <div>
            <NavLink to="/books">
              <div className="books">
                <BookImg src={book} alt="" />
                <BookTitleName>Dunyoning ishlari</BookTitleName>
                <BookAuthorName>O’tkir Hoshimov</BookAuthorName>
              </div>
            </NavLink>
          </div>
          <div>
            <NavLink to="/books">
              <div className="books">
                <BookImg src={book} alt="" />
                <BookTitleName>Dunyoning ishlari</BookTitleName>
                <BookAuthorName>O’tkir Hoshimov</BookAuthorName>
              </div>
            </NavLink>
          </div>
        </Slider>
      </div>
    );
  }
}
