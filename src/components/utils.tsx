import utils from "../utils";
function Utils() {
  return (
    <div>
      <div>{utils.moduleA}</div>
      <div>{utils.moduleAFun()}</div>
    </div>
  );
}
export default Utils;
