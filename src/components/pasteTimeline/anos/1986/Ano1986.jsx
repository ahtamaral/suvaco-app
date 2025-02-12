import React, { useState } from "react";
import './Ano1986.css';
import { Link } from "react-router-dom";
import Player from "../componentes-anos/Player/Player";
import DATA from "../../../json/resultado_formatado.json"
import PlaceImageFromSheetByID from "../componentes-anos/imgByID/PlaceImageFromSheetByID";
import Carrossel from "../componentes-anos/Carrossel/Carrossel";

function Ano1986() {
    
    const artistas_SAMBA = [
        { funcao: "AUTOR", nome: "João Avelleira", imagem: "img/96-modified.png" },
        { funcao: "INTÉRPRETE", nome: "Sonia Matos", imagem: "img/96-modified.png" },
        { funcao: "AUTOR", nome: "João Avelleira", imagem: "img/96-modified.png" }
    ];

    const artistas_ARTE = [

        { funcao: "INTÉRPRETE", nome: "Sonia Matos", imagem: "img/96-modified.png" },
    ]


    const [estadoVisibilidadeDivisorias, setEstadoVisibilidadeDivisorias ] = useState([true,true,true,true,true]);

    const toggleDivisoria = (index) => {
        setEstadoVisibilidadeDivisorias(prevState => 
            prevState.map((visivel, i) => (i === index ? !visivel : visivel))
        );
    };
    

    return (
        <section>
            <div className="section-container">
                <div className="section-title-subtitle">
                    <h2 id="titulo-principal">Desfile 01 - Ano 1986</h2>
                </div>

                {/* BOX DE ACESSO RÁPIDO */}
                <div className="acesso-rapido">
                    <span id="acesso">Acesso Rápido</span>
                    <div className="box">
                    <ul className="box-links">
                        <li><a href="#contexto-historico">O Contexto Histórico</a></li>
                        <li><a href="#o-samba">O Samba</a></li>
                        <li><a href="#processo-criativo">Artes do Desfile</a></li>
                        <li><a href="#suvaco-midia">O Suvaco na Mídia</a></li>
                        <li><a href="#o-desfile">O Desfile</a></li>

                    </ul>

                    </div>

                </div>

                
                <div id="contexto-historico" className="div 0"> {/*DIVISÓRIA 0*/}
                    <div className="section-title-subtitle"> {/*TÍTULO*/}
                                    
                        <h2 id="titulo-ancora">Contexto Histórico</h2>
                        <button id="subtitle" onClick={() => toggleDivisoria(0)}>
                            {estadoVisibilidadeDivisorias[0] ? "FECHAR" : "ABRIR"}
                        </button>
                        <div className="subtitle-line"></div>
                                                                        {/*FIM TÍTULO*/}
                    </div>

                    
                                    
                    {estadoVisibilidadeDivisorias[0] && (
                        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, dignissimos nemo, sed distinctio, impedit recusandae qui cupiditate magnam deserunt quasi natus! Aut ducimus incidunt aperiam ea at voluptas distinctio recusandae.
                                    Est placeat tempora voluptates deleniti, obcaecati earum illum possimus hic dignissimos vel. Eius excepturi natus beatae ex quibusdam ipsa eum, aspernatur quisquam deleniti iste accusantium minima adipisci minus sint cum.
                                    Nulla ad iure, assumenda, praesentium molestiae vel aliquam eum neque, nesciunt accusamus deleniti autem reprehenderit qui eaque consectetur minima eveniet optio. Commodi corrupti aliquid quas laborum excepturi molestias dignissimos pariatur.
                                    Eum, natus omnis enim reiciendis, totam maiores ab, quae officiis id repellendus fuga quisquam! Possimus dolore repellat repellendus consectetur placeat. Fugit porro quaerat, adipisci cumque tempore libero. Impedit, nisi officiis.
                                    Sapiente cum voluptatibus nihil ex. Hic porro quibusdam aspernatur, ipsam sit autem ducimus provident dolor ipsum nihil iusto magnam numquam unde cum tenetur! Iste qui sed dolor, temporibus alias excepturi?
                        </p>
                    )}

                                    
                </div> {/*FIM DIVISÓRIA 0*/}

                
                <div id="o-samba" className="div 1"> {/*DIVISÓRIA 1*/}
                    <div className="section-title-subtitle"> {/*TÍTULO*/}
                                    
                        <h2 id="titulo-ancora">O Samba</h2>
                        <button id="subtitle" onClick={() => toggleDivisoria(1)}>
                            {estadoVisibilidadeDivisorias[1] ? "FECHAR" : "ABRIR"}
                        </button>
                    <div className="subtitle-line"></div>
                    </div>
                                                                        {/*FIM TÍTULO*/}
                
                    {estadoVisibilidadeDivisorias[1] && ( 
                        <>
                        <div className="subdiv1-1"> 

                        
                        <h3 className="subtitle-subdiv">Divinas Axilas</h3>
                        <div className="letra-side-by-side">
                            <p id="letra">
                                Venham ver, <br></br>
                                O odor do Redentor nos inspirou,<br></br>
                                Sob o manto protetor<br></br>
                                Das divinas axilas<br></br>
                                Brincamos nesta festa com amor.<br></br><br></br>

                                E contrariando<br></br>
                                As leis do Criador<br></br>
                                Cristo Redentor<br></br>
                                Libertando-nos do mal<br></br>
                                Desceu do céu e vem brincar o carnaval.<br></br><br></br>

                                (BIS)<br></br>
                                Gávea Pequena, Rocinha, Humaitá,<br></br> 
                                Índios Tamoios, ilustres Tupinambás,<br></br>

                                Mas venham ver.<br></br>
                            
                            </p>

                            <PlaceImageFromSheetByID id={284} sheet={DATA} ObjID={"foto-letra-86"}></PlaceImageFromSheetByID>
                        </div>
                    </div>
                    
                    <div className="subdiv1-2"> {/* SUBDIVISAO 2 - ESCUTE SAMBA */}
                        <h3 className="subtitle-subdiv" style={{marginBottom:"75px"}}>Escute o Samba</h3>
                        <Player audioSrc={"songs/2012 Suvaco Samba Palmas pro Suvaco.mp3"}></Player>

                    </div>

                        <h3 className="subtitle-subdiv" style={{marginTop:"50px"}}>Por trás da letra</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta maxime, natus doloribus voluptatum accusantium veritatis non voluptas eveniet nihil minima consequuntur aliquid inventore aspernatur, perferendis, quis officiis nisi magni molestias?
                        Dolorum unde ipsam illo natus, laudantium dignissimos nulla blanditiis fugiat distinctio in. Tempora similique molestiae quisquam placeat distinctio voluptatem quas possimus ex dolores nisi beatae, ullam culpa cum debitis neque?
                        Placeat, ad quod esse alias molestias error ex eligendi saepe! Optio labore deserunt eligendi numquam debitis tempora aperiam alias ut, totam eaque nulla autem quidem minima, explicabo, dolorum recusandae officia.
                        Dolorum, temporibus. Commodi distinctio perspiciatis sit sint error, saepe sequi! Deserunt vitae suscipit tempore officiis quibusdam, voluptas nam. Quae maiores architecto temporibus, ab quos excepturi reprehenderit deleniti tempore? Corporis, ducimus.
                        Voluptates, ipsum. Illum deleniti molestias quo magnam consectetur animi modi amet nulla, praesentium et voluptatibus consequatur, quam non numquam blanditiis, quisquam sapiente excepturi debitis tenetur! Inventore perspiciatis ipsam placeat nisi?</p>


                        <h3 className="subtitle-subdiv">Autores e Intérpretes</h3>
                        <Carrossel artistas={artistas_SAMBA} />
                        </>
                        )}

                                    
                </div> {/*FIM DIVISÓRIA 1*/}
                
                <div id="processo-criativo" className="div 2"> {/*DIVISÓRIA 2*/}
                    <div className="section-title-subtitle"> {/*TÍTULO*/}
                                    
                        <h2 id="titulo-ancora">Artes do Desfile</h2>
                        <button id="subtitle" onClick={() => toggleDivisoria(2)}>
                            {estadoVisibilidadeDivisorias[2] ? "FECHAR" : "ABRIR"}
                        </button>
                        <div className="subtitle-line"></div>
                                                                        {/*FIM TÍTULO*/}
                    </div>
                    
                    {estadoVisibilidadeDivisorias[2] && (<> {/* SUBDIVISAO 2 - ESCUTE SAMBA */}
                        <h3 className="subtitle-subdiv">Camiseta</h3>
                        <PlaceImageFromSheetByID id={2} sheet={DATA} objClass={"center"} ObjID={"camisa86"}></PlaceImageFromSheetByID>
                        <p style={{textAlign:"center"}}>Design da camiseta de 1986</p>

                    <div className="subdiv3-2"> 
                        <h3 className="subtitle-subdiv">Artistas</h3>
                        <Carrossel artistas={artistas_ARTE} />
                        </div></>)}

                                    
                </div> {/*FIM DIVISÓRIA 2*/}

                <div id="suvaco-midia" className="div 3" style={{marginTop: "25px"}}> {/*DIVISÓRIA 3*/}
                    <div className="section-title-subtitle"> {/*TÍTULO*/}
                                    
                        <h2 id="titulo-ancora">O Suvaco na Mídia</h2>
                        <button id="subtitle" onClick={() => toggleDivisoria(3)}>
                            {estadoVisibilidadeDivisorias[3] ? "FECHAR" : "ABRIR"}
                        </button>
                        <div className="subtitle-line"></div>
                                                                        {/*FIM TÍTULO*/}
                    </div>
                    {estadoVisibilidadeDivisorias[3] && (
                        <>
                        <div className="flex-midia">
                        <div className="sistema-colunas">
                            <PlaceImageFromSheetByID id={18} sheet={DATA} objClass={"img-coluna"} ObjID={"nasce-suvaco"}></PlaceImageFromSheetByID>
                            <PlaceImageFromSheetByID id={15} sheet={DATA} objClass={"img-coluna"}></PlaceImageFromSheetByID>
                            <PlaceImageFromSheetByID id={17} sheet={DATA} objClass={"img-coluna"}></PlaceImageFromSheetByID>
                            <PlaceImageFromSheetByID id={14} sheet={DATA} objClass={"img-coluna"}></PlaceImageFromSheetByID>
                            <PlaceImageFromSheetByID id={16} sheet={DATA} objClass={"img-coluna"}></PlaceImageFromSheetByID>
                            <PlaceImageFromSheetByID id={19} sheet={DATA} objClass={"img-coluna"}></PlaceImageFromSheetByID>
                            <PlaceImageFromSheetByID id={13} sheet={DATA} objClass={"img-coluna"}></PlaceImageFromSheetByID>
                        </div>
                    </div>
                        </>)}
                    


                                    
                </div> {/*FIM DIVISÓRIA 3*/}
                
                
                <div id="o-desfile" className="div 4" style={{marginTop: "25px"}}> {/*DIVISÓRIA 4*/}
                    <div className="section-title-subtitle"> {/*TÍTULO*/}
                                    
                        <h2 id="titulo-ancora">O Desfile</h2>
                        <button id="subtitle" onClick={() => toggleDivisoria(4)}>
                            {estadoVisibilidadeDivisorias[4] ? "FECHAR" : "ABRIR"}
                        </button>
                        <div className="subtitle-line"></div>
                                                                        {/*FIM TÍTULO*/}
                    </div>
                    {estadoVisibilidadeDivisorias[4] && (<>
                    <div className="flex-midia">
                    <div className="sistema-colunas">
                        <PlaceImageFromSheetByID id={6} sheet={DATA} objClass={"img-coluna"}></PlaceImageFromSheetByID>
                        <PlaceImageFromSheetByID id={10} sheet={DATA} objClass={"img-coluna"}></PlaceImageFromSheetByID>
                        <PlaceImageFromSheetByID id={9} sheet={DATA} objClass={"img-coluna"}></PlaceImageFromSheetByID>
                        <PlaceImageFromSheetByID id={12} sheet={DATA} objClass={"img-coluna"}></PlaceImageFromSheetByID>
                        <PlaceImageFromSheetByID id={7} sheet={DATA} objClass={"img-coluna"}></PlaceImageFromSheetByID>
                        <PlaceImageFromSheetByID id={8} sheet={DATA} objClass={"img-coluna"}></PlaceImageFromSheetByID>
                    </div>
                    </div>
                    

                    </>)}
                                    
                </div> {/*FIM DIVISÓRIA 5*/}


            </div>
                
            
        </section>
    );
}

export default Ano1986;
