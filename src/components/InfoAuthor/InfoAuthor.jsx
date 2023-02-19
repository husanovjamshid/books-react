import { HeaderPage } from "../Home/Header/HeaderPage";
import book from "../../assets/img/book.png";
import info from "../../assets/img/infoauthor.png";
import { Containers } from "../Home/Header/header.style";
import {
  AuthInfoDesc,
  AuthName,
  AuthorNovel,
  BookAuthorName,
  BookImg,
  BookItem,
  BookList,
  BooksList,
  BookTitleName,
  InfoAuthBirth,
  InfoAuthImg,
  InfoAuthorBox,
  InfoAuthText,
  InforAuthLine,
} from "./infoAuth.style";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";

export const InfoAuth = () => {
  const getAuthor = useSelector((item) => item.arr.arr);
  console.log(getAuthor);
  // const token = useSelector((token) => token.token.token);

  // axios
  //   .get(`http://localhost:5000/author/authorId/${getAuthor}`, {
  //     headers: { Authorization: token },
  //   })
  //   .then((data) => console.log(data.data));
  return (
    <>
      <Containers>
        {" "}
        <HeaderPage />
        <div className="d-flex gap-5">
          <div>
            <InfoAuthImg src={info} alt="" />
          </div>
          <InfoAuthorBox>
            <AuthName>O’tkir Hoshimov</AuthName>
            <AuthInfoDesc>
              Oʻtkir Hoshimov 1941 yil Toshkent viloyatining Zangiota (hozirgi
              Chilonzor) tumanidagi Doʻmbiravot mavzeida tugʻildi. Oʻ. Hoshimov
              mehnat faoliyatini erta boshladi. Toshkent Davlat universiteti
              (hozirgi Oʻzbekiston Milliy universiteti)ning jurnalistika
              kulliyotida oʻqish bilan baravar gazeta tahririyatida ishladi.
              1959 yildan 1963 yilgacha “Temiryoʻlchi”, “Qizil Oʻzbekiston”,
              “Transportniy rabochiy” gazetalarida xat tashuvchi, mussaxhih,
              tarjimon boʻlib ishladi. Soʻng “Toshkent haqiqati” gazetasida
              adabiy xodim (1963–1966), “Toshkent oqshomi” gazetasida boʻlim
              mudiri (1966–1982), Gʻ. Gʻulom nomidagi Adabiyot va sanʼat
              nashriyotida bosh muharrir oʻrinbosari (1982–1985) boʻldi.
              1985–1995 yillarda “Sharq yulduzi” jurnaliga bosh muharrirlik
              qildi. 1995 yildan 2005 yilgacha Oʻzbekiston Respublikasi Oliy
              Majlisining Matbuot va axborot qoʻmitasi raisi lavozimida ishladi.
              2005 yildan “Teatr“ jurnalida bosh muharrir boʻlib ishladi.
            </AuthInfoDesc>

            <div className="d-flex align-items-center gap-4 mt-5">
              <div>
                <InfoAuthText>Tavallud sanasi</InfoAuthText>
                <InfoAuthBirth>1941</InfoAuthBirth>
                <InfoAuthText>Toshkent, Uzbekistan</InfoAuthText>
              </div>
              <InforAuthLine></InforAuthLine>
              <div>
                <InfoAuthText>Vafot etgan sanasi</InfoAuthText>
                <InfoAuthBirth>1941</InfoAuthBirth>
                <InfoAuthText>Toshkent, Uzbekistan</InfoAuthText>
              </div>
            </div>
          </InfoAuthorBox>
        </div>
        <BooksList>
          <div className="d-flex justify-content-between ">
            <AuthorNovel>Asarlari</AuthorNovel>
            <Link to="/books">Barchasini ko’rish</Link>
          </div>
          <BookList>
            <BookItem>
              <a href="#">
                <div className="books">
                  <BookImg src={book} alt="" />
                  <BookTitleName>Dunyoning ishlari</BookTitleName>
                  <BookAuthorName>O’tkir Hoshimov</BookAuthorName>
                </div>
              </a>
            </BookItem>
          </BookList>
        </BooksList>
      </Containers>
    </>
  );
};
