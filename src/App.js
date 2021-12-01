import "./App.css";
import GlobalStyles from "./styles/global";
import { Title } from "./components/Title";
import Routes from "./routes";
import { useHistory } from "react-router";

function App() {
  const history = useHistory()
  return (
    <>
      <GlobalStyles />
      <Title />
      <h1 onClick={history.push('/')}>Kenzie Games</h1>
      <Routes />
    </>
  );
}

export default App;
