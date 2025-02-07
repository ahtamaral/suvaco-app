import React from "react";
import './Carrossel.css'
import { placeImageFromSheetByID } from "../../../../functions";
import DATA from '../../../../json/resultado_formatado.json'

function Carrossel({ids}){

    return (
    <div className="carrossel-extern-div">

        <div className="carrossel">

        {ids.map((id) => (
            <div key={id}>{placeImageFromSheetByID(id, DATA, "card")}</div>
        ))}

        </div>

    </div>)

}

export default Carrossel