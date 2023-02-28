import styled from "styled-components";

export const ProfilFormSecurity = styled.div`
  width: 100%;
  max-width: 712px;
  margin: 0 auto;
  margin-top: 63px;
`;

export const FormNameSecurity = styled.input`
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

export const FormButton = styled.button`
  background: #152540;
  border: none;
  width: 100%;
  display: block;
  margin-left: auto;
  margin-top: 60px;
  max-width: 142px;
  border-radius: 4px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  line-height: 20px;
  padding: 12px 20px;
  color: #ffffff;
  margin-bottom: 15px;
`;
