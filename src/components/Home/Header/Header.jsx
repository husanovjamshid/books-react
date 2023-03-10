// import { Box } from "../../../app.style";
import { Containers, HeaderBrand, HeaderImg, ImgWrap, SiteHeader } from "./header.style";
import { Link, NavLink, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../../redux/Users/userAction";
import { useEffect, useState } from "react";
import avatar from "../../../assets/img/avloniy.png";

import axios from "axios";
import { setToken } from "../../../redux/Token/tokenAction";
import { BoxWraps } from "../../../app.style";

export const Header = () => {
  const token = useSelector((item) => item.token.token);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(setToken(localStorage.removeItem("token")));

    navigate("/");
  };

  const [users, setUsers] = useState([]);
  dispatch(setToken(localStorage.getItem("token") || ""));
  useEffect(() => {
    axios
      .get("https://books.ogaw.uz/user/me", {
        headers: { Authorization: token },
      })
      .then((data) => setUsers(data.data));
  }, []);

  return (
    <>
      <SiteHeader>
        <nav className="py-3 navbar-expand-lg fixed-top bg-white shadow">
          <Containers>
            <BoxWraps className="d-flex justify-content-between">
              {/* <button
                className="navbar-toggler"
                type="button"
                data-mdb-toggle="collapse"
                data-mdb-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <i className="fas fa-bars" />
              </button> */}
              <BoxWraps
               
              >
                <Link to="/">
                  <HeaderBrand className="navbar-brand m-0 mt-lg-0">
                    Books
                  </HeaderBrand>
                </Link>
              </BoxWraps>
              <BoxWraps className="d-flex gap-3 align-items-center justify-content-end">
                <ul className="d-flex list-unstyled gap-3 m-0 mb-lg-0">
                  <li className="nav-item">
                    <NavLink
                      style={(isActive) =>
                        isActive
                          ? {
                              fontFamily: "Poppins",
                              fontStyle: "normal",
                              fontWeight: "400",
                              fontSize: "15px",
                              lineHeight: "144.4%",
                              color: "#0D0D0D",
                            }
                          : {
                              fontFamily: "Poppins",
                              fontStyle: "normal",
                              fontWeight: "400",
                              fontSize: "15px",
                              lineHeight: "144.4%",
                              color: "red",
                            }
                      }
                      to="/"
                    >
                      Bosh sahifa
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      style={(isActive) =>
                        isActive
                          ? {
                              fontFamily: "Poppins",
                              fontStyle: "normal",
                              fontWeight: "400",
                              fontSize: "15px",
                              lineHeight: "144.4%",
                              color: "#0D0D0D",
                            }
                          : {
                              fontFamily: "Poppins",
                              fontStyle: "normal",
                              fontWeight: "400",
                              fontSize: "15px",
                              lineHeight: "144.4%",
                              color: "red",
                            }
                      }
                      to="/books"
                    >
                      Kitoblar
                    </NavLink>
                  </li>
                </ul>

                <BoxWraps className="dropdown">
                  <a
                    className="dropdown-toggle d-flex align-items-center hidden-arrow"
                    href="#"
                    id="navbarDropdownMenuAvatar"
                    role="button"
                    data-mdb-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <ImgWrap>
                      <HeaderImg
                        src={
                          users.image
                            ? `https://books.ogaw.uz/${users.image}`
                            : `${avatar}`
                        }
                        className="rounded-circle"
                        alt="Black and White Portrait of a Man"
                        loading="lazy"
                      />
                    </ImgWrap>
                  </a>
                  <ul
                    className="dropdown-menu dropdown-menu-end"
                    aria-labelledby="navbarDropdownMenuAvatar"
                  >
                    <li>
                      <Link className="dropdown-item" to="/profile">
                        Profile
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/AddAuthor">
                        Add author
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/AddBook">
                        Add book
                      </Link>
                    </li>
                    <li>
                      <p
                        style={{ cursor: "pointer" }}
                        onClick={handleLogout}
                        className="dropdown-item"
                      >
                        Log out
                      </p>
                    </li>
                  </ul>
                </BoxWraps>
              </BoxWraps>
            </BoxWraps>
          </Containers>
        </nav>
      </SiteHeader>
    </>
  );
};
