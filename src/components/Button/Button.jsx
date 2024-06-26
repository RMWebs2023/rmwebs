import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import "../Button/Button.css";


function Button () {
    return (
        <button className="button">
            <FaWhatsapp />
            <a href="https://api.whatsapp.com/send?phone=2616202630">Consultar</a>
        </button>
    );
}

export default Button;