import { useState } from "react";
import "./Collapse.scss";
import Arrow from "../../assets/logo/Vector.png";
import { useId } from "react";
import { useCallback } from "react";

function Collapse({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);
  const panelId = useId();
  const toggle = useCallback(() => setIsOpen((o) => !o), []);

  return (
    <div className="collapse">
      <h3 className="title-collapse">
        {title}
        <button
          type="button"
          className={`arrow-collapse ${isOpen ? "open" : ""}`}
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={toggle}
        >
          <img src={Arrow} alt="" aria-hidden />
        </button>
      </h3>

      <div id={panelId} className="content" hidden={!isOpen}>
        {children}
      </div>
    </div>
  );
}

export default Collapse;
