import { useRef } from "react";
import {
  ButtonImg,
  MainButton,
  MainInput,
  MainInputTitle,
  MainWrapper,
  SearchTitle,
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
    authorName.current.value = "";
  };
  return (
    <>
      <MainWrapper>
        <MainInputTitle>Qidirish</MainInputTitle>
        <form onSubmit={handleSearch}>
          <div className="d-flex gap-3 align-items-center">
            <MainInput
              type="text"
              ref={authorName}
              placeholder="Adiblar, kitoblar, audiolar, maqolalar..."
            />
            <MainButton>
              <ButtonImg src={search} alt="" />{" "}
              <SearchTitle>Izlash</SearchTitle>
            </MainButton>
          </div>
        </form>
      </MainWrapper>
    </>
  );
};
