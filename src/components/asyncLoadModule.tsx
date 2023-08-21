import { useState } from "react";
import { Button } from "antd";
function AsyncLoadModule() {
  const [mo, setMo] = useState<string>();
  const LoadModuleA = () => {
    import("../utils/moduleB")
      .then((module) => {
        console.log("module", module);
        setMo(module.moduleB);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <p>{mo}</p>
      <Button onClick={LoadModuleA}>加载文件</Button>
      <h6>点击开始异步加载moduleB文件,注意 浏览器控制台网络请求</h6>
    </div>
  );
}
export default AsyncLoadModule;
