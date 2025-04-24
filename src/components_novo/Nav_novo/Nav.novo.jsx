import React from "react";
import { Link } from "react-router-dom";
import './Nav_novo.css'
import Hamburger from "../../components/MenuHamburguer/Hamburguer";

function Nav() {
    return (
        <div>
            <Hamburger />
        <nav>
            <ul>
                <a id="Logo">LOGO</a>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/projeto">Projeto</Link></li>
                <li><Link to="/sobre">Sobre o Suvaco</Link></li>
                <li><Link to="/acervo">Acervo</Link></li>
                <li><Link to="/timeline">Linha do Tempo</Link></li>
                <li><Link to="/divinas">Divinas Axilas</Link></li>
                <li><Link to="/voce-com-o-suvaco">Você com o Suvaco</Link></li>
            </ul>
        </nav>
        </div>
    );
}

export default Nav;
