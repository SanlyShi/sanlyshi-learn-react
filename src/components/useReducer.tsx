import { useReducer } from "react";
import { Button } from "antd";
interface Sta {
  number: number;
}
interface Ty {
  type: string;
}
const initialState = { number: 0 };
function reducer(state: Sta, action: Ty) {
  switch (action.type) {
    case "increment":
      return { number: (state.number += 1) };
      break;
    case "decrement":
      return { number: (state.number -= 1) };
      break;
    default:
      throw new Error();
  }
}
function UseReducerC() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <p>reducer number: {state.number}</p>
      <p>
        <Button
          onClick={() => {
            dispatch({ type: "increment" });
          }}
        >
          reducer number + 1
        </Button>
      </p>
      <p>
        <Button
          onClick={() => {
            dispatch({ type: "decrement" });
          }}
        >
          reducer number - 1
        </Button>
      </p>
    </div>
  );
}
export default UseReducerC;
