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
  @media (max-width: 992px) {
    font-size: 51px;
  }
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

  @media (max-width: 1150px) {
    max-width: 992px;
  }

  @media (max-width: 1100px) {
    max-width: 900px;
  }

  @media (max-width: 1015px) {
    max-width: 850px;
  }

  @media (max-width: 992px) {
    max-width: 800px;
  }

  @media (max-width: 920px) {
    max-width: 750px;
  }

  @media (max-width: 860px) {
    max-width: 700px;
  }

  @media (max-width: 800px) {
    max-width: 650px;
  }

  @media (max-width: 768px) {
    max-width: 600px;
  }
`;

export const MainInputTitle = styled.h3`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 48px;
  color: #d1b89d;

  @media (max-width: 800px) {
    font-size: 27px;
  }
`;

export const MainInput = styled.input`
  padding: 12px 0 12px 27px;
  width: 100%;
  max-width: 710px;
  background: #f5f5f5;
  border-radius: 15px;
  outline: none;
  border: 1px solid transparent;

  @media (max-width: 1150px) {
    max-width: 670px;
  }

  @media (max-width: 1100px) {
    max-width: 560px;
  }

  @media (max-width: 1015px) {
    max-width: 550px;
  }

  @media (max-width: 992px) {
    max-width: 500px;
  }

  @media (max-width: 920px) {
    max-width: 450px;
  }

  @media (max-width: 860px) {
    max-width: 400px;
  }

  @media (max-width: 800px) {
    max-width: 450px;
  }

  @media (max-width: 768px) {
    max-width: 420px;
    padding: 10px 0 10px 25px;
  }

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
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 12px 42px;
  border-radius: 15px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  /* line-height: 24px; */
  color: #efdac3;
  border: none;

  @media (max-width: 1015px) {
    padding: 10px 25px;
  }

  @media (max-width: 992px) {
    padding: 9px 20px;
  }

  @media (max-width: 920px) {
    padding: 9px 20px;
  }

  @media (max-width: 800px) {
    padding: 12px;
  }

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

export const SearchTitle = styled.p`
  margin: 0;

  @media (max-width: 800px) {
    display: none;
  }
`;

export const ButtonImg = styled.img`
  @media (max-width: 992px) {
    width: 20px;
  }
`;
