import { useCallback, useState, useMemo } from "react";
import { Button } from "antd";
function UseHooks() {
  const [count, setCount] = useState<number>(0);
  const memoCount = useMemo(() => {
    return count * 100;
  }, [count]);
  const useCallBackSetCount = useCallback(() => {
    //下面 不可以 实现累加3
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
    //下面 可以 实现累加3
    // setCount((count) => count + 1);
    // setCount((count) => count + 1);
    // setCount((count) => count + 1);
  }, [count]);
  return (
    <div>
      <h4>count: {count}</h4>
      <div className="div_br"></div>
      <h4>memoCount: {memoCount}</h4>
      <div className="div_br"></div>
      {/* <Button onClick={() => setCount(count + 1)}>Count + 1</Button> */}
      <Button onClick={useCallBackSetCount}>Count + 1</Button>
    </div>
  );
}
export default UseHooks;
