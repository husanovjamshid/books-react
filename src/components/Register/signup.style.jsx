import styled from "styled-components";

export const RegisterHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const RegisterBg = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  max-width: 50%;
  background-color: #c9ac8c;
`;

export const RegisterContent = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  max-width: 50%;
  background-color: #fff;
`;

export const RegisterImg = styled.img`
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  max-width: 500px;
  height: 500px;
`;

export const RegisterWrap = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  align-self: center;
  align-content: center;
  justify-content: center;
`;

export const RegisterForm = styled.form`
  width: 100%;
  max-width: 330px;
`;

export const RegisterTitle = styled.h3`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 900;
  font-size: 36px;
  line-height: 51px;
  color: #000000;
`;

export const RegisterDesc = styled.p`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 15px;
  color: #000000;
`;

// export const RegisterLink = styled.a`

// `;

export const FieldInput = styled.input``;

export const ReqSpan = styled.span`
  color: red;
  position: absolute;
  display: block;
`;

export const RegisterButton = styled.button`
  background: #152540;
  width: 100%;
  max-width: 328px;
  display: block;
  border-radius: 99px;
  padding: 5px 20px;
  font-family: "Red Hat Display";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 36px;
  margin-top: 34px;
  color: #ffffff;
  border: none;
`;

export const InputGroup = styled.div`
  margin-bottom: 30px;
  position: relative;
`;
