import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Router from "./pages/router";

import Rating from "./screens/Rating";

const App = () => {
  return (
    <BrowserRouter>
      <Rating />
    </BrowserRouter>
  );
};

export default App;