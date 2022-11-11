import React from "react";
import { useState } from "react";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import "../styles/FicheLogement.css";
import Data from "../datas/datas";
import { useParams } from "react-router-dom";
import Dropdown from "../components/Dropdown";
import Tag from "../components/Tag";
import Stars from "../components/Stars";
import arrowBack from "../assets/ficheLogement/arrowBack.png";
import arrowForward from "../assets/ficheLogement/arrowForward.png";
// import { Link } from 'react-router-dom'

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

  console.log(data)

  // if(data===undefined){
  //   <Link to="/*" className=''></Link>
  // }

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
    <ul className="container-equipement">
      {data.equipments.map((equipement) => {
        return <li>{equipement}</li>;
      })}
    </ul>,
  ];

  //AFFICHAGE
  return (
    <div className="page-ficheLogement">
      <header>
        <Banner />

        <div className="containerFicheLogement">
          <div className="carrousel">
            <img
              className="imgLogement"
              src={data.cover}
              alt="interieure du logement"
            />

            <img className="arrow_back" src={arrowBack} alt="arrow back" />

            <img
              className="arrow_forward"
              src={arrowForward}
              alt="arrow forward"
            />
          </div>
          <div className="containerTitrePhotoUser">
            <div>
              <h1>{data.title}</h1>
              <p>{data.location}</p>
            </div>
            <div className="containerNamePhotoUser">
              <p>{data.host.name}</p>
              <img className="imgUser" src={data.host.picture} alt="user" />
            </div>
          </div>
        </div>
      </header>

      <div className="container-tag-stars">
        <div className="container-tag">
          {data.tags.map((tag) => (
            <Tag tag={tag} />
          ))}
        </div>

        <div className="container-stars">
          <Stars rating={data.rating} />
        </div>
      </div>

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
