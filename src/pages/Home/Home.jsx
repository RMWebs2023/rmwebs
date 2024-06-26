import React from "react";
import Header from "../../components/Header/Header";
import Button from "../../components/Button/Button";
import "../Home/Home.css";

function Home() {
  return (
    <div>
      <Header />

      <div className="home">
        <h2>RMWebs - Desarrollamos <strong>TU WEB, TU APP o TU E-COMMERCE</strong> juntos</h2>
        <h2> Transformando ideas en soluciones digitales </h2>
        <Button />
      </div>

    </div>
  );
}

export default Home;
