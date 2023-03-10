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
} from "./addBook.style";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import "../AddAuthor/fileupload.css";
import addFile from "../../assets/img/add-file.svg";
import { useDispatch, useSelector } from "react-redux";
import { setToken } from "../../redux/Token/tokenAction";
import { Containers } from "../../components/Home/Header/header.style";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BoxWraps } from "../../app.style";

export const AddBook = () => {
  let title = useRef();
  let page = useRef();
  let year = useRef();
  let price = useRef();
  let genre_id = useRef();
  let author_id = useRef();
  let description = useRef();
  let imgRef = useRef();

  const token = useSelector((item) => item.token.token);
  const dispatch = useDispatch();
  dispatch(setToken(localStorage.getItem("token") || ""));

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const formData = new FormData();
    formData.append("title", title.current.value);
    formData.append("page", page.current.value);
    formData.append("year", year.current.value);
    formData.append("price", price.current.value);
    formData.append("genre_id", genre_id.current.value);
    formData.append("author_id", author_id.current.value);
    formData.append("description", description.current.value);
    formData.append("image", imgRef.current.files[0]);

    axios
      .post("https://books.ogaw.uz/book", formData, {
        headers: { Authorization: token },
      })
      .then((data) => {
        if (data.status === 201) {
          toast.success("Book added successfully 😉");
        }
      })
      .catch((err) => toast.error("Something went wrong 🤔"));
  };

  const [bookAuthor, setBookAuthor] = useState([]);
  const getAuthor = async (id) => {
    const data = await axios.get(`https://books.ogaw.uz/author/genreId/${id}`);
    setBookAuthor(data.data);
  };

  const handleChangeSelect = (evt) => {
    getAuthor(evt.target.value);
  };

  const [genre, setGenre] = useState([]);
  const getGenre = async () => {
    const data = await axios.get("https://books.ogaw.uz/genre");
    setGenre(data.data);
  };

  useEffect(() => {
    getGenre();
  }, []);

  return (
    <>
      <BookHeader>
        <BookBg>
          <BoxWraps className="file-upload">
            <BoxWraps className="image-upload-wrap">
              <input
                className="file-upload-input"
                type="file"
                accept="image/*"
                ref={imgRef}
              />
              <BoxWraps className="drag-text">
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
              </BoxWraps>
            </BoxWraps>
            <BoxWraps className="file-upload-content">
              <img className="file-upload-image" src="#" alt="your image" />
              <BoxWraps className="image-title-wrap">
                <button
                  type="button"
                  // onClick="removeUpload()"
                  className="remove-image"
                >
                  Remove <span className="image-title">Uploaded Image</span>
                </button>
              </BoxWraps>
            </BoxWraps>
          </BoxWraps>
        </BookBg>
        <BookContent>
          <Link
            className="btn btn-secondary rounded-pill mt-3 ms-3 position"
            to="/"
          >
            Back
          </Link>
          <BookWrap>
            <BookForm
              onSubmit={handleSubmit}
              style={{ width: "100%", maxWidth: "330px" }}
            >
              <BookTitle>Add book</BookTitle>

              <InputGroup>
                <FieldInputBook
                  placeholder="Title"
                  type="text"
                  aria-describedby="emailHelp"
                  ref={title}
                />
              </InputGroup>
              <InputGroup>
                <FieldInputBook
                  placeholder="Pages"
                  type="number"
                  aria-describedby="emailHelp"
                  ref={page}
                />
              </InputGroup>
              <InputGroup>
                <FieldInputBook
                  placeholder="Year"
                  type="number"
                  aria-describedby="emailHelp"
                  ref={year}
                />
              </InputGroup>

              <InputGroup>
                <FieldInputBook
                  placeholder="Price"
                  type="number"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  ref={price}
                />
              </InputGroup>
              <InputGroup>
                <FieldSelect
                  onChange={handleChangeSelect}
                  ref={genre_id}
                  className="form-select"
                  aria-label="Default select example"
                >
                  <option disabled selected>
                    Genre
                  </option>
                  {genre?.map((item) => (
                    <option value={item.id}>{item.name}</option>
                  ))}
                </FieldSelect>
              </InputGroup>
              <InputGroup>
                <FieldSelect
                  ref={author_id}
                  className="form-select"
                  aria-label="Default select example"
                >
                  <option disabled selected>
                    Author
                  </option>

                  {bookAuthor.map((item) => (
                    <option value={item.id}>
                      {item.first_name} {item.last_name}
                    </option>
                  ))}
                </FieldSelect>
              </InputGroup>
              <InputGroup>
                <TextSelect ref={description} placeholder="Bio"></TextSelect>
              </InputGroup>

              <BookButton type="submit">Create</BookButton>
            </BookForm>
          </BookWrap>
        </BookContent>
      </BookHeader>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <ToastContainer />
    </>
  );
};
