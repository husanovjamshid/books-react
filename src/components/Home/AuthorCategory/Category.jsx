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
import "../../MainPage/main.css";
import card from "../../../assets/img/avloniy.png";
import cardTop from "../../../assets/img/card-top.svg";
import cardBottom from "../../../assets/img/card-bottom.svg";
import { HeroPage } from "../Hero/HeroPage";

export const AuthCategory = () => {
  return (
    <Containers>
      <HeroPage />
      <AuthWrap>
        <AuthTitle>Asosiy kategoriyalar</AuthTitle>

        <TabWrap>
          <ul
            className="nav nav-tabs mb-3 d-flex justify-content-center"
            id="ex1"
            role="tablist"
          >
            <li className="nav-item" role="presentation">
              <a
                className="nav-link active"
                id="ex1-tab-1"
                data-mdb-toggle="tab"
                href="#ex1-tabs-1"
                role="tab"
                aria-controls="ex1-tabs-1"
                aria-selected="true"
              >
                Temuriylar davri
              </a>
            </li>
            <li className="nav-item" role="presentation">
              <a
                className="nav-link"
                id="ex1-tab-2"
                data-mdb-toggle="tab"
                href="#ex1-tabs-2"
                role="tab"
                aria-controls="ex1-tabs-2"
                aria-selected="false"
              >
                Jadid adabiyoti
              </a>
            </li>
            <li className="nav-item" role="presentation">
              <a
                className="nav-link"
                id="ex1-tab-3"
                data-mdb-toggle="tab"
                href="#ex1-tabs-3"
                role="tab"
                aria-controls="ex1-tabs-3"
                aria-selected="false"
              >
                Sovet davri
              </a>
            </li>
            <li className="nav-item" role="presentation">
              <a
                className="nav-link"
                id="ex1-tab-4"
                data-mdb-toggle="tab"
                href="#ex1-tabs-4"
                role="tab"
                aria-controls="ex1-tabs-4"
                aria-selected="false"
              >
                Mustaqillik davri
              </a>
            </li>
          </ul>
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
                    <img width="295px" src={card} alt="" />
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
                    <img width="295px" src={card} alt="" />
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
                    <img width="295px" src={card} alt="" />
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
              aria-labelledby="ex1-tab-2"
            >
              <div className="row gy-4">
                <div className="col-md-3">
                  <CatCard>
                    <img width="295px" src={card} alt="" />
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
                    <img width="295px" src={card} alt="" />
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
                    <img width="295px" src={card} alt="" />
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
                    <img width="295px" src={card} alt="" />
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
                    <img width="295px" src={card} alt="" />
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
                    <img width="295px" src={card} alt="" />
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
                    <img width="295px" src={card} alt="" />
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
                    <img width="295px" src={card} alt="" />
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
                    <img width="295px" src={card} alt="" />
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
