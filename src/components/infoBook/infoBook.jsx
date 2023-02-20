import { useSelector } from "react-redux";
import { Header } from "../Home/Header/Header";
import { Containers } from "../Home/Header/header.style";
import book from "../../assets/img/book.png";
import "./infobook.css";
import {
  AuthInfoDesc,
  AuthName,
  AuthorNovel,
  BookAuthorName,
  BookImg,
  BookInfoImg,
  BookInfoWrap,
  BookItem,
  BookLine,
  BookList,
  BooksList,
  BookStatItem,
  BookStatList,
  BookStatPage,
  BookStatPrice,
  BookTitle,
  BookTitleName,
  InfoAuthImg,
  InfoAuthorBox,
} from "./infoBook.style";
import avatar from "../../assets/img/avloniy.png";
import { Link, NavLink } from "react-router-dom";
import substract from "../../assets/img/Subtract.svg";
import { useEffect, useState } from "react";
import axios from "axios";

export const InfoBook = () => {
  const [getBook, setBook] = useState([]);
  const bookId = useSelector((item) => item.bookSingleId.bookSingleId);
  const token = useSelector((token) => token.token.token);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/book/bookId/${bookId}`, {
        headers: { Authorization: token },
      })
      .then((data) => setBook(data.data));
  }, [bookId]);
  return (
    <Containers>
      <Header />
      <div className="d-flex gap-5 mt-4">
        <div>
          <InfoAuthImg src={`http://localhost:5000/${getBook.image}`} alt="" />
        </div>
        <InfoAuthorBox>
          <AuthName> {getBook.title} </AuthName>

          <BookStatList>
            <BookStatItem>
              <BookStatPage>Sahifalar soni:</BookStatPage>
              <BookStatPrice>{getBook.page} page</BookStatPrice>
            </BookStatItem>
            <BookStatItem>
              <BookStatPage>Chop etilgan:</BookStatPage>
              <BookStatPrice>{getBook.year} years</BookStatPrice>
            </BookStatItem>
            <BookStatItem>
              <BookStatPage>Kitob narxi:</BookStatPage>
              <BookStatPrice>${getBook.price}</BookStatPrice>
            </BookStatItem>
          </BookStatList>

          <BookInfoWrap>
            <BookTitle>
              To’liq ma’lumot
              <BookInfoImg src={substract} alt="" />
            </BookTitle>

            <BookLine></BookLine>
          </BookInfoWrap>
          <AuthInfoDesc>{getBook.description}</AuthInfoDesc>
        </InfoAuthorBox>
      </div>
      <BooksList>
        <div className="d-flex justify-content-between ">
          <AuthorNovel>Asarlari</AuthorNovel>
          <Link to="/books">Barchasini ko’rish</Link>
        </div>
        <BookList>
          <BookItem>
            <NavLink to="/books">
              <div className="books">
                <BookImg src={book} alt="" />
                <BookTitleName>Dunyoning ishlari</BookTitleName>
                <BookAuthorName>O’tkir Hoshimov</BookAuthorName>
              </div>
            </NavLink>
          </BookItem>
        </BookList>
      </BooksList>
    </Containers>
  );
};
