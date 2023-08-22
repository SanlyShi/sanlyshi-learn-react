import { Route, Routes } from "react-router-dom";
import ImgS from "../components/img";
import Menu from "../components/menu";
import CssModule from "../components/css";
import Utils from "../components/utils";
import RouteEx from "../components/route";
import UseHooks from "../components/useHooks";
import AsyncLoadModule from "../components/asyncLoadModule";
import FirstPage from "./firstPage";
import AntdForm from "./antdForm";
function Main() {
  return (
    <Routes>
      <Route path="/" element={<FirstPage />}></Route>
      <Route path="/img" element={<ImgS />}></Route>
      <Route path="/menu" element={<Menu />}></Route>
      <Route path="/css" element={<CssModule />}></Route>
      <Route path="/utils" element={<Utils />}></Route>
      <Route path="/route" element={<RouteEx />}></Route>
      <Route path="/useHooks" element={<UseHooks />}></Route>
      <Route path="/asyncLoadModule" element={<AsyncLoadModule />}></Route>
      <Route path="/antdForm" element={<AntdForm />}></Route>
    </Routes>
  );
}
export default Main;
