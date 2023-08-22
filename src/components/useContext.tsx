import { useState } from "react";
import ChildContext from "./childContext";
import { MyContext } from "./context";
function UseContextC() {
  const [value, setValue] = useState<number>(0);
  return (
    <MyContext.Provider value={{ value, setValue }}>
      <ChildContext></ChildContext>
    </MyContext.Provider>
  );
}
export default UseContextC;
