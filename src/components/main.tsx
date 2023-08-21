import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "antd";
function Main() {
  const [name] = useState("sanlyshi");
  return (
    <div>
      <h3>
        wellcome to {name}'s place,please click
        <span className="mg10">
          <Link to="/sanlyshi-info">
            <Button>here</Button>
          </Link>{" "}
        </span>
        to see him !
      </h3>
      <h3>
        or click
        <span className="mg10">
          <Link to="/menu">
            <Button>here</Button>
          </Link>{" "}
        </span>
        to menu !
      </h3>
    </div>
  );
}
export default Main;
