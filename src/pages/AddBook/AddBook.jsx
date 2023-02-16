import {
  BookBg,
  BookHeader,
  BookContent,
  BookWrap,
  BookTitle,
  BookButton,
  InputGroup,
  BookForm,
  FieldInputBook,
  FieldSelect,
} from "./book.style";
import axios from "axios";
import { useRef } from "react";
import "../../components/MainPage/main.css";
import addFile from "../../assets/img/add-file.svg";

import { api } from "../../Api/api";

export const AddBook = () => {
  let firstRef = useRef();
  let lastRef = useRef();
  let phoneRef = useRef();
  let emailRef = useRef();
  let passwordRef = useRef();

  // const users = async (value) => {
  //   const data = await api.userBook(value);
  //   if (data.status === 201) {
  //     localStorage.setItem("token", data.data.token);
  //     localStorage.setItem("user", JSON.stringify(data.config.data));
  //     dispatch(setToken(data.data.token));
  //     console.log(dispatch(setToken(data.data.token)));
  //     navigate('/')
  //   }
  // };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    const values = {
      first_name: firstRef.current.value,
      last_name: lastRef.current.value,
      phone: phoneRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    users(values);
  };

  return (
    <>
      <BookHeader>
        <BookBg>
          <div className="file-upload">
            <div className="image-upload-wrap">
              <input
                className="file-upload-input"
                type="file"
                onchange="readURL(this);"
                accept="image/*"
              />
              <div className="drag-text">
                <img src={addFile} alt="" />
                <p>Click or drag file to this area to upload</p>
              </div>
            </div>
            <div className="file-upload-content">
              <img className="file-upload-image" src="#" alt="your image" />
              <div className="image-title-wrap">
                <button
                  type="button"
                  onclick="removeUpload()"
                  className="remove-image"
                >
                  Remove <span className="image-title">Uploaded Image</span>
                </button>
              </div>
            </div>
          </div>
        </BookBg>
        <BookContent>
          <BookWrap>
            <BookForm
              onSubmit={handleSubmit}
              style={{ width: "100%", maxWidth: "330px" }}
            >
              <BookTitle>Add author</BookTitle>

              <InputGroup>
                <FieldInputBook
                  placeholder="First name"
                  type="text"
                  aria-describedby="emailHelp"
                  ref={firstRef}
                />
              </InputGroup>
              <InputGroup>
                <FieldInputBook
                  placeholder="Last name"
                  type="text"
                  aria-describedby="emailHelp"
                  ref={lastRef}
                />
              </InputGroup>
              <InputGroup>
                <FieldInputBook
                  placeholder="Date of birth"
                  type="text"
                  aria-describedby="emailHelp"
                  ref={phoneRef}
                />
              </InputGroup>

              <InputGroup>
                <FieldInputBook
                  placeholder="Date of death"
                  type="text"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  ref={emailRef}
                />
              </InputGroup>
              <InputGroup>
                <FieldInputBook
                  placeholder="Country"
                  type="text"
                  id="exampleInputEmail31"
                  aria-describedby="emailHelp"
                  ref={passwordRef}
                />
              </InputGroup>
              <InputGroup>
                <FieldSelect
                  className="form-select"
                  aria-label="Default select example"
                >
                  <option selected>Genre</option>
                  <option value={1}>Temuriylar davri</option>
                  <option value={2}>Jadid adabiyoti</option>
                  <option value={3}>Sovet davri</option>
                  <option value={4}>Mustaqillik davri</option>
                </FieldSelect>
              </InputGroup>

              <BookButton type="submit">Create</BookButton>
            </BookForm>
          </BookWrap>
        </BookContent>
      </BookHeader>
    </>
  );
};
