import { Link } from "react-router-dom";
import React from "react";


function Card({id, cover, title}) {

  return (
 
        <Link
          to={`/ficheLogement/${id}`}
          className="link-image-appartement photo-background"
        >
          <img src={cover} alt="logo kasa" className="photo-appartement" />
          <h2>{title}</h2>
        </Link>
)}

export default Card;