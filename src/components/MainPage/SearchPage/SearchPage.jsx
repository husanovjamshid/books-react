import { useRef } from "react";
import {
  MainButton,
  MainInput,
  MainInputTitle,
  MainWrapper,
} from "../main.style";
import search from "../../../assets/img/search.svg";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setSearch } from "../../../redux/SearchName/searchAction";
import { useNavigate } from "react-router-dom";

export const SearchPage = () => {
  const authorName = useRef();
  const dispatch = useDispatch();


  const handleSearch = (evt) => {
    evt.preventDefault();
    dispatch(setSearch(authorName.current.value));
    // navigate("/");
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
