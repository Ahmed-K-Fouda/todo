import React, { useState } from "react";
import "../../index.css";
import "./Nav.css";
import { toast } from "react-toastify";

function Nav() {
  const [isActive, setIsActive] = useState(0);

  function handleActive(index) {
    if (index === 0) {
      setIsActive(index);
    }
    if (index === 1) {
      toast.error("comming soooon😉");
      return;
    }
  }

  return (
    <div className="nav">
      <p
        className={isActive === 0 ? "active" : ""}
        onClick={() => handleActive(0)}
      >
        Personal
      </p>

      <p
        className={isActive === 1 ? "active" : ""}
        onClick={() => handleActive(1)}
      >
        Professional
      </p>
    </div>
  );
}

export default Nav;
