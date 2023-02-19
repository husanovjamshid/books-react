import { Containers } from "../../../components/Home/Header/header.style";
import { ProfilTitle } from "../Profil/profil.style";
import {
  FormButton,
  FormLabel,
  FormNameSecurity,
  ProfilFormSecurity,
} from "./security.style";

export const Security = () => {
  return (
    <Containers>
      <ProfilFormSecurity>
        <ProfilTitle>Change Or Recover Your Password:</ProfilTitle>
        <form action="">
          <FormLabel htmlFor="email">Email</FormLabel>
          <FormNameSecurity type="email" id="email" placeholder="Email" />
          <FormLabel htmlFor="password">Current password</FormLabel>
          <FormNameSecurity
            type="password"
            id="password"
            placeholder="Password"
          />
          <FormLabel htmlFor="newpassword">New Password</FormLabel>
          <FormNameSecurity
            type="password"
            id="newpassword"
            placeholder="New Password"
          />

          <FormButton>Save Changes</FormButton>
        </form>
      </ProfilFormSecurity>
    </Containers>
  );
};
