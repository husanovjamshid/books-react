import { Header } from "/src/components/Home/Header/Header.jsx";
import SimpleSlider from "../../MainPage/MainPage";
import { BoxWraps } from "../../../app.style";

export const HeroPage = () => {
  return (
    <>
      <Header />
      <BoxWraps style={{ marginTop: "100px" }}>
        <SimpleSlider />
      </BoxWraps>
    </>
  );
};
