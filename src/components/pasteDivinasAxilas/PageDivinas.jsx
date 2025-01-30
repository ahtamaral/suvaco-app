import React from "react";
import { renderTitleSubtitle } from "../functions";
import { Link } from "react-router-dom";
import './Divinas.css'

function PageDivinas(props){
    return(
    <section>
        <div className="section-container">
            {renderTitleSubtitle(props.title, props.subtitle)}
            <main>
                aaaa



            </main>
            <div className="footer-section">
                        <Link id="link-txt" to="/">VOLTAR</Link>
                        <div className="line"></div>
            </div>
        </div>

        



    </section>)
}

export default PageDivinas;