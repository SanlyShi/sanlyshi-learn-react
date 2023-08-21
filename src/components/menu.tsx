import { List, Button } from "antd";
import { Link } from "react-router-dom";
function Menu() {
  const data = [
    { name: "css", path: "/css" },
    { name: "img", path: "/img" },
    { name: "utils", path: "/utils" },
    { name: "route", path: "/route" },
    { name: "useHooks", path: "/useHooks" },
    { name: "asyncLoadModule", path: "/asyncLoadModule" },
  ];
  return (
    <div className="menu">
      <List
        dataSource={data}
        renderItem={(item) => (
          <List.Item>
            <Link to={item.path}>
              <Button type="primary">{item.name}</Button>
            </Link>
          </List.Item>
        )}
      ></List>
    </div>
  );
}
export default Menu;
