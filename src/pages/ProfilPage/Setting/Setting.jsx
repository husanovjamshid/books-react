import { Containers } from "../../../components/Home/Header/header.style";
import {
  FormButton,
  FormLabel,
  FormLine,
  FormNameOption,
  FormNameSetting,
  ProfilFormSetting,
  ProfilTitle,
  ThemeInput,
  ThemeLabel,
} from "./setting.style";
import './setting.css'

export const Setting = () => {
  return (
    <Containers>
      <ProfilFormSetting>
        <ProfilTitle>Settings</ProfilTitle>
        <form action="">
          <FormLabel htmlFor="lang">Language</FormLabel>

          <FormNameSetting name="lang" id="">
            <FormNameOption value="uz">Uzbek</FormNameOption>
            <FormNameOption value="ru">Russian</FormNameOption>
            <FormNameOption value="eng">English</FormNameOption>
          </FormNameSetting>
          <FormLabel htmlFor="lang">Theme</FormLabel>
          <ThemeInput className="theme" id="btn" type="checkbox" />
          <ThemeLabel htmlFor="btn" className="cont"></ThemeLabel>
          <FormLine></FormLine>
          <FormButton>Save Changes</FormButton>
        </form>
      </ProfilFormSetting>
    </Containers>
  );
};
