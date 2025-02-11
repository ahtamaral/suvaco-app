import React from "react";
import { renderTitleSubtitle } from "../functions";
import './PageTimeline.css'
import { Link } from "react-router-dom";
import { placeImageFromSheetByID } from "../functions";
import DATA from "../json/resultado_formatado.json"

function PageTimeline(props){
    return <section>
        <div className="section-container">
            {renderTitleSubtitle(props.title,props.subtitle)}
        
            <div className= "section-pages">
                <Link to="/Ano2012" className="img-container container-scale">
                    <img src="img/105.jpg" alt="Desfile 27 - Ano 2012" />
                    <h3>Desfile 27 - Ano 2012</h3>
                </Link>
                <Link to="/Ano1986" className="img-container container-scale">
                    {placeImageFromSheetByID(10, DATA)}
                    <h3>Desfile 01 - Ano 1986</h3>
                </Link>
            </div>
            <div className="footer-section">
                                <Link id="link-txt" to="/">VOLTAR</Link>
                                <div className="line"></div>
                    </div>
        </div>
                    
    </section>
}

export default PageTimeline