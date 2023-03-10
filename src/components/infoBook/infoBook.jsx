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
  InfoBookWrapper,
} from "./infoBook.style";
import avatar from "../../assets/img/avloniy.png";
import { Link, NavLink } from "react-router-dom";
import substract from "../../assets/img/Subtract.svg";
import { useEffect, useState } from "react";
import axios from "axios";
import MultipleItems from "../InfoAuthor/bookCarousel";
import { BoxWraps } from "../../app.style";

export const InfoBook = () => {
  const [getBook, setBook] = useState([]);
  const bookId = useSelector((item) => item.bookSingleId.bookSingleId);
  const token = useSelector((token) => token.token.token);

  useEffect(() => {
    axios
      .get(`https://books.ogaw.uz/book/bookId/${bookId}`, {
        headers: { Authorization: token },
      })
      .then((data) => setBook(data.data));
  }, [bookId]);
  return (
    <Containers>
      <Header />
      <InfoBookWrapper>
        <BoxWraps>
          <InfoAuthImg src={`https://books.ogaw.uz/${getBook.image}`} alt="" />
        </BoxWraps>
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
              To???liq ma???lumot
              <BookInfoImg src={substract} alt="" />
            </BookTitle>

            <BookLine></BookLine>
          </BookInfoWrap>
          <AuthInfoDesc>{getBook.description}</AuthInfoDesc>
        </InfoAuthorBox>
      </InfoBookWrapper>
      <MultipleItems />
    </Containers>
  );
};
