import styled from "styled-components";

export const ProfilWrap = styled.div`
  width: 100%;
  max-width: 175px;
  position: relative;
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
`;

export const ProfilCamera = styled.img`
  cursor: pointer;
`;

export const ProfilImg = styled.img`
  max-width: 174.99px;
  max-height: 175px;
  min-width: 174.99px;
  min-height: 175px;
  border-radius: 50%;
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
