import { useContext } from "react";
import { MyContext } from "./context";
import { Button } from "antd";
function ChildChildContext() {
  const { value, setValue } = useContext(MyContext);
  return (
    <div>
      <p>ChildChildContext useContext Value : {value}</p>
      <Button
        onClick={() => {
          setValue((i: number) => i + 1);
        }}
      >
        ChildChildContext value + 1
      </Button>
    </div>
  );
}
export default ChildChildContext;
