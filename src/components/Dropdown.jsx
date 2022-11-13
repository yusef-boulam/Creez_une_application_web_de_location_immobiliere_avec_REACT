import "../styles/Dropdown.css";
import React, { useState } from "react";
import Arrow from "../assets/Apropos/Arrow.png";

function Dropdown({ title, description }) {
  //CREATION DU STATE
  const [isOpen, setIsOpen] = useState(true);

  //FONCTION qui modifie isOpen au CLICK
  function handleClick(event) {
    event.preventDefault();

    //changment de l'etat de isOpen (open/close)
    let CopyisOpen = true;
    isOpen ? (CopyisOpen = false) : (CopyisOpen = true);

    //on sauvegarde dans le STATE
    setIsOpen(CopyisOpen);
  }

  //AFFICHAGE
  //si isOpen on affiche la description
  // sinon on fait une rotation à l'image arrow
  return (
    <div className="container-Dropdown">
      <button className="Dropdown" onClick={handleClick}>
        {title}
        {isOpen ? (
          <img
            className="img-open"
            src={Arrow}
            alt="fleche fermeture descriptifs"
          />
        ) : (
          <img
            className="img-close"
            src={Arrow}
            alt="fleche ouverture descriptifs"
          />
        )}
      </button>

      {isOpen && <p className="descriptif">{description}</p>}
    </div>
  );
}

export default Dropdown;
