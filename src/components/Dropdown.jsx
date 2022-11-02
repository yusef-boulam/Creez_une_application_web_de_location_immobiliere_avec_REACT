import "../styles/Dropdown.css";
import React from "react";
import Vector from "../assets/Apropos/Vector.png";

function Dropdown({texte}) {
  // state (état, données)

  return (
    // affichage
    <div className="container-Dropdown">
        <h2>{`${texte}`}</h2>
      <img
        src={Vector}
        alt="fleche ouverture descriptifs"
      />
    </div>
  );
}

export default Dropdown;
