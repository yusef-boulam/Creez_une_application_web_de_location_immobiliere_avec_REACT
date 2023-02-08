import "../styles/Slideshow.css";
import React, { useState } from "react";
import arrowBack from "../assets/ficheLogement/arrowBack.png";
import arrowForward from "../assets/ficheLogement/arrowForward.png";


function Slideshow(data) {
  //creation d'un tableau vide pour les BALLS////////////////////////////////////////////////////////////////////////
  const arrayBalls = [];

  // on ajoute l'url et la couleur blanche pour chaque photo
  data.data.pictures.map((url) => {
    arrayBalls.push({ picture: url, active: false });
  });

  //CREATION DU STATE
  const [picture, setPictures] = useState(data.data.cover);

  //CREATION DU STATE PICTURE ET BALL
  const [balls, setBall] = useState(arrayBalls);
 
  //FONCTION qui modifie picture au CLICK (retour sur la photo précédente)//////////////////////////////////////////////////////////////////////////
  function handleClickBack(event) {
    event.preventDefault();

    //on recupere l'index de la photo precedente dans le tableau pictures
    let newIndex = data.data.pictures.indexOf(picture) - 1;

    // si le nouvel index est negatif on repart avec l index le plus grand du tableau
    newIndex < 0 && (newIndex = data.data.pictures.length - 1);

    // on fait une copie du tableau
    const copyBall = [...balls];

    // remise à zero des balls
    copyBall.map((ball) => (ball.active = false));

    // on le modifie active qu'on passe à true
    copyBall[newIndex].active = true;

    // on sauvegarde dans le state
    setBall(copyBall);

    //on sauvegarde dans le STATE
    setPictures(data.data.pictures[newIndex]);
  }

  //FONCTION qui modifie picture au CLICK (photo suivante)////////////////////////////////////////////////////////////////////////////////////////////////
  function handleClickForward(event) {
    event.preventDefault();

    //on recupere l'index de la photo suivante dans le tableau pictures
    let newIndex = data.data.pictures.indexOf(picture) + 1;
    // si le nouvel index est superieur à la taille du tableau on repart au debut du tableau

    newIndex === data.data.pictures.length && (newIndex = 0);

    // on fait une copie du tableau
    const copyBall = [...balls];

    // remise à zero des balls
    copyBall.map((ball) => (ball.active = false));

    // on le modifie active qu'on passe à true
    copyBall[newIndex].active = true;

    // on sauvegarde dans le state
    setBall(copyBall);

    //on sauvegarde dans le STATE
    setPictures(data.data.pictures[newIndex]);
  }

  //on recupere l'id de la ball selectionné .
  function handleClickBall(event) {
    event.preventDefault();
    // on fait une copie du tableau
    const copyBall = [...balls];
    // remise à zero des balls
    copyBall.map((ball) => (ball.active = false));

    // on le modifie active qu'on passe à true
    copyBall.find((ball) => ball.picture === event.target.id).active = true;

    // on sauvegarde dans le state
    setBall(copyBall);

    
    //on sauvegarde dans le STATE
    setPictures(event.target.id);
  }

  return (
    <div className="carrousel">
      <img className="imgLogement" src={picture} alt="interieure du logement" />

      {/* affichage des fleches et des balles uniquement si plusieurs photos */}
      {data.data.pictures.length > 1 && (
        <div className="arrowBall">
          <div className="container-arrow">
            {/* arrow back */}
            <img
              className="arrow"
              onClick={handleClickBack}
              src={arrowBack}
              alt="arrow back"
            />

            {/* arrow forward */}
            <img
              className="arrow"
              onClick={handleClickForward}
              src={arrowForward}
              alt="arrow forward"
            />
          </div>

          {/* BALL */}

          <div className="container-ball">
            {balls.map((picture) =>
              picture.active ? (
                <div
                  className="ball-black"
                  id={picture.picture}
                  key={picture.picture}
                  onClick={handleClickBall}
                ></div>
              ) : (
                <div
                  className="ball-white"
                  id={picture.picture}
                  key={picture.picture}
                  onClick={handleClickBall}
                ></div>
              )
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Slideshow;
