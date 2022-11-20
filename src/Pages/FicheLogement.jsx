import "../styles/FicheLogement.css";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Data from "../datas/datas";
import Dropdown from "../components/Dropdown";
import Tag from "../components/Tag";
import Stars from "../components/Stars";
import Slideshow from "../components/Slideshow";
import Error404 from "../Pages/Error404";

export default function FicheLogement() {
  /////////////////////////////////////////////////////
  // on recupere l'id du logement
  const Id = () => {
    const { id } = useParams();
    return id;
  };

  const id = Id();

  ////////////////////////////////////////////////////////////////
  //CHARGEMENT DES DATAS
  // state (état, données)
  const [datas] = useState(Data);

  // on recupere l'objet correspondant à notre logement dans data
  const data = datas.find((data) => id === data.id);

  //si id non trouvé dans les datas on affiche la page erreur

  if (data === undefined) {
    return <Error404 />;
  }

  ///////////////////////////////////////////////////////////////////
  //ON CREE UN TBLEAU POUR LES DROPDOWN(descrition/equipement)
  const arrayDropdown = [
    {
      id: `${data.id}description`,
      title: "Description",
      description: data.description,
    },
    {
      id: `${data.id}equipement`,
      title: "Equipement",
      description: [
        // on boucle sur les equipements dans la data et on implemente les li dans la description
        <ul className="container-equipement">
          {data.equipments.map((equipement) => {
            return <li key={equipement}>{equipement}</li>;
          })}
        </ul>,
      ],
    },
  ];

  ///////////////////////////////////////////////////////////////////////////
  //////////////////////////////////AFFICHAGE////////////////////////////////////
  return (
    <div className="page-ficheLogement">
      <header>
        {/* BANNER */}

        <Banner />

        {/* CARROUSEL */}

        <Slideshow data={data} />

        {/* TITLE + TAG */}
        <div className="container-title-tag-user">
          <div className="container-title-tag">
            <div className="container-title-location">
              <h1>{data.title}</h1>
              <p>{data.location}</p>
            </div>

            <div className="container-tag">
              {data.tags.map((tag) => (
                <Tag tag={tag} key={tag} />
              ))}
            </div>
          </div>
          {/* USER + STARS */}
          <div className="container-user-stars">
            <div className="container-name-photoUser">
              <p>{data.host.name}</p>
              <img src={data.host.picture} alt="user" />
            </div>

            <div className="container-stars">
              <Stars rating={data.rating} />
            </div>
          </div>
        </div>
      </header>

      {/* TAG + STARS */}

      {/* DROPDOWN */}
      <div className="container-dropdown">
        {arrayDropdown.map((dropdown, index) => (
          <div className="dropdown">
            <Dropdown
              key={index}
              title={dropdown.title}
              description={dropdown.description}
            />
          </div>
        ))}
      </div>

      {/* FOOTER */}

      <Footer />
    </div>
  );
}
