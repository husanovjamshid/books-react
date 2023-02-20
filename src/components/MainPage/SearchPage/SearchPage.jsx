import { useRef } from "react";
import {
  MainButton,
  MainInput,
  MainInputTitle,
  MainWrapper,
} from "../main.style";
import search from "../../../assets/img/search.svg";
import axios from "axios";

export const SearchPage = () => {
  const authorName = useRef();
  const handleSearch = (evt) => {
    evt.preventDefault();
    console.log(authorName.current.value);

    axios
      .get(
        `http://localhost:5000/author/search?author=${authorName.current.value}`
      )
      .then((data) => console.log(data));
    authorName.current.value = "";
  };
  return (
    <>
      <MainWrapper>
        <MainInputTitle>Qidirish</MainInputTitle>
        <form onSubmit={handleSearch}>
          <div className="d-flex gap-3">
            <MainInput
              type="text"
              ref={authorName}
              placeholder="Adiblar, kitoblar, audiolar, maqolalar..."
            />
            <MainButton>
              <img src={search} alt="" /> Izlash
            </MainButton>
          </div>
        </form>
      </MainWrapper>
    </>
  );
};
