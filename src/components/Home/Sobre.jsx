import React from "react";

import { rightRender, imgRender } from "../functions";

function Sobre(props){
    

    return (
        <section>
            <div className="section-container">
                {rightRender(props.title,props.subtitle,props.right)}
                <div className="paragraph">
                    {props.text && props.text.map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                        ))}
                </div>
                
                <div className="footer-section">
                    <a href="/sobre" id="link-txt">{props.link}</a>
                    <div className="line"></div>
                </div>
            </div>
        </section>
    )
}

export default Sobre;