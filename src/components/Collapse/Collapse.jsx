import React, { useState } from "react";
import "./Collapse.scss";
import Arrow from "../../assets/logo/Vector.png";

function Collapse({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="collapse">
      <h3 className="title-collapse">
        {title}
        <img
          src={Arrow}
          className={`arrow-collapse ${isOpen ? "open" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
        />
      </h3>
      {isOpen && <div className="content">{children}</div>}
    </div>
  );
}

export default Collapse;
