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
    { id: 3, title: "Description", Open: false, description: "" },
    { id: 4, title: "Equipement", Open: false, description: "" },
  ]);

  // COMPORTEMENT
  //copie du state
  const arrayDropdownModify = [...arrayDropdown];

  //on modofie la copie en ajoutant les data du logement en question

  arrayDropdownModify[0].description = data.description;
  arrayDropdownModify[1].description = [
    <ul>
      {data.equipments.map((equipement) => {
        return <li>{equipement}</li>;
      })}
    </ul>,
  ];


  //AFFICHAGE
  return (
    <div className="page-fiche">
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
          <div className="dropdown">
            <Dropdown
              key={dropdown.id}
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
