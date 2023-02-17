import {
    CardBody,
    CardBottomImg,
    CardDesc,
    CardTitle,
    CardTopImg,
    CatCard,
  } from "../AuthorCategory/authCat.style";
  import card from "../../../assets/img/avloniy.png";
  import cardTop from "../../../assets/img/card-top.svg";
  import cardBottom from "../../../assets/img/card-bottom.svg";
  
  export const Sovet = () => {
    return (
      <>
        <div
          className="tab-pane fade show active"
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
                  sovet
                  <CardDesc>1878-1934</CardDesc>
                  <CardBottomImg src={cardBottom} alt="" />
                </CardBody>
              </CatCard>
            </div>
          </div>
        </div>
      </>
    );
  };
  