import { Public } from "./pages/Public/Public";
import { PrivatePage } from "./pages/Private/PrivatePage";
import { useDispatch, useSelector } from "react-redux";
import { setToken } from "./redux/Token/tokenAction";

function App() {
  const dispatch = useDispatch();
  dispatch(setToken(localStorage.getItem("token") || ""));
  const token = useSelector((item) => item.token.token);
  return <>{token ? <PrivatePage /> : <Public />}</>;
}


export default App;
