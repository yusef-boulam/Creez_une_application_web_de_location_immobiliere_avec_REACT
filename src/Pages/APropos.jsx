import React from "react";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import "../styles/APropos.css";
import pictureApropos from "../assets/Apropos/pictureAPropos.png";
import Dropdown from "../components/Dropdown";

export default function APropos() {
  return (
    <div className="APropos" >
      <header>
        <Banner />  
          <img
            src={pictureApropos}
            alt="montagnes"
            className="picture-APropos-img"
          />
      </header>
      <Dropdown texte="Fiabilité"/>
      <Dropdown texte="Respect"/>
      <Dropdown texte="Service"/>
      <Dropdown texte="Responsabilité"/>
      <Footer />
    </div>
  );
}
