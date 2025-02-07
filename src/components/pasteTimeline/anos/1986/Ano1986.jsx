import React, { useState } from "react";
import './Ano1986.css';
import { Link } from "react-router-dom";
import Player from "../componentes-anos/Player/Player";
import Carrossel from "../componentes-anos/Carrossel/Carrossel";
import DATA from "../../../json/resultado_formatado.json"
import PlaceImageFromSheetByID from "../componentes-anos/imgByID/PlaceImageFromSheetByID";

function Ano1986() {
    //cada item do array representa a visibilidade de uma divisória
    const [divisoriasVisibilidade, setDivisoriasVisibilidade] = useState([false, false,false, false, false]);

    const toggleDivisoriaVisibility = (index) => {
        setDivisoriasVisibilidade((prevState) =>
            prevState.map((visivel, i) => (i === index ? !visivel : visivel))
        );
    };

    return (
        <section>
            <div className="section-container">
                <div className="section-title-subtitle">
                    <h2>Desfile 01 - Ano 1986</h2>
                    <h3>DIVINAS AXILAS</h3>
                </div>

                {/* BOX DE ACESSO RÁPIDO */}
                <div className="acesso-rapido">
                    <span id="acesso">Acesso Rápido</span>
                    <div className="box">
                        <ul className="box-links">
                            <li>O Contexto Histórico</li>
                            <li>O Samba</li>
                            <li>O Processo Criativo</li>
                            <li>O Suvaco na Mídia</li>
                        </ul>
                    </div>

                    
                </div>


                {/* Divisória 1 - CONTEXTO HISTÓRICO */}
                <div className="divisoria">
                        <div className="divisoria-header">
                            <h3>O Contexto Histórico</h3>
                            <button
                                id="btn-divisoria"
                                onClick={() => toggleDivisoriaVisibility(0)}
                            >
                                {divisoriasVisibilidade[0]
                                    ? "CLIQUE PARA OCULTAR"
                                    : "CLIQUE PARA VER MAIS"}
                            </button>
                        </div>

                        <div className="divisoria-content">
                            {divisoriasVisibilidade[0] ? (
                                <div className="divisoria-aberta">
                                    <h3 className="title-divisoria-aberta">Título Aberto</h3>
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad ab facere dolor. Eligendi error reprehenderit magnam eaque corrupti. Expedita nisi iusto doloribus quibusdam quisquam veritatis, enim non quos quod a!</p>
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad ab facere dolor. Eligendi error reprehenderit magnam eaque corrupti. Expedita nisi iusto doloribus quibusdam quisquam veritatis, enim non quos quod a!</p>
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad ab facere dolor. Eligendi error reprehenderit magnam eaque corrupti. Expedita nisi iusto doloribus quibusdam quisquam veritatis, enim non quos quod a!</p>
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad ab facere dolor. Eligendi error reprehenderit magnam eaque corrupti. Expedita nisi iusto doloribus quibusdam quisquam veritatis, enim non quos quod a!</p>
                                    <h3 className="title-divisoria-aberta">Título Aberto</h3>
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad ab facere dolor. Eligendi error reprehenderit magnam eaque corrupti. Expedita nisi iusto doloribus quibusdam quisquam veritatis, enim non quos quod a!</p>
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad ab facere dolor. Eligendi error reprehenderit magnam eaque corrupti. Expedita nisi iusto doloribus quibusdam quisquam veritatis, enim non quos quod a!</p>
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad ab facere dolor. Eligendi error reprehenderit magnam eaque corrupti. Expedita nisi iusto doloribus quibusdam quisquam veritatis, enim non quos quod a!</p>
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad ab facere dolor. Eligendi error reprehenderit magnam eaque corrupti. Expedita nisi iusto doloribus quibusdam quisquam veritatis, enim non quos quod a!</p>
                                    <h3 className="title-divisoria-aberta">Título Aberto</h3>
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad ab facere dolor. Eligendi error reprehenderit magnam eaque corrupti. Expedita nisi iusto doloribus quibusdam quisquam veritatis, enim non quos quod a!</p>
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad ab facere dolor. Eligendi error reprehenderit magnam eaque corrupti. Expedita nisi iusto doloribus quibusdam quisquam veritatis, enim non quos quod a!</p>
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad ab facere dolor. Eligendi error reprehenderit magnam eaque corrupti. Expedita nisi iusto doloribus quibusdam quisquam veritatis, enim non quos quod a!</p>
                                
                                </div>
                            ) : (
                                <div className="divisoria-fechada">
                                    <h4 className="divisoria-titulo-fechado">Título Fechado</h4>
                                    <h4 className="divisoria-titulo-fechado">Título Fechado</h4>
                                </div>
                            )}
                        </div>
                </div>



                {/* Divisória 2 - SAMBA */}
                <div className="divisoria">
                    <div className="divisoria-header">
                        <h3>O Samba</h3>
                        <button
                            id="btn-divisoria"
                            onClick={() => toggleDivisoriaVisibility(1)}
                        >
                            {divisoriasVisibilidade[1]
                                    ? "CLIQUE PARA VER A LETRA"
                                    : "CLIQUE PARA CONHECER OS AUTORES"}
                        </button>
                    </div>

                    <div className="divisoria-content">
                        {divisoriasVisibilidade[1] ? (
                            <div className="divisoria-aberta">


                            {/*DIVISORIA ABERTA*/}
                            {/*DIVISORIA ABERTA*/}

                                <h3 className="title-divisoria-aberta">Autores</h3>
                                    
                            </div>
                        
                        ) : (
                            
                            
                            <div className="divisoria-fechada outside">
                                
                            {/*DIVISORIA FECHADA*/}
                            {/*DIVISORIA FECHADA*/}

                                <h3 className="title-divisoria-aberta ">Divinas Axilas</h3>
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

                                        <PlaceImageFromSheetByID id={284} sheet={DATA} objClass={"floated-right"}></PlaceImageFromSheetByID>
                                </div>
                                        
                                <h3 className="title-divisoria-aberta">Escute o Samba</h3>
                                <p>Infelizmente a gravação desse ano não está disponível, porém não deixe de escutar dos outros anos!</p>
                            </div>
                            )}
                    </div>
                </div>
                
                {/* Divisória 3 - ARTES */}
                <div className="divisoria">
                    <div className="divisoria-header">
                        <h3>As Artes do Desfile</h3>
                        <button
                            id="btn-divisoria"
                            onClick={() => toggleDivisoriaVisibility(2)}
                        >
                            {divisoriasVisibilidade[2]
                                    ? "CLIQUE PARA VER AS FOTOS"
                                    : "CLIQUE PARA VER OS ARTISTAS RESPONSÁVEIS"}
                        </button>
                    </div>

                    <div className="divisoria-content">
                        {divisoriasVisibilidade[2] ? (
                            <div className="divisoria-aberta">


                            {/*DIVISORIA ABERTA*/}
                            {/*DIVISORIA ABERTA*/}

                                <h3 className="title-divisoria-aberta">Autores</h3>

                            </div>
                            ) : (
                            <div className="divisoria-fechada outside">
                                
                            {/*DIVISORIA FECHADA*/}
                            {/*DIVISORIA FECHADA*/}
                            

                                <PlaceImageFromSheetByID id={2} sheet={DATA} objClass={"center"}></PlaceImageFromSheetByID>
                                <p style={{textAlign:"center"}}>Arte da primeira camiseta do Suvaco</p>
                            

                            </div>
                            )}
                    </div>
                </div>

                {/* Divisória 4 - SUVACO MÍDIA */}
                <div className="divisoria">
                    <div className="divisoria-header">
                        <h3>O Suvaco na Mídia</h3>
                        <button
                            id="btn-divisoria"
                            onClick={() => toggleDivisoriaVisibility(3)}
                        >
                            {divisoriasVisibilidade[3]
                                    ? "CLIQUE PARA VER OS REGISTROS"
                                    : "CLIQUE PARA VER A HISTÓRIA"}
                        </button>
                    </div>

                    <div className="divisoria-content">
                        {divisoriasVisibilidade[3] ? (
                            <div className="divisoria-aberta">


                            {/*DIVISORIA ABERTA*/}
                            {/*DIVISORIA ABERTA*/}

                                <h3 className="title-divisoria-aberta">Autor</h3>

                            </div>
                            ) : (
                            <div className="divisoria-fechada">
                                
                            {/*DIVISORIA FECHADA*/}
                            {/*DIVISORIA FECHADA*/}

                                <div className="divisoria-fechada-imgs-flex">
                                    <Carrossel ids={[18,15,16,13,14,17,19]}></Carrossel>

                                </div>
                            </div>
                            )}
                    </div>
                </div>

                {/* Divisória 5 - SUVACO MÍDIA */}
                <div className="divisoria">
                    <div className="divisoria-header">
                        <h3>O Desfile</h3>
                    </div>

                    <div className="divisoria-content">
                        {divisoriasVisibilidade[4] ? (
                            // <div className="divisoria-aberta">
                                null
                            // </div>
                            ) : (
                            <div className="divisoria-fechada">
                                
                            {/*DIVISORIA FECHADA*/}
                            {/*DIVISORIA FECHADA*/}

                                <div className="divisoria-fechada-imgs-flex">
                                    <Carrossel ids={[6,10,9,12,7,8]}></Carrossel>

                                </div>
                            </div>
                            )}
                    </div>
                </div>



                    <div className="footer-section">
                                    <Link id="link-txt" to="/timeline">VOLTAR</Link>
                                    <div className="line"></div>
                        </div>
            </div>

            
        </section>
    );
}

export default Ano1986;
