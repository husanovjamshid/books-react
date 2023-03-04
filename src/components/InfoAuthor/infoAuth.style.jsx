import styled from "styled-components";

export const InfoAuthWrap = styled.div`
  /* margin-top: 100px; */
  display: flex;
  gap: 25px;

  @media (max-width: 992px) {
    gap: 0;
    display: flex;
    flex-direction: column;
  }
`;

export const InfoAuthorBox = styled.div`
  width: 100%;
  max-width: 671px;
  margin-top: 20px;
  overflow-x: hidden;

  @media (max-width: 992px) {
    max-width: 100%;
  }
`;

export const InforAuthLine = styled.span`
  display: block;
  width: 22px;
  height: 4px;
  background-color: #d1b89d;
`;

export const AuthName = styled.h3`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 48px;
  line-height: 72px;
  color: #d1b89d;

  @media (max-width: 992px) {
    font-size: 45px;
    line-height: 65px;
  }

  @media (max-width: 500px) {
    font-size: 35px;
    line-height: 40px;
    margin-bottom: 20px;
  }

  @media (max-width: 420px) {
    font-size: 25px;
  }
`;

export const AuthInfoDesc = styled.p`
  font-family: ui-sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: rgba(13, 13, 13, 0.8);
`;

export const InfoAuthText = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  margin: 0;
  color: rgba(13, 13, 13, 0.6);
`;

export const InfoAuthBirth = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 39px;
  line-height: 144.4%;
  margin: 0;
  color: #d1b89d;
`;

export const InfoAuthImg = styled.img`
  width: 100%;
  min-width: 455px;
  max-height: 600px;
  height: 100%;
  border-radius: 20px;
  object-fit: cover;
  /* object-position: center; */

  @media (max-width: 992px) {
    display: block;
    margin: 0 auto;
  }

  @media (max-width: 500px) {
    min-width: 100%;
    max-width: 400px;
  }
`;

export const BookImg = styled.img`
  max-width: 190px;
  max-height: 283px;
  min-width: 190px;
  min-height: 283px;
  border-radius: 15px;
`;

export const BookList = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const BookItem = styled.li`
  width: 100%;
  max-width: 190px;
`;

export const BookTitleName = styled.h3`
  margin: 0;
  margin-top: 12px;
  /* margin-bottom: 6px; */
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  color: #000000;
`;

export const BookAuthorName = styled.p`
  margin: 0;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: rgba(13, 13, 13, 0.6);
`;

export const AuthorNovel = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 31px;
  line-height: 46px;
  color: #d1b89d;
  margin: 0;
`;

export const BooksList = styled.div`
  margin-top: 100px;
  margin-bottom: 10px;
`;
