import React from "react";
import { Link } from "react-router-dom";
import './Hamburguer.css';

function Hamburger(){
    const [menu, setMenu] = React.useState(false);
    const handleClick = () => setMenu(!menu);

    return(
        <div className="hamburger">
            <button className="iconeMenu" onClick={handleClick}>☰</button>
            {menu && <div className={`menu ${menu ? "open" : ""}`}>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/sobre">Sobre o Suvaco</Link></li>
                    <li><Link to="/acervo">Acervo</Link></li>
                    <li><Link to="/timeline">Linha do Tempo</Link></li>
                    <li><Link to="/divinas">Divinas Axilas</Link></li>
                    <li><Link to="/voce-com-o-suvaco">Você com o Suvaco</Link></li>
                </ul> 
                </div>}
        </div>
    )
}

export default Hamburger;