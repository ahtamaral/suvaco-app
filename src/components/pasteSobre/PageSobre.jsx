import React from "react";
import { renderTitleSubtitle } from "../functions";
import './PageSobre.css'

function PageSobre(props){
    return(
    <section>
        <div className="section-container">
            {renderTitleSubtitle(props.title,props.subtitle)}

        </div>
    </section>)
}

export default PageSobre;