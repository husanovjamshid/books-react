import { Containers } from "../Home/Header/header.style";
import {
  AuthTitle,
  AuthWrap,
  BookAuthorName,
  BookImg,
  BookTitleName,
  TabWrap,
} from "./book.style";
import "../AuthorCategory/category.css";
import { HeroPage } from "../Home/Hero/HeroPage";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { BookId } from "../../redux/BookId/bookAciton";
import { BoxWraps } from "../../app.style";

export const BooksPage = () => {
  const [genre, setGenre] = useState([]);
  const [book, setBook] = useState([]);
  const [genresId, setGenreId] = useState(1);

  const getGenre = async () => {
    const data = await axios.get("https://books.ogaw.uz/genre");
    setGenre(data.data);
  };

  useEffect(() => {
    getGenre();
  }, []);

  const getGenreAuthor = async (id) => {
    const data = await axios.get(`https://books.ogaw.uz/book/genreId/${id}`);
    setBook(data.data);
  };

  useEffect(() => {
    getGenreAuthor(1);
  }, []);

  const handleGenre = (genreId) => {
    getGenreAuthor(genreId);
    setGenreId(genreId);
    setSearch("");
  };

  const dispatch = useDispatch();
  const handleBook = (id) => {
    dispatch(BookId(id));
  };

  const searchAuthorName = useSelector((item) => item.searchName.searchName);

  const [search, setSearch] = useState([]);

  useEffect(() => {
    axios
      .get(`https://books.ogaw.uz/book/search?book=${searchAuthorName}`)
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

          <BoxWraps className="tab-content" id="ex1-content">
            <BoxWraps
              className="tab-pane fade show active"
              id={"ex1-tabs-" + `${genresId}}`}
              role="tabpanel"
              aria-labelledby={"ex1-tabs-" + `${genresId}}`}
            >
              {search.length ? (
                <BoxWraps className="row gy-4">
                  {search.map((item) => (
                    <BoxWraps
                      onClick={() => handleBook(item.id)}
                      className="col-12 col-sm-6 col-md-4 col-lg-3 text-start d-flex justify-content-center "
                    >
                      <Link to="/infoBook">
                        <BoxWraps>
                          <BookImg
                            src={`https://books.ogaw.uz/${item.image}`}
                            alt=""
                          />
                          <BookTitleName>{item.title}</BookTitleName>
                          <BookAuthorName>O???tkir Hoshimov</BookAuthorName>
                        </BoxWraps>
                      </Link>
                    </BoxWraps>
                  ))}
                </BoxWraps>
              ) : book.length ? (
                <BoxWraps className="row gy-4">
                  {book.map((item) => (
                    <BoxWraps
                      onClick={() => handleBook(item.id)}
                      className="col-12 col-sm-6 col-md-4 col-lg-3 text-start d-flex justify-content-center"
                    >
                      <Link to="/infoBook">
                        <BoxWraps>
                          <BookImg
                            src={`https://books.ogaw.uz/${item.image}`}
                            alt=""
                          />
                          <BookTitleName>{item.title}</BookTitleName>
                          <BookAuthorName>O???tkir Hoshimov</BookAuthorName>
                        </BoxWraps>
                      </Link>
                    </BoxWraps>
                  ))}
                </BoxWraps>
              ) : (
                <h2>Book's not found</h2>
              )}
            </BoxWraps>
          </BoxWraps>
        </TabWrap>
      </AuthWrap>
    </Containers>
  );
};
