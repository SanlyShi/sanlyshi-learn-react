import { Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./components/main";
import Sanlyshi from "./components/sanlyshi-info";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />}></Route>
      <Route path="/sanlyshi-info" element={<Sanlyshi />}></Route>
    </Routes>
  );
}

export default App;
