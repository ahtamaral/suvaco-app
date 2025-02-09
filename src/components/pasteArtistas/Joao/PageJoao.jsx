import React from "react";
import { placeImageFromSheetByID, renderTitleSubtitle } from "../../functions";
import Carrossel from "../../pasteTimeline/anos/componentes-anos/Carrossel/Carrossel";
import './PageJoao.css'
import DATA from '../../json/resultado_formatado.json'
import PlaceImageFromSheetByID from "../../pasteTimeline/anos/componentes-anos/imgByID/PlaceImageFromSheetByID";


function PageJoao(){

    return (
        <section>
            <div className="section-container">
                {renderTitleSubtitle("João Aveleira", null)}

                <div className="primeiro-paragrafo">
                <img id="perfil-joao" src="img/96.jpg" alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium perspiciatis, eum exercitationem possimus harum officia commodi nesciunt velit totam voluptatibus eveniet enim quos. Sit possimus porro odit totam vel sequi.
                Iusto, doloribus voluptatibus! Totam vitae odit sed provident esse error aliquid a, vero doloremque illo expedita veniam eaque quisquam ea. Modi magni fuga beatae. Doloribus iure delectus sapiente ad tempora!
                Esse facere, dicta repellat quam ea nulla accusamus perspiciatis fugiat obcaecati, ad ab placeat. Dolore tempora maiores eveniet voluptas quidem facere. Ducimus officiis quasi illum maiores expedita? Neque, temporibus asperiores?
                Velit earum quos ipsam inventore! Illo, laboriosam. Tempore labore quisquam ipsa dicta iste quia, aspernatur aperiam illum fugiat aliquam voluptates laboriosam deserunt eligendi repudiandae quo obcaecati, deleniti eos. Quod, error!
                Expedita non voluptas fugiat molestias inventore cupiditate ab nesciunt accusamus nisi natus, cum eligendi. Repellat voluptate, incidunt architecto praesentium ipsa, accusantium rem corporis eos libero minima neque! Numquam, facilis repellat</p>
                </div>
                

                <h3 className="titulo-artista">Trabalhos Realizados</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae harum, velit mollitia suscipit praesentium totam atque cupiditate, iusto excepturi vero tempora et quos. Accusamus ipsum quisquam numquam placeat. Sed, corrupti!
                Mollitia tempore asperiores quaerat impedit laboriosam, aliquam cum porro quis itaque soluta? Velit, sint! Tempore modi nisi numquam voluptates similique, officiis inventore eligendi eius deleniti obcaecati vitae accusamus dolorum totam.
                Maxime possimus, rerum, architecto minima laudantium quos nesciunt nemo obcaecati deleniti, molestias at alias. Neque sapiente, aperiam, similique id eaque nesciunt debitis doloribus veritatis doloremque eos, iusto quae possimus molestias.
                Nostrum sunt facilis ullam temporibus hic omnis, illo illum, quidem delectus nobis modi odio quasi. Ipsam eligendi dicta veritatis enim iure. Cum quas aliquid veritatis sapiente perferendis voluptate laborum non.
                Dicta optio doloremque delectus repudiandae. Repellat, velit cupiditate minus id perferendis, molestias, hic rerum porro deserunt necessitatibus atque? Dolor vero nobis illo consequuntur veritatis sit molestiae optio reiciendis ullam amet!</p>
                

                <span id="aviso">A ideia aqui é colocar as letras dos sambas/camisetas do artista</span>
                <Carrossel ids={[12,6,7,8,53,10]}></Carrossel>

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