import React from "react";
import Banner from "../components/Banner";
import Gallery from "../components/Gallery";
import Footer from "../components/Footer";
import pictureHome from "../assets/home/pictureHome.png";
import "../styles/Home.css";


export default function Home() {
 
  return (
    <div>
      <header>

        <Banner />

        <div className="kasa-containerHome">
          <img
            src={pictureHome}
            alt="falaises donnant sur la mer"
            className="pictureHome-img"
          />
          <h1>Chez vous, partout et ailleurs</h1>
        </div>
      </header>

      <Gallery />

      <Footer />

    </div>
  );
}
