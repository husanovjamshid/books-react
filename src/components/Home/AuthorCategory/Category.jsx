import { Containers } from "../Header/header.style";
import {
  AuthTitle,
  AuthWrap,
  CardBody,
  CardBottomImg,
  CardDesc,
  CardTitle,
  CardTopImg,
  CatCard,
  TabWrap,
} from "./authCat.style";
import "./category.css";
import card from "../../../assets/img/avloniy.png";
import cardTop from "../../../assets/img/card-top.svg";
import cardBottom from "../../../assets/img/card-bottom.svg";
import { HeroPage } from "../Hero/HeroPage";
import axios from "axios";
import { useEffect, useState } from "react";

export const AuthCategorys = () => {
  const [genre, setGenre] = useState([]);

  const getGenre = async () => {
    const data = await axios.get("http://localhost:5000/genre");
    setGenre(data.data);
  };

  useEffect(() => {
    getGenre();
  }, []);

  const getGenreAuthor = async (id) => {
    const data = await axios.get(`http://localhost:5000/author/genreId/${id}`);
    console.log(data);
  };

  const handleGenre = (genreId) => {
    getGenreAuthor(genreId);
  };

  return (
    <Containers>
      <HeroPage />
      <AuthWrap>
        <AuthTitle>Asosiy kategoriyalar</AuthTitle>

        <TabWrap>
          {genre.length ? (
            <ul
              className="nav nav-tabs mb-3 d-flex justify-content-center"
              id="ex1"
              role="tablist"
            >
              {genre.map((item) => (
                <li className="nav-item" role="presentation">
                  <a
                    className="nav-link"
                    id={"#ex1-tabs-" + `${item.id}`}
                    data-mdb-toggle="tab"
                    href={"#ex1-tabs-" + `${item.id}`}
                    role="tab"
                    aria-controls={"#ex1-tabs-" + `${item.id}`}
                    aria-selected="false"
                    onClick={() => handleGenre(item.id)}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          ) : (
            ""
          )}

          <div className="tab-content" id="ex1-content">
            <div
              className="tab-pane fade show active"
              id="ex1-tabs-1"
              role="tabpanel"
              aria-labelledby="ex1-tab-1"
            >
              <div className="row gy-4">
                <div className="col-md-3">
                  <CatCard>
                    <img height="224px" width="295px" src={card} alt="" />
                    <CardBody>
                      <CardTopImg src={cardTop} alt="" />
                      <CardTitle>Abdulla Avloniy</CardTitle>
                      <CardDesc>1878-1934</CardDesc>
                      <CardBottomImg src={cardBottom} alt="" />
                    </CardBody>
                  </CatCard>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="ex1-tabs-2"
              role="tabpanel"
              aria-labelledby="ex1-tabs-2"
            >
              <div className="row gy-4">
                <div className="col-md-3">
                  <CatCard>
                    <img height="224px" width="295px" src={card} alt="" />
                    <CardBody>
                      <CardTopImg src={cardTop} alt="" />
                      <CardTitle>Abdulla Avloniy</CardTitle>
                      <CardDesc>1878-1934</CardDesc>
                      <CardBottomImg src={cardBottom} alt="" />
                    </CardBody>
                  </CatCard>
                </div>
                <div className="col-md-3">
                  <CatCard>
                    <img height="224px" width="295px" src={card} alt="" />
                    <CardBody>
                      <CardTopImg src={cardTop} alt="" />
                      <CardTitle>Abdulla Avloniy</CardTitle>
                      <CardDesc>1878-1934</CardDesc>
                      <CardBottomImg src={cardBottom} alt="" />
                    </CardBody>
                  </CatCard>
                </div>
                <div className="col-md-3">
                  <CatCard>
                    <img height="224px" width="295px" src={card} alt="" />
                    <CardBody>
                      <CardTopImg src={cardTop} alt="" />
                      <CardTitle>Abdulla Avloniy</CardTitle>
                      <CardDesc>1878-1934</CardDesc>
                      <CardBottomImg src={cardBottom} alt="" />
                    </CardBody>
                  </CatCard>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="ex1-tabs-3"
              role="tabpanel"
              aria-labelledby="ex1-tab-3"
            >
              <div className="row gy-4">
                <div className="col-md-3">
                  <CatCard>
                    <img height="224px" width="295px" src={card} alt="" />
                    <CardBody>
                      <CardTopImg src={cardTop} alt="" />
                      <CardTitle>Abdulla Avloniy</CardTitle>
                      <CardDesc>1878-1934</CardDesc>
                      <CardBottomImg src={cardBottom} alt="" />
                    </CardBody>
                  </CatCard>
                </div>
                <div className="col-md-3">
                  <CatCard>
                    <img height="224px" width="295px" src={card} alt="" />
                    <CardBody>
                      <CardTopImg src={cardTop} alt="" />
                      <CardTitle>Abdulla Avloniy</CardTitle>
                      <CardDesc>1878-1934</CardDesc>
                      <CardBottomImg src={cardBottom} alt="" />
                    </CardBody>
                  </CatCard>
                </div>
                <div className="col-md-3">
                  <CatCard>
                    <img height="224px" width="295px" src={card} alt="" />
                    <CardBody>
                      <CardTopImg src={cardTop} alt="" />
                      <CardTitle>Abdulla Avloniy</CardTitle>
                      <CardDesc>1878-1934</CardDesc>
                      <CardBottomImg src={cardBottom} alt="" />
                    </CardBody>
                  </CatCard>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="ex1-tabs-4"
              role="tabpanel"
              aria-labelledby="ex1-tab-4"
            >
              <div className="row gy-4">
                <div className="col-md-3">
                  <CatCard>
                    <img height="224px" width="295px" src={card} alt="" />
                    <CardBody>
                      <CardTopImg src={cardTop} alt="" />
                      <CardTitle>Abdulla Avloniy</CardTitle>
                      <CardDesc>1878-1934</CardDesc>
                      <CardBottomImg src={cardBottom} alt="" />
                    </CardBody>
                  </CatCard>
                </div>
                <div className="col-md-3">
                  <CatCard>
                    <img height="224px" width="295px" src={card} alt="" />
                    <CardBody>
                      <CardTopImg src={cardTop} alt="" />
                      <CardTitle>Abdulla Avloniy</CardTitle>
                      <CardDesc>1878-1934</CardDesc>
                      <CardBottomImg src={cardBottom} alt="" />
                    </CardBody>
                  </CatCard>
                </div>
                <div className="col-md-3">
                  <CatCard>
                    <img height="224px" width="295px" src={card} alt="" />
                    <CardBody>
                      <CardTopImg src={cardTop} alt="" />
                      <CardTitle>Abdulla Avloniy</CardTitle>
                      <CardDesc>1878-1934</CardDesc>
                      <CardBottomImg src={cardBottom} alt="" />
                    </CardBody>
                  </CatCard>
                </div>
              </div>
            </div>
          </div>
        </TabWrap>
      </AuthWrap>
    </Containers>
  );
};
