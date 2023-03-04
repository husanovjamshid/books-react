import {
  LoginBg,
  LoginHeader,
  LoginImg,
  LoginContent,
  LoginWrap,
  LoginTitle,
  LoginDesc,
  LoginButton,
  InputGroup,
  LoginForm,
  FieldInput,
} from "./signin.style";
import LoginBG from "../../assets/img/login-bg.png";
import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setToken } from "../../redux/Token/tokenAction";
import { setUser } from "../../redux/Users/userAction";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { api } from "../../Api/api";

export const SignIn = () => {
  let emailRef = useRef();
  let passwordRef = useRef();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const users = async (value) => {
    const data = await api.userLogin(value);
    if (data.status === 201) {
      localStorage.setItem("token", data.data.token);
      localStorage.setItem("user", JSON.stringify(data.config.data));
      dispatch(setToken(data.data.token));
      dispatch(setUser(JSON.stringify(data.config.data)));
      navigate("/");
    }
  };

  const handleSubmitLogin = (evt) => {
    evt.preventDefault();

    const value = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };
    users(value);
  };

  return (
    <>
      <LoginHeader>
        <LoginBg>
          <LoginImg src={LoginBG} alt="" />
        </LoginBg>
        <LoginContent>
          <LoginWrap className="mt-5">
            {/* <Formik
              validationSchema={validateSchema}
              initialValues={initialValues}
            > */}
            <LoginForm
              onSubmit={handleSubmitLogin}
              style={{ width: "100%", maxWidth: "330px" }}
            >
              <LoginTitle>Sign in</LoginTitle>
              <LoginDesc>
                Do not you have an account?{" "}
                <Link
                  style={{
                    fontFamily: "Roboto",
                    fontStyle: "normal",
                    fontweight: "400",
                    fontsize: "13px",
                    lineheight: "15px",
                    color: "#549ff9",
                  }}
                  to="/register"
                >
                  Sign up
                </Link>
              </LoginDesc>

              <InputGroup>
                <FieldInput
                  style={{
                    background: "#FFFFFF",
                    width: "100%",
                    maxWidth: "330px",
                    border: "1px solid #B4B4BB",
                    borderRadius: "10px",
                    outline: "none",
                    padding: "10px 0 10px 28px",
                  }}
                  placeholder="Email"
                  type="email"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  ref={emailRef}
                  required
                />
                {/* <ReqSpan>
                  <ErrorMessage name="emailRef" />
                </ReqSpan> */}
              </InputGroup>
              <InputGroup>
                <FieldInput
                  style={{
                    width: "100%",
                    maxWidth: "330px",
                    background: "#FFFFFF",
                    border: "1px solid #B4B4BB",
                    borderRadius: "10px",
                    outline: "none",
                    padding: "10px 0 10px 28px",
                  }}
                  placeholder="Password"
                  type="password"
                  id="exampleInputEmail31"
                  aria-describedby="emailHelp"
                  ref={passwordRef}
                  required
                />
                {/* <ReqSpan>
                  <ErrorMessage name="passwordRef" />
                </ReqSpan> */}
              </InputGroup>

              <LoginButton type="submit">Next step</LoginButton>
            </LoginForm>
            {/* </Formik> */}
          </LoginWrap>
        </LoginContent>
      </LoginHeader>
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
