import { Link } from "react-router-dom";
import React from "react";
import "../styles/Card.css";


function Card({id, cover, title}) {

  return (
 
        <Link
          to={`/ficheLogement/${id}`}
          className="card"
        >
          <div className="imgCard">
          <img src={cover} alt="appartement" />
          <div className="linearGradient"></div>
          </div>
          <h2>{title}</h2>
       
        </Link>
)}

export default Card;