import "../styles/Card.css";
import React from "react";
import { useState } from "react";
import Data from "../datas/datas";
import Card from "./Card";

function Gallery() {
  // state (état, données)
  const [datas] = useState(Data);

  return (
    // affichage
    <section className="home-section">
      {datas.map((data) => (
        <Card key={data.id} id={data.id} cover={data.cover} title={data.title}/>
      ))}
    </section>
  );
}

export default Gallery;
