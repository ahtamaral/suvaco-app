import React from "react";
import './Carrossel.css'
import DATA from '../../../../json/resultado_formatado.json'
import { placeImageFromSheetByID } from "../../../../functions";

function Carrossel({ids}){
    return (
    <div className="carrossel-extern-div">
            <div id="warning">carrosel</div>
        <div className="carrossel">

            {ids.map((id) => placeImageFromSheetByID(id,DATA))}




            </div>

    </div>)

}

export default Carrossel