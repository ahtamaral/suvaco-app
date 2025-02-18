import React from "react";
import { placeImageFromSheetByID, renderTitleSubtitle } from "../../functions";
import './PageJoao.css'
import { Link } from "react-router-dom";
import DATA from '../../json/resultado_formatado.json'
import PlaceImageFromSheetByID from "../../pasteTimeline/anos/componentes-anos/imgByID/PlaceImageFromSheetByID";
import Carrossel from "../../pasteTimeline/anos/componentes-anos/Carrossel/Carrossel";


function PageJoao(){

    const artista = [

    ]

    return (
        <section>
            <div className="section-container">
                {renderTitleSubtitle("João Avelleira", null)}

                <div className="section-1">
                <img id="perfil-artista" src="img/96.jpg" alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium perspiciatis, eum exercitationem possimus harum officia commodi nesciunt velit totam voluptatibus eveniet enim quos. Sit possimus porro odit totam vel sequi.
                Iusto, doloribus voluptatibus! Totam vitae odit sed provident esse error aliquid a, vero doloremque illo expedita veniam eaque quisquam ea. Modi magni fuga beatae. Doloribus iure delectus sapiente ad tempora!
                Esse facere, dicta repellat quam ea nulla accusamus perspiciatis fugiat obcaecati, ad ab placeat. Dolore tempora maiores eveniet voluptas quidem facere. Ducimus officiis quasi illum maiores expedita? Neque, temporibus asperiores?
                Velit earum quos ipsam inventore!</p>
                </div>
                
                <div className="Obras">
                    {renderTitleSubtitle("Obras", null)}
                
                </div>


                <div className="footer-section">
                    <Link id="link-txt" to="/">VOLTAR</Link>
                    <div className="line"></div>
                </div>
            </div>

            
        </section>
    )
}

export default PageJoao;