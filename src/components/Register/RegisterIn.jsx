import {
  RegisterBg,
  RegisterHeader,
  RegisterImg,
  RegisterContent,
  RegisterWrap,
  RegisterTitle,
  RegisterDesc,
  RegisterButton,
  InputGroup,
  RegisterForm,
  FieldInput,
} from "./signup.style";
import RegisterBG from "../../assets/img/register-bg.png";
import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { api } from "../../Api/api";
import { useDispatch } from "react-redux";
import { setToken } from "../../redux/Token/tokenAction";
import { setUser } from "../../redux/Users/userAction";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const SignUp = () => {
  let firstRef = useRef();
  let lastRef = useRef();
  let phoneRef = useRef();
  let emailRef = useRef();
  let passwordRef = useRef();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const users = async (value) => {
    const data = await api.userRegister(value);
    if (data.status === 201) {
      localStorage.setItem("token", data.data.token);
      localStorage.setItem("user", JSON.stringify(data.config.data));
      console.log(data.data);
      dispatch(setToken(data.data.token));
      dispatch(setUser(JSON.stringify(data.config.data)));
      navigate("/");
    }
  };

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

    // axios.get("http://localhost:5000/genre").then((data) => console.log(data)).catch(err => console.log(err));
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
      <RegisterHeader>
        <RegisterBg>
          <RegisterImg src={RegisterBG} alt="" />
        </RegisterBg>
        <RegisterContent>
          <RegisterWrap className="mt-5">
            {/* <Formik
              validationSchema={validateSchema}
              initialValues={initialValues}
            > */}
            <RegisterForm
              onSubmit={handleSubmit}
              style={{ width: "100%", maxWidth: "330px" }}
            >
              <RegisterTitle>Sign up</RegisterTitle>
              <RegisterDesc>
                Already have an account?{" "}
                <Link
                  style={{
                    fontFamily: "Roboto",
                    fontStyle: "normal",
                    fontweight: "400",
                    fontsize: "13px",
                    lineheight: "15px",
                    color: "#549ff9",
                  }}
                  to="/"
                >
                  Sign in
                </Link>
              </RegisterDesc>
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
                  placeholder="First name"
                  type="text"
                  aria-describedby="emailHelp"
                  ref={firstRef}
                />
                {/* <ReqSpan>
                  <ErrorMessage name="firstRef" />
                </ReqSpan> */}
              </InputGroup>
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
                  placeholder="Last name"
                  type="text"
                  aria-describedby="emailHelp"
                  ref={lastRef}
                />
                {/* <ReqSpan>
                  <ErrorMessage name="lastRef" />
                </ReqSpan> */}
              </InputGroup>
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
                  placeholder="Phone number"
                  type="number"
                  aria-describedby="emailHelp"
                  ref={phoneRef}
                  defaultValue="999104910"
                />
                {/* <ReqSpan>
                  <ErrorMessage name="phoneRef" />
                </ReqSpan> */}
              </InputGroup>

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

              <RegisterButton type="submit">Next step</RegisterButton>
            </RegisterForm>
            {/* </Formik> */}
          </RegisterWrap>
        </RegisterContent>
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
      </RegisterHeader>
    </>
  );
};
