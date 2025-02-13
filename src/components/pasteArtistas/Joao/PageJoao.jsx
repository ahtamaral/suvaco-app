import React from "react";
import { placeImageFromSheetByID, renderTitleSubtitle } from "../../functions";
import './PageJoao.css'
import DATA from '../../json/resultado_formatado.json'
import PlaceImageFromSheetByID from "../../pasteTimeline/anos/componentes-anos/imgByID/PlaceImageFromSheetByID";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


function PageJoao(){

    const config = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

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
                    <Slider {...config}>
                        
                    </Slider>

                </div>

            <div>

            </div>
                <span id="aviso">A ideia aqui é colocar as letras dos sambas/camisetas do artista</span>

                <h3 className="titulo-artista">Galeria do Artista</h3>
                <span id="aviso">A ideia aqui é colocar as fotos do artista no bloco / Fotos da Pessoa</span>
                <div className="acervo">
                <PlaceImageFromSheetByID id={7} sheet={DATA}></PlaceImageFromSheetByID>
                <PlaceImageFromSheetByID id={8} sheet={DATA}></PlaceImageFromSheetByID>
                <PlaceImageFromSheetByID id={9} sheet={DATA}></PlaceImageFromSheetByID>
                <PlaceImageFromSheetByID id={10} sheet={DATA}></PlaceImageFromSheetByID>
                <PlaceImageFromSheetByID id={12} sheet={DATA}></PlaceImageFromSheetByID>
                <PlaceImageFromSheetByID id={8} sheet={DATA}></PlaceImageFromSheetByID>
                </div>

                

            </div>
        </section>
    )
}

export default PageJoao;