import React, { useState } from "react";
import "./Collapse.scss";
import { ReactComponent as Arrow } from "../../assets/logo/Vectorsvg.svg";

function Collapse({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="collapse">
      <div className="collapse-header">
        <h1>{title}</h1>
        <Arrow
          className={`arrow-collapse ${isOpen ? "open" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
        />
      </div>
      {isOpen && <div className="content">{children}</div>}
    </div>
  );
}

export default Collapse;
