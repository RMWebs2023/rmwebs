import React, { useState, useEffect, useRef } from "react";
import Header from "../../components/Header/Header";
import Button from "../../components/Button/Button";
import "../Home/Home.css";

function Home() {
  const [word, setWord] = useState("");

  const words = ["TU WEB", "TU APP", "TU E-COMMERCE", "TU IDEA"];
  let indexRef = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWord(words[indexRef.current]);
      indexRef.current = (indexRef.current + 1) % words.length;
    }, 2000);

    return () => clearInterval(interval);
  }, [words]);

  console.log(word);

  return (
    <div>
      <Header />

      <div className="home">
        <div className="textos">
          <h1 className="titulo-home">
            Desarrollamos juntos <br /> <strong>{word}</strong>
          </h1>
          <h2 className="slogan">
            {" "}
            Transformando ideas en soluciones digitales{" "}
          </h2>
          <Button />
        </div>
      </div>
    </div>
  );
}

export default Home;
