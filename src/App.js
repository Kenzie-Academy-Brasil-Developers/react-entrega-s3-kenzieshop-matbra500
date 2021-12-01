import "./App.css";
import GlobalStyles from "./styles/global";
import { Title } from "./components/Title";
import Routes from "./routes";

function App() {
  return (
    <>
      <GlobalStyles />
      <Title />
      <h1>Kenzie Games</h1>
      <Routes />
    </>
  );
}

export default App;
