import React from "react";
import Navbar from "../navbar/Navbar";
import imageAki from "../../assets/images/aki.jpeg";
import imageEnin from "../../assets/images/Enin.png";
import "./Home.css";

function Home() {
  return (
    <div className="home-wrapper">
      <Navbar />
      <section className="home">
        <div className="text-style">
          <h1>
            Keluarga Besar Dudung <br />
            Supandi dan Mikah Atikah
          </h1>
        </div>

        <div className="container-home">
          <div className="custom-card">
            <img src={imageAki} alt="Foto Dudung Supandi" />
            <h5>(Alm) Dudung Supandi</h5>
            {/* <h5>Dudung Supandi</h5> */}
          </div>
          <div className="custom-card">
            <img src={imageEnin} alt="Foto Mikah Atikah" />
            <h5>(Almh) Mikah Atikah</h5>
            {/* <h5>(Almh) Mikah Atikah</h5> */}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
