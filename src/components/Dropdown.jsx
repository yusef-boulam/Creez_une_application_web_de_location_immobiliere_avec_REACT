import "../styles/Dropdown.css";
import React, { useState } from "react";
import Vector from "../assets/Apropos/Vector.png";

function Dropdown({ title, description }) {
  //CREATION DU STATE
  const [isOpen, setIsOpen] = useState(true);

  //modification du STATE au CLICK

  function handleClick(event) {
    event.preventDefault();
    //changment de l'etat de isOpen (open/close)
    let CopyisOpen = true;
    isOpen ? (CopyisOpen = false) : (CopyisOpen = true);

    setIsOpen(CopyisOpen);
  }

  //AFFICHAGE
  //si isOpen on affiche la description
  return (
    <div className="container-Dropdown">

      <button className="Dropdown" onClick={handleClick}>
        {title}
        {isOpen ? (
          <img
            className="img-open"
            src={Vector}
            alt="fleche fermeture descriptifs"
          />
        ) : (
          <img
            className="img-close"
            src={Vector}
            alt="fleche ouverture descriptifs"
          />
        )}
      </button>

      {isOpen && <p className="descriptif">{description}</p>}

    </div>
  );
}

export default Dropdown;
