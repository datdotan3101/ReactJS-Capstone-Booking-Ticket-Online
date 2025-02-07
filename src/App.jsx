import { BrowserRouter, Routes } from "react-router-dom";
import "./App.css";
import { renderHeader } from "./route";

function App() {
  return (
    <BrowserRouter>
      <Routes>{renderHeader()}</Routes>
    </BrowserRouter>
  );
}

export default App;
