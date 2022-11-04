import React, { useState } from "react";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import "../styles/APropos.css";
import pictureApropos from "../assets/Apropos/pictureAPropos.png";
import Dropdown from "../components/Dropdown";

export default function APropos() {
  //state

  const [arrayDropdown, setArrayDropdown] = useState([
    { id: 1, title: "Fiabilité", Open: false, description: "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes." },
    { id: 2, title: "Respect", Open: false, description: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."},
    { id: 3, title: "Service", Open: false, description: "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question." },
    { id: 4, title: "Responsabilité", Open: false, description: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes." },
  ]);

  console.log(arrayDropdown)
  // affichage

  return (
    <div className="APropos">
      <header>
        <Banner />
        <img
          src={pictureApropos}
          alt="montagnes"
          className="picture-APropos-img"
        />
      </header>
      {arrayDropdown.map((dropdown) => (
        <Dropdown key={dropdown.id} texte={dropdown.title} arrayDropdown={arrayDropdown} setArrayDropdown= {setArrayDropdown} id ={dropdown.id}/>
      ))}
      <Footer />
      Drop
    </div>
  );
}
