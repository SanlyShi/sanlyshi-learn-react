import { List, Button } from "antd";
function Menu() {
  const data = [{ name: "css", path: "/css" }];
  return (
    <div className="menu">
      <List
        dataSource={data}
        renderItem={(item) => (
          <List.Item>
            <Button>{item.name}</Button>
          </List.Item>
        )}
      ></List>
    </div>
  );
}
export default Menu;
