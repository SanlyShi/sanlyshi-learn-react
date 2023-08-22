import { useContext } from "react";
import { MyContext } from "./context";
import { Button } from "antd";
import ChildChildContext from "./childChildContext";
function ChildContext() {
  const { value, setValue } = useContext(MyContext);
  return (
    <div>
      <p>ChildContext useContext Value : {value}</p>
      <Button
        onClick={() => {
          setValue((i: number) => i + 1);
        }}
      >
        ChildContext value + 1
      </Button>
      <ChildChildContext></ChildChildContext>
    </div>
  );
}
export default ChildContext;
