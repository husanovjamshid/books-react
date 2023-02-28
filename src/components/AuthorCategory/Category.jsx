import { Containers } from "../Home/Header/header.style";
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
import cardTop from "../../assets/img/card-top.svg";
import cardBottom from "../../assets/img/card-bottom.svg";
import { HeroPage } from "../Home/Hero/HeroPage";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AuthId } from "../../redux/AuthorId/authorAction";
import { api } from "../../Api/api";

export const AuthCategorys = () => {
  const [genre, setGenre] = useState([]);
  const [author, setAuthor] = useState([]);
  const [genresId, setGenreId] = useState(1);

  // GET GENRE
  const getGenre = async () => {
    const data = await api.userCategory();
    setGenre(data.data);
  };
  useEffect(() => {
    getGenre();
  }, []);

  // GET AUTHOR GENRES
  const getGenreAuthor = async (number) => {
    const data = await axios.get(
      `http://localhost:2020/author/genreId/${number}`
    );
    setAuthor(data.data);
  };

  useEffect(() => {
    getGenreAuthor(1);
  }, []);

  const handleGenre = (genreId) => {
    getGenreAuthor(genreId);
    setGenreId(genreId);
    setSearch("");
  };

  // GET AUTHOR
  const dispatch = useDispatch();
  const handleAuthor = (id) => {
    dispatch(AuthId(id));
  };

  const searchAuthorName = useSelector((item) => item.searchName.searchName);
  useEffect(() => {}, []);

  const [search, setSearch] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:2020/author/search?author=${searchAuthorName}`)
      .then((data) => {
        setSearch(data.data);
      });
  }, [searchAuthorName]);

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
                    className="nav-link "
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
              id={"#ex1-tabs-" + `${genresId}}`}
              role="tabpanel"
              aria-labelledby={"#ex1-tabs-" + `${genresId}}`}
            >
              {search.length ? (
                <div className="row gy-4">
                  {search.map((auth) => (
                    <div
                      className="col-12 col-sm-6 col-md-4 col-lg-3 "
                      onClick={() => handleAuthor(auth.id)}
                    >
                      <Link to="/infoAuthor">
                        <CatCard>
                          <img
                            height="224px"
                            width="295px"
                            src={`http://localhost:2020/${auth.image}`}
                            alt=""
                          />
                          <CardBody>
                            <CardTopImg src={cardTop} alt="" />
                            <CardTitle>
                              {auth.first_name} {auth.last_name}{" "}
                            </CardTitle>
                            <CardDesc>
                              {auth.date_of_birth}-{auth.date_of_death}
                            </CardDesc>
                            <CardBottomImg src={cardBottom} alt="" />
                          </CardBody>
                        </CatCard>
                      </Link>
                    </div>
                  ))}
                </div>
              ) : author.length ? (
                <div className="row gy-4">
                  {author.map((auth) => (
                    <div
                      className="col-12 col-sm-6 col-md-4 col-lg-3 "
                      onClick={() => handleAuthor(auth.id)}
                    >
                      <Link to="/infoAuthor">
                        <CatCard>
                          <img
                            height="224px"
                            width="295px"
                            src={`http://localhost:2020/${auth.image}`}
                            alt=""
                          />
                          <CardBody>
                            <CardTopImg src={cardTop} alt="" />
                            <CardTitle>
                              {auth.first_name} {auth.last_name}{" "}
                            </CardTitle>
                            <CardDesc>
                              {auth.date_of_birth}-{auth.date_of_death}
                            </CardDesc>
                            <CardBottomImg src={cardBottom} alt="" />
                          </CardBody>
                        </CatCard>
                      </Link>
                    </div>
                  ))}
                </div>
              ) : (
                <h2>Author's not found</h2>
              )}
            </div>
          </div>
        </TabWrap>
      </AuthWrap>
    </Containers>
  );
};
