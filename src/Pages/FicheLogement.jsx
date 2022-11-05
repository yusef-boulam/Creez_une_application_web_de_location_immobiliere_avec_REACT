import React from "react";
import { useState } from "react";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import "../styles/FicheLogement.css";
import Data from "../datas/datas";
import { useParams } from "react-router-dom";
import Dropdown from "../components/Dropdown";

export default function FicheLogement() {
  // on recupere l'id du logement
  const Id = () => {
    const { id } = useParams();
    return id;
  };

  const id = Id();

  // state (état, données)
  const [datas] = useState(Data);
  // on recupere l'objet correspondant à notre logement dans data
  const data = datas.find((data) => id === data.id);

  const [arrayDropdown, setArrayDropdown] = useState([
    { id: 1, title: "Description", Open: false, description: "" },
    { id: 2, title: "Equipement", Open: false, description: "" },
  ]);

  // COMPORTEMENT
  //copie du state
  const arrayDropdownModify = [...arrayDropdown];

  //on modofie la copie

  arrayDropdownModify[0].description = data.description;
  arrayDropdownModify[1].description = data.equipments;

  //AFFICHAGE
  return (
    <div>
      <header>
        <Banner />

        <div className="containerFicheLogement">
          <img src={data.cover} alt="interieure du logement" />
          <h1>{data.title}</h1>
          <p>{data.location}</p>
        </div>
      </header>
      <div className="container-dropdown">
        {arrayDropdown.map((dropdown) => (
            <div className="dropdown" key={dropdown.id}>
          <Dropdown
            texte={dropdown.title}
            arrayDropdown={arrayDropdown}
            setArrayDropdown={setArrayDropdown}
            id={dropdown.id}
          />
               </div>
        ))}
          </div>
 

      <Footer />
    </div>
  );
}
