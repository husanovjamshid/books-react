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

export const BooksPage = () => {
  const [genre, setGenre] = useState([]);
  const [book, setBook] = useState([]);
  const [genresId, setGenreId] = useState(1);

  const getGenre = async () => {
    const data = await axios.get("http://localhost:5000/genre");
    setGenre(data.data);
  };

  useEffect(() => {
    getGenre();
  }, []);

  const getGenreAuthor = async (id) => {
    const data = await axios.get(`http://localhost:5000/book/genreId/${id}`);
    setBook(data.data);
    console.log(data.data);
  };
  

  useEffect(() => {
    getGenreAuthor(1);
  }, []);

  const handleGenre = (genreId) => {
    getGenreAuthor(genreId);
    setGenreId(genreId);
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
              id={"ex1-tabs-" + `${genresId}}`}
              role="tabpanel"
              aria-labelledby={"ex1-tabs-" + `${genresId}}`}
            >
              {book.length ? (
                <div className="row gy-4">
                  {book.map((item) => (
                    <div className="col-md-2 text-start">
                      <div>
                        <BookImg
                          src={`http://localhost:5000/${item.image}`}
                          alt=""
                        />
                        <BookTitleName>{item.title}</BookTitleName>
                        <BookAuthorName>O’tkir Hoshimov</BookAuthorName>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </TabWrap>
      </AuthWrap>
    </Containers>
  );
};
