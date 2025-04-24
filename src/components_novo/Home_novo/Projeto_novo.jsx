import React from "react";
import { Link } from "react-router-dom";

import Video from "../../components/Home/Video";
function Projeto_novo(){
    return (
        <section>

            <div className="section-container">
                
                
                <Video />
            
                <div className="footer-section">
                    <a href="/projeto" id="link-txt">SOBRE O PROJETO E OS PARTICIPANTES</a>
                    <div className="line"></div>
                </div>
            </div>
        
        
            
        </section>

    )
}

export default Projeto_novo;