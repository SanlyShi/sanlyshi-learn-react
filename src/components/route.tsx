import { useNavigate } from "react-router-dom";
import { Button } from "antd";
function RouteEx() {
  const navigateF = useNavigate();
  const toMenu = () => {
    navigateF("/menu");
  };
  return (
    <div>
      <Button onClick={toMenu}>使用useNavigate返回menu</Button>
    </div>
  );
}
export default RouteEx;
