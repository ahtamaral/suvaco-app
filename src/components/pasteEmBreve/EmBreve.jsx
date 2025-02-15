import './EmBreve.css'
import React from "react";
import { Link } from "react-router-dom";

function EmBreve(){
    return <section>
        
        <div className="section-container">

            <p id="breve">Poxa, infelizmente a página que você solicitou ainda está sendo desenvolvida pela nossa equipe. <br /><br />Fique de olho e tente novamente no futuro!</p>

            <div className="footer-section">
                        <Link id="link-txt" to="/">VOLTAR</Link>
                        <div className="line"></div>       
            </div>
        </div>

         
    </section>
    
    
}

export default EmBreve;