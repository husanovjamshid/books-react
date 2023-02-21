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
  TextSelect,
} from "./author.style";
import axios from "axios";
import { useRef } from "react";
import "./fileupload.css";
import addFile from "../../assets/img/add-file.svg";
import { useDispatch, useSelector } from "react-redux";
import { setToken } from "../../redux/Token/tokenAction";
import { Containers } from "../../components/Home/Header/header.style";
import { Link } from "react-router-dom";

export const AddAuthors = () => {
  let firstRef = useRef();
  let lastRef = useRef();
  let birthRef = useRef();
  let deathRef = useRef();
  let countryRef = useRef();
  let genreRef = useRef();
  let bioRef = useRef();
  let imgRef = useRef();

  const token = useSelector((item) => item.token.token);
  const dispatch = useDispatch();
  dispatch(setToken(localStorage.getItem("token") || ""));

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const formData = new FormData();
    formData.append("first_name", firstRef.current.value);
    formData.append("last_name", lastRef.current.value);
    formData.append("date_of_birth", birthRef.current.value);
    formData.append("date_of_death", deathRef.current.value);
    formData.append("country", countryRef.current.value);
    formData.append("genre_id", genreRef.current.value);
    formData.append("bio", bioRef.current.value);
    formData.append("image", imgRef.current.files[0]);

    axios
      .post("http://localhost:5000/author", formData, {
        headers: { Authorization: token },
      })
      .then((data) => console.log(data));
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
                accept="image/*"
                ref={imgRef}
              />
              <div className="drag-text">
                {/* {sendFile ? (
                  <img
                    style={{
                      width: "100%",
                      height: "100%",
                      position: "absolute",
                      top: "0",
                      left: "0",
                      bottom: "0",
                      right: "0",
                    }}
                    src={sendFile}
                    alt=""
                  />
                ) : (
                  ""
                )} */}
                <img src={addFile} alt="" />
                <p>Click or drag file to this area to upload</p>
              </div>
            </div>
            <div className="file-upload-content">
              <img className="file-upload-image" src="#" alt="your image" />
              <div className="image-title-wrap">
                <button
                  type="button"
                  // onClick="removeUpload()"
                  className="remove-image"
                >
                  Remove <span className="image-title">Uploaded Image</span>
                </button>
              </div>
            </div>
          </div>
        </BookBg>
        <BookContent>
          <Link className="btn btn-secondary rounded-pill mt-3 ms-3 position-absolute" to="/" >Back</Link>
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
                  type="number"
                  aria-describedby="emailHelp"
                  ref={birthRef}
                />
              </InputGroup>

              <InputGroup>
                <FieldInputBook
                  placeholder="Date of death"
                  type="number"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  ref={deathRef}
                />
              </InputGroup>
              <InputGroup>
                <FieldInputBook
                  placeholder="Country"
                  type="text"
                  id="exampleInputEmail31"
                  aria-describedby="emailHelp"
                  ref={countryRef}
                />
              </InputGroup>
              <InputGroup>
                <FieldSelect
                  ref={genreRef}
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
              <InputGroup>
                <TextSelect ref={bioRef} placeholder="Bio"></TextSelect>
              </InputGroup>

              <BookButton type="submit">Create</BookButton>
            </BookForm>
          </BookWrap>
        </BookContent>
      </BookHeader>
    </>
  );
};
