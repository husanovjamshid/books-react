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
import axios from "axios";
import { useRef } from "react";
// import { Formik, FieldInput, ErrorMessage, Form } from "formik";
// import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setToken } from "../../redux/Token/tokenAction";
import { setUser } from "../../redux/Users/userAction";

export const SignIn = () => {
  let emailRef = useRef();
  let passwordRef = useRef();

  // const axiosRender = async () => {
  //   const data = ;

  //   console.log(data);
  // };

  // const LoginRender = async () => {
  //   axios
  //     .post("https://books.ogaw.uz/user/Login", {
  //       first_name: firstRef.current.value,
  //       last_name: lastRef.current.value,
  //       phone: phoneRef.current.value,
  //       email: emailRef.current.value,
  //       password: passwordRef.current.value,
  //     })
  //     .then((data) => console.log(data))
  //     .catch((err) => console.log(err));
  // };
  // const initialValues = {
  //   emailRef: "",
  //   passwordRef: "",
  // };
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmitLogin = (evt) => {
    evt.preventDefault();
    axios
      .post("https://books.ogaw.uz/user/login", {
        email: emailRef.current.value,
        password: passwordRef.current.value,
      })
      .then((data) => {
        if (data.status === 201) {
          localStorage.setItem("token", data.data.token);
          localStorage.setItem("user", JSON.stringify(data.config.data));
          console.log(data.data);
          dispatch(setToken(data.data.token));
          dispatch(setUser(JSON.stringify(data.config.data)));

          navigate("/");
        }
      })
      .catch((err) => console.log(err));

    // axios.get("https://books.ogaw.uz/genre").then((data) => console.log(data)).catch(err => console.log(err));
  };

  // const validateSchema = Yup.object({
  //   first_name: Yup.string().required("Required firstname!"),
  //   last_name: Yup.string().required("Required lastname!"),
  //   phone: Yup.string().required("Required phone!"),
  //   email: Yup.string()
  //     .required("Required email!")
  //     .email("Enter emailing correctly!"),
  //   password: Yup.string()
  //     .min(4, "Password should not be less than 4 items!")
  //     .max(15, "Password should not be more than 15!")
  //     .required("Required password!"),
  // });

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
    </>
  );
};
