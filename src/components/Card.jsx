import { Link } from "react-router-dom";
import React from "react";
import "../styles/Card.css";


function Card({id, cover, title}) {

  return (
 
        <Link
          to={`/ficheLogement/${id}`}
          className="card"
        >
          <img src={cover} alt="appartement" />
          <h2>{title}</h2>
        </Link>
)}

export default Card;