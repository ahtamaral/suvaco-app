import React from "react";
import { Link } from "react-router-dom";
import { renderTitleSubtitle } from "../functions";
function Projeto(){
    return (
        <section>
            <div className="section-container">
                {renderTitleSubtitle("Museu virtual do carnaval de rua do Rio: Suvaco do  Cristo",null,"projeto-museu")}    
            
                <p>Qual é o papel de universidades como a UFRJ e da sociedade em geral na  preservação e divulgação da memória do carnaval de rua do Rio de Janeiro?</p>
                <br />
                <p> Essa indagação foi a motivação para a criação do projeto de extensão “Museu virtual do  carnaval de rua do Rio de Janeiro – O bloco Suvaco do Cristo”, um dos responsáveis  pela revitalização do carnaval de rua carioca. Através de uma parceria entre a  presidência do bloco e o Instituto de Computação (IC/UFRJ), nasceu a ideia de  construir um espaço para que essa história seja contada e continuada. 
                </p>
            
            
                <div className="footer-section">
                    <a href="/projeto" id="link-txt">SOBRE O PROJETO E OS PARTICIPANTES</a>
                    <div className="line"></div>
                </div>

            </div>
        
        
            
        </section>

    )
}

export default Projeto;