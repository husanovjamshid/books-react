import styled from "styled-components";

export const ProfilWrap = styled.div`
  width: 100%;
  max-width: 175px;
  position: relative;

  @media (max-width: 425px) {
    max-width: 100px;
  }

  @media (max-width: 375px) {
    max-width: 90px;
  }
`;

export const ProfilContent = styled.div`
  margin-top: 63px;
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
`;

export const UploadWrap = styled.div`
  position: absolute;
  display: inline-block;
  bottom: -10px;
  right: 0;
  cursor: pointer;

  @media (max-width: 1100px) {
    right: 10px;
  }

  @media (max-width: 850px) {
    right: 40px;
    bottom: -7px;
  }

  @media (max-width: 425px) {
    right: 20px;
  }

  @media (max-width: 375px) {
    right: 25px;
  }
`;

export const ProfilCamera = styled.img`
  cursor: pointer;
  @media (max-width: 850px) {
    width: 40px;
  }

  @media (max-width: 425px) {
    width: 27px;
  }

  @media (max-width: 375px) {
    width: 24px;
  }
`;

export const ProfilImg = styled.img`
  width: 100%;
  height: 100%;
  max-height: 179px;
  max-width: 179px;
  min-height: 179px;
  min-width: 179px;
  object-fit: cover;
  object-position: center;
  border-radius: 50%;

  @media (max-width: 1100px) {
    min-height: 150px;
    min-width: 150px;
    max-width: 150px;
    max-height: 150px;
  }

  @media (max-width: 850px) {
    min-height: 130px;
    min-width: 130px;
    max-width: 130px;
    max-height: 130px;
  }

  @media (max-width: 425px) {
    min-height: 75px;
    min-width: 75px;
    max-width: 75px;
    max-height: 75px;
  }

  @media (max-width: 375px) {
    min-height: 65px;
    min-width: 65px;
    max-width: 65px;
    max-height: 65px;
  }
`;

export const ProfilInput = styled.input`
  position: absolute;
  margin: 0;
  padding: 0;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  outline: none;
  opacity: 0;
  cursor: pointer;
`;

export const ProfilForm = styled.div`
  width: 100%;
  max-width: 712px;

  @media (max-width: 1100px) {
    max-width: 600px;
  }
`;

export const FormName = styled.input`
  padding: 12px 0 12px 19px;
  width: 100%;
  max-width: 707px;
  background: #f3f6f9;
  border-radius: 4px;
  outline: none;
  border: none;

  &::placeholder {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    color: #464e5f;
  }
`;

export const FormPhone = styled.input`
  padding: 12px 0 12px 19px;
  width: 100%;
  max-width: 339px;
  background: #f3f6f9;
  border-radius: 4px;
  outline: none;
  border: none;
  display: block;

  &::placeholder {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    color: #464e5f;
  }
`;

export const FormLabel = styled.label`
  margin-bottom: 8px;
  margin-top: 22px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 20px;
  display: inline-block;
  color: #464e5f;
`;

export const ProfilTitle = styled.h3`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  color: #212121;
`;
