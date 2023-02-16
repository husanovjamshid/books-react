import styled from "styled-components";

export const TitleBox = styled.div`
  width: 100%;
  max-width: 337px;
`;

export const Title = styled.h3`
  position: absolute;
  top: 7%;
  left: 7%;
  font-family: "Rotterburg Stylish FREE";
  font-style: normal;
  font-weight: 400;
  font-size: 61px;
  line-height: 67px;

  color: #d1b89d;
`;

export const MainWrapper = styled.div`
  position: absolute;
  padding: 25px 73px;
  width: 100%;
  max-width: 1030px;
  text-align: center;
  left: 0;
  right: 0;
  bottom: -20%;
  margin: auto;
  background: #ffffff;
  box-shadow: 0px 4px 77px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
`;

export const MainInputTitle = styled.h3`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 48px;
  color: #d1b89d;
`;

export const MainInput = styled.input`
  padding: 12px 0 12px 27px;
  width: 100%;
  max-width: 710px;
  background: #f5f5f5;
  border-radius: 15px;
  outline: none;
  border: none;

  &:placeholder-shown {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: rgba(13, 13, 13, 0.3);
  }
`;

export const MainButton = styled.button`
  background: #c9ac8c;
  padding: 12px 42px;
  border-radius: 15px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #efdac3;
  border: none;
`;
