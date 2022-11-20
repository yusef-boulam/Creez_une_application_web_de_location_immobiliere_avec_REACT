import "../styles/Gallery.css";
import React, { useState, useEffect} from "react";
import Data from "../datas/datas";
import Card from "./Card";

function Gallery() {
  // state (état, données)
  const [datas, setDatas] = useState([]);

  // use effect pour la mise à jours des datas
useEffect(() =>{
setDatas(Data)
}, [])

  return (
    // affichage
    <section className="section-gallery">
      {datas.map((data) => (
        <Card className= "card"
        key={data.id} id={data.id} cover={data.cover} title={data.title}/>
      ))}
    </section>
  );
}

export default Gallery;
