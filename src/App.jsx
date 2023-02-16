import { Public } from "./pages/Public/Public";
import { globalStyled } from "./globalStyled.js";
import { Private } from "./pages/Private/Private";
import { useDispatch, useSelector } from "react-redux";
import { setToken } from "./redux/Token/tokenAction";
function App() {
  const token = useSelector((item) => item.token.token);
  const dispatch = useDispatch();
  dispatch(setToken(localStorage.getItem("token") || ""));
  return <>{token ? <Private /> : <Public />}</>;
}

export default App;
