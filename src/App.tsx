import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { renderRoutes } from "./routes";

function App() {
  return <BrowserRouter>{renderRoutes()}</BrowserRouter>;
}

export default App;
