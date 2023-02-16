// import { Box } from "../../../app.style";
import { Containers, HeaderBrand } from "./header.style";
import { Link, NavLink } from "react-router-dom";

export const HeaderPage = () => {
  return (
    <>
      <header>
        <nav className="py-3 navbar-expand-lg ">
          <Containers>
            <div className="d-flex justify-content-between">
              <button
                className="navbar-toggler"
                type="button"
                data-mdb-toggle="collapse"
                data-mdb-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <i className="fas fa-bars" />
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <HeaderBrand className="navbar-brand m-0 mt-lg-0" href="#">
                  Badiiyat
                </HeaderBrand>
              </div>
              <div className="d-flex gap-3 align-items-center">
                <ul className="d-flex list-unstyled gap-3 m-0 mb-lg-0">
                  <li className="nav-item">
                    <NavLink
                      style={(isActive) =>
                        isActive
                          ? {
                              fontFamily: "Poppins",
                              fontStyle: "normal",
                              fontWeight: "400",
                              fontSize: "16px",
                              lineHeight: "144.4%",
                              color: "#0D0D0D",
                            }
                          : {
                              fontFamily: "Poppins",
                              fontStyle: "normal",
                              fontWeight: "400",
                              fontSize: "16px",
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
                              fontSize: "16px",
                              lineHeight: "144.4%",
                              color: "#0D0D0D",
                            }
                          : {
                              fontFamily: "Poppins",
                              fontStyle: "normal",
                              fontWeight: "400",
                              fontSize: "16px",
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

                <div className="dropdown">
                  <a
                    className="dropdown-toggle d-flex align-items-center hidden-arrow"
                    href="#"
                    id="navbarDropdownMenuAvatar"
                    role="button"
                    data-mdb-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <img
                      src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                      className="rounded-circle"
                      height={35}
                      width={35}
                      alt="Black and White Portrait of a Man"
                      loading="lazy"
                    />
                  </a>
                  <ul
                    className="dropdown-menu dropdown-menu-end"
                    aria-labelledby="navbarDropdownMenuAvatar"
                  >
                    <li>
                      <a className="dropdown-item" href="#">
                        Profile
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Add author
                      </a>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/AddBook">
                        Add book 
                      </Link>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Log out
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Containers>
        </nav>
      </header>
    </>
  );
};
