import "../styles/Card.css";
import { Link } from 'react-router-dom'
import React from "react";
import { useState } from "react";
import Data from "../datas/datas";



function Card() {
// state (état, données)
const [datas] = useState(Data);


  return (

    // affichage
    <section className="home-section">
      {datas.map((data) => (
        <Link to="/" className="link-image-appartement photo-background" key={data.id} >
          <img src={data.cover} alt="logo kasa" className="photo-appartement" />
          <h2>Titre de la location</h2>
        </Link>
      ))}
    </section>
  );
}

export default Card;
