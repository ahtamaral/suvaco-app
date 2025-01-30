import React from "react";
import { renderTitleSubtitle } from "../functions";
import './PageTimeline.css'
import { Link } from "react-router-dom";

function PageTimeline(props){
    return <section>
        <div className="section-container">
            {renderTitleSubtitle(props.title,props.subtitle)}
        
            <div className= "section-pages">

                <Link to="/Ano2012" className="img-container container-scale">
                    <img src="img/Screenshot_1.png" alt="Desfile 27 - Ano 2012" />
                    <h3>Desfile 27 - Ano 2012</h3>
                </Link>
                <Link to="/ano-1986" className="img-container container-scale">
                    <img src="img/Screenshot_1.png" alt="Desfile 01 - Ano 1986" />
                    <h3>Desfile 01 - Ano 1986</h3>
                </Link>
                {/* <Link to="/" className="img-container">
                    <img src="" alt="" />
                    <h3>Desfile XX - Ano 20XX</h3>
                </Link>
                <Link to="/" className="img-container">
                    <img src="" alt="" />
                    <h3>Desfile XX - Ano 20XX</h3>
                </Link>
                <Link to="/" className="img-container">
                    <img src="" alt="" />
                    <h3>Desfile XX - Ano 20XX</h3>
                </Link>
                <Link to="/" className="img-container">
                    <img src="" alt="" />
                    <h3>Desfile XX - Ano 20XX</h3>
                </Link>
                <Link to="/" className="img-container">
                    <img src="" alt="" />
                    <h3>Desfile XX - Ano 20XX</h3>
                </Link>
                <Link to="/" className="img-container">
                    <img src="" alt="" />
                    <h3>Desfile XX - Ano 20XX</h3>
                </Link> */}
            </div>
            <div className="footer-section">
                                <Link id="link-txt" to="/">VOLTAR</Link>
                                <div className="line"></div>
                    </div>
        </div>
                    
     
    </section>
   
}

export default PageTimeline