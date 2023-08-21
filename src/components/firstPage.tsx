import { Link } from "react-router-dom";
import { Button } from "antd";
import { useState } from "react";
import Main from "./main";
import { useNavigate } from "react-router-dom";
function FirstPage() {
  const [name] = useState("sanlyshi");
  const navigateF = useNavigate();
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const toMenu = () => {
    setShowMenu(true);
    navigateF("/menu");
  };
  const toSanlyshi = () => {
    navigateF("/img");
  };
  return (
    <div>
      {!showMenu ? (
        <div>
          <h3>
            wellcome to{" "}
            <span className="s_link" onClick={toSanlyshi}>
              {name}
            </span>{" "}
            React web{" "}
          </h3>
          <h3>
            open menu
            <span className="mg10">
              <Button onClick={toMenu}>here</Button>
            </span>
          </h3>
        </div>
      ) : (
        <div>
          <div className="nav_button">
            <Link to="/" className="nav">
              <Button>首页</Button>
            </Link>
            <Link to="/menu" className="nav">
              <Button>菜单</Button>
            </Link>
            <Link to="/img" className="nav">
              <Button>个人信息</Button>
            </Link>
          </div>
          <Main></Main>
        </div>
      )}
    </div>
  );
}
export default FirstPage;
