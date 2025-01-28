import React, { useState } from "react";
import './Ano2012.css';
import { Link } from "react-router-dom";
import Player from "./componentes-anos/player";

function Ano2012() {
    //cada item do array representa a visibilidade de uma divisória
    const [divisoriasVisibilidade, setDivisoriasVisibilidade] = useState([false, false]);

    const toggleDivisoriaVisibility = (index) => {
        setDivisoriasVisibilidade((prevState) =>
            prevState.map((visivel, i) => (i === index ? !visivel : visivel))
        );
    };

    return (
        <section>
            <div className="section-container">
                <div className="section-title-subtitle">
                    <h2>Desfile 27 - Ano 2012</h2>
                    <h3>
                        <Link to="/timeline">VOLTAR PARA LINHA DO TEMPO</Link>
                    </h3>
                </div>

                {/* BOX DE ACESSO RÁPIDO */}
                <div className="acesso-rapido">
                    <span id="acesso">Acesso Rápido</span>
                    <div className="box">
                        <ul className="box-links">
                            <li>O Contexto Histórico</li>
                            <li>O Samba</li>
                            <li>Ancora</li>
                            <li>Ancora</li>
                            <li>Ancora</li>
                            <li>Ancora</li>
                            <li>Ancora</li>
                            <li>Ancora</li>
                            <li>Ancora</li>
                            <li>Ancora</li>
                            <li>Ancora</li>
                            <li>Ancora</li>
                            <li>Ancora</li>
                            <li>Ancora</li>
                            <li>Ancora</li>
                            <li>Ancora</li>
                        </ul>
                    </div>

                    
                </div>


                {/* Divisória 1 */}
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
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad ab facere dolor. Eligendi error reprehenderit magnam eaque corrupti. Expedita nisi iusto doloribus quibusdam quisquam veritatis, enim non quos quod a!</p>
                                </div>
                            ) : (
                                <div className="divisoria-fechada">
                                    <h4 className="divisoria-titulo-fechado">Título Fechado</h4>
                                    <h4 className="divisoria-titulo-fechado">Título Fechado</h4>
                                    
                                    <div className="divisoria-fechada-imgs-flex">
                                    <img src="img/Screenshot_1.png"/>
                                    <img src="img/Screenshot_10.png"/>
                                    <img src="img/Screenshot_15.png"/>
                                    <img src="img/Screenshot_6.png"/>
                                </div>


                                </div>
                            )}
                        </div>
                    </div>

                    {/* Divisória 2 */}
                    <div className="divisoria">
                        <div className="divisoria-header">
                            <h3>O Samba</h3>
                            <button
                                id="btn-divisoria"
                                onClick={() => toggleDivisoriaVisibility(1)}
                            >
                                {divisoriasVisibilidade[1]
                                    ? "CLIQUE PARA OCULTAR"
                                    : "CLIQUE PARA VER MAIS"}
                            </button>
                        </div>

                        <div className="divisoria-content">
                            {divisoriasVisibilidade[1] ? (
                                <div className="divisoria-aberta">


                                {/*DIVISORIA ABERTA*/}
                                {/*DIVISORIA ABERTA*/}

                                    <h3 className="title-divisoria-aberta">Título Aberto</h3>
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad ab facere dolor. Eligendi error reprehenderit magnam eaque corrupti. Expedita nisi iusto doloribus quibusdam quisquam veritatis, enim non quos quod a!</p>
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad ab facere dolor. Eligendi error reprehenderit magnam eaque corrupti. Expedita nisi iusto doloribus quibusdam quisquam veritatis, enim non quos quod a!</p>
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad ab facere dolor. Eligendi error reprehenderit magnam eaque corrupti. Expedita nisi iusto doloribus quibusdam quisquam veritatis, enim non quos quod a!</p>
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad ab facere dolor. Eligendi error reprehenderit magnam eaque corrupti. Expedita nisi iusto doloribus quibusdam quisquam veritatis, enim non quos quod a!</p>
                                    <h3></h3>
                                    <h3 className="title-divisoria-aberta">Escute o samba</h3>
                                    <Player audioSrc={"songs/2012 Suvaco Samba Palmas pro Suvaco.mp3"}></Player>
                                    
                                    
                                </div>
                            ) : (
                                <div className="divisoria-fechada">
                                
                                {/*DIVISORIA FECHADA*/}
                                {/*DIVISORIA FECHADA*/}

                                    <h4 className="divisoria-titulo-fechado">Título Fechado</h4>
                                    <h4 className="divisoria-titulo-fechado">Título Fechado</h4>
                                        <div className="divisoria-fechada-imgs-flex">
                                        <img src="img/Screenshot_1.png"/>
                                        <img src="img/Screenshot_10.png"/>
                                        <img src="img/Screenshot_15.png"/>
                                        <img src="img/Screenshot_6.png"/>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
            </div>
        </section>
    );
}

export default Ano2012;
