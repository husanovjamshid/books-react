import { Header } from "../Home/Header/Header";
import book from "../../assets/img/book.png";
import { Containers } from "../Home/Header/header.style";
import {
  AuthInfoDesc,
  AuthName,
  InfoAuthBirth,
  InfoAuthImg,
  InfoAuthorBox,
  InfoAuthText,
  InforAuthLine,
} from "./infoAuth.style";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import { useEffect, useState } from "react";
import MultipleItems from "./bookCarousel";

export const InfoAuth = () => {
  const [authorInfo, setAuthorInfo] = useState([]);

  const getAuthor = useSelector((item) => item.authId.authId);
  const token = useSelector((token) => token.token.token);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/author/authorId/${getAuthor}`, {
        headers: { Authorization: token },
      })
      .then((data) => {
        setAuthorInfo(data.data);
        // console.log(data.data);
      });
  }, [getAuthor]);

  const [books, setBooks] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/author/books/${getAuthor}`, {
        headers: { Authorization: token },
      })
      .then((data) => setBooks(data.data));
  }, [getAuthor]);
  return (
    <>
      <Containers>
        {" "}
        <Header />
        <div className="d-flex gap-5 mt-4">
          <div>
            <InfoAuthImg
              src={`http://localhost:5000/${authorInfo.image}`}
              alt=""
            />
          </div>
          <InfoAuthorBox>
            <AuthName>
              {authorInfo.first_name} {authorInfo.last_name}
            </AuthName>
            <AuthInfoDesc>{authorInfo.bio}</AuthInfoDesc>

            <div className="d-flex align-items-center gap-4 mt-5">
              <div>
                <InfoAuthText>Tavallud sanasi</InfoAuthText>
                <InfoAuthBirth>{authorInfo.date_of_birth}</InfoAuthBirth>
                <InfoAuthText>{authorInfo.country}</InfoAuthText>
              </div>
              <InforAuthLine></InforAuthLine>
              <div>
                <InfoAuthText>Vafot etgan sanasi</InfoAuthText>
                <InfoAuthBirth>{authorInfo.date_of_death}</InfoAuthBirth>
                <InfoAuthText>{authorInfo.country}</InfoAuthText>
              </div>
            </div>
          </InfoAuthorBox>
        </div>
        <MultipleItems  />
      </Containers>
    </>
  );
};
