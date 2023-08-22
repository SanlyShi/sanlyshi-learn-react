import { useCallback, useState, useMemo, useEffect } from "react";
import { Button } from "antd";
import UseContextC from "./useContext";
import UseReducerC from "./useReducer";
import useTitle from "./defineHook";
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
    // console.log("useCallBack方法中的值改变");
    //下面 可以 实现累加3
    // setCount((count) => count + 1);
    // setCount((count) => count + 1);
    // setCount((count) => count + 1);
  }, [count]);
  //通过自定义 Hook，可以将组件逻辑提取到可重用的函数中。
  useTitle("一个自定义hooks标题");
  useEffect(() => {
    // console.log("useEffect副作用之count变化了，现在是", count);
    // const timer = setInterval(()=>{
    //   //console.log('M')
    // },1000)
    // return ()=>{
    //  // 回调函数可以用作组建销毁时
    // clearInterval(timer)
    // }
    // 如果[]中数据为空，内部方法只会执行一次
    // }, []);
  }, [count]);
  return (
    <div>
      <h4>count: {count}</h4>
      <h4>memoCount: {memoCount}</h4>
      {/* <Button onClick={() => setCount(count + 1)}>Count + 1</Button> */}
      <Button onClick={useCallBackSetCount}>Count + 1</Button>
      <div className="div_br"></div>
      <UseContextC></UseContextC>
      <div className="div_br"></div>
      <UseReducerC></UseReducerC>
      <div className="div_br"></div>
    </div>
  );
}
export default UseHooks;
