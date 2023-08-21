import { Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./components/main";
import Sanlyshi from "./components/sanlyshi-info";
import Menu from "./components/menu";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />}></Route>
      <Route path="/sanlyshi-info" element={<Sanlyshi />}></Route>
      <Route path="/menu" element={<Menu />}></Route>
    </Routes>
  );
}

export default App;
