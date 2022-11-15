import "../styles/Slideshow.css";
import React, { useState } from "react";
import arrowBack from "../assets/ficheLogement/arrowBack.png";
import arrowForward from "../assets/ficheLogement/arrowForward.png";
import Ball from "./Ball";

function Slideshow(data) {
  //CREATION DU STATE
  const [picture, setPictures] = useState(data.data.cover);

  //FONCTION qui modifie picture au CLICK
  function handleClickBack(event) {
    event.preventDefault();

    //on recupere l'index de la photo precedente dans le tableau pictures
    let newIndex = data.data.pictures.indexOf(picture) - 1;
    // si le nouvel index est negatif on repart avec l index le plus grand du tableau
    {
      newIndex < 0 && (newIndex = data.data.pictures.length - 1);
    }
    //on sauvegarde dans le STATE
    setPictures(data.data.pictures[newIndex]);
  }
  //FONCTION qui modifie picture au CLICK
  function handleClickForward(event) {
    event.preventDefault();

    //on recupere l'index de la photo suivante dans le tableau pictures
    let newIndex = data.data.pictures.indexOf(picture) + 1;
    // si le nouvel index est superieur à la taille du tableau on repart au debut du tableau
    {
      newIndex === data.data.pictures.length && (newIndex = 0);
    }
    //on sauvegarde dans le STATE
    setPictures(data.data.pictures[newIndex]);
  }

  return (
    <div className="carrousel">
      <img className="imgLogement" src={picture} alt="interieure du logement" />

      {/* affichage des fleches uniquement si plusieurs photos */}
      {data.data.pictures.length > 1 && (
        <div className="arrow">

          
          {/* arrow back */}
          <img
            className="arrow_back"
            onClick={handleClickBack}
            src={arrowBack}
            alt="arrow back"
          />

          {/* BALL */}
      
          <Ball data={data}/>

          {/* arrow forward */}
          <img
            className="arrow_forward"
            onClick={handleClickForward}
            src={arrowForward}
            alt="arrow forward"
          />
        </div>
      )}
    </div>
  );
}

export default Slideshow;
