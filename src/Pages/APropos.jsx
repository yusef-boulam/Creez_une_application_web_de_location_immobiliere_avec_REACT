import React, { useState } from "react";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import "../styles/APropos.css";
import pictureApropos from "../assets/Apropos/pictureAPropos.png";
import Dropdown from "../components/Dropdown";

export default function APropos() {
  //state

  const [arrayDropdown, setArrayDropdown] = useState([
    { id: 1, title: "Fiabilité", Open: false},
    { id: 2, title: "Respect", Open: false },
    { id: 3, title: "Service", Open: false },
    { id: 4, title: "Responsabilité", Open: false },
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
        <Dropdown key={dropdown.id} texte={dropdown.title} arrayDropdown={arrayDropdown} setArrayDropdown= {setArrayDropdown} id ={dropdown.id} />
      ))}
      <Footer />
      Drop
    </div>
  );
}
