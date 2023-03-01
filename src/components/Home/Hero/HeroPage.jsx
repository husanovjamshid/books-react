import { Header } from "/src/components/Home/Header/Header.jsx";
import SimpleSlider from "../../MainPage/MainPage";

export const HeroPage = () => {
  return (
    <>
      <Header />
      <div style={{ marginTop: "100px" }}>
        <SimpleSlider />
      </div>
    </>
  );
};
