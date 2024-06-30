import React from "react";
import Header from "../../components/Header/Header";
import Button from "../../components/Button/Button";
import "../Home/Home.css";

function Home() {
  return (
    <div>
      <Header />

      <div className="home">
        <div className="textos">
          <h1 className="titulo-home">Desarrollamos juntos <br/> <strong>TU WEB, TU APP, TU E-COMMERCE, TU IDEA</strong></h1>
          <h2 className="slogan"> Transformando ideas en soluciones digitales </h2>
          <Button />
        </div>
      </div>

    </div>
  );
}

export default Home;
