import styled from "styled-components";

export const BookHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const BookBg = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  max-width: 50%;
  background: rgba(243, 243, 243, 0.93);
`;

export const BookContent = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  max-width: 50%;
  background-color: #fff;
`;

export const BookImg = styled.img`
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

export const BookWrap = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  align-self: center;
  align-content: center;
  justify-content: center;
`;

export const BookForm = styled.form`
  width: 100%;
  max-width: 330px;
`;

export const BookTitle = styled.h3`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 900;
  font-size: 36px;
  line-height: 51px;
  color: #000000;
`;

export const BookDesc = styled.p`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 15px;
  color: #000000;
`;

// export const BookLink = styled.a`

// `;

export const FieldInputBook = styled.input`
  background: "#FFFFFF";
  width: 100%;
  max-width: 330px;
  border: 1px solid #b4b4bb;
  border-radius: 10px;
  outline: none;
  padding: 10px 0 10px 28px;
`;

export const FieldSelect = styled.select`
  background: "#FFFFFF";
  width: 100%;
  max-width: 330px;
  border: 1px solid #b4b4bb;
  border-radius: 10px;
  outline: none;
  padding: 10px 0 10px 28px;
`;

export const ReqSpan = styled.span`
  color: red;
  position: absolute;
  display: block;
`;

export const BookButton = styled.button`
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
