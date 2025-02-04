import React, { useState } from "react";
import './Ano2012.css';
import { Link } from "react-router-dom";
import Player from "../componentes-anos/Player/Player";
import Carrossel from "../componentes-anos/Carrossel/Carrossel";

function Ano2012() {
    //cada item do array representa a visibilidade de uma divisória
    const [divisoriasVisibilidade, setDivisoriasVisibilidade] = useState([false, false,false]);

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
                    <h3></h3>
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
                                    <img src="img/1.jpg"/>
                                    <img src="img/5.jpg"/>
                                    <img src="img/56.jpg"/>
                                    <img src="img/100.jpg"/>
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

                                    <h3 className="title-divisoria-aberta">Análise da Letra</h3>
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
                                            <img src="img/14.jpg" alt="" />
                                            <img src="img/13.jpg" alt="" />
                                            <img src="img/76.jpg" alt="" />
                                            <img src="img/4.jpg" alt="" />
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>



                    {/* Divisória 3 */}
                    <div className="divisoria">
                        <div className="divisoria-header">
                            <h3>As Artes do Desfile</h3>
                            <button
                                id="btn-divisoria"
                                onClick={() => toggleDivisoriaVisibility(2)}
                            >
                                {divisoriasVisibilidade[2]
                                    ? "CLIQUE PARA OCULTAR"
                                    : "CLIQUE PARA VER MAIS"}
                            </button>
                        </div>

                        <div className="divisoria-content">
                            {divisoriasVisibilidade[2] ? (
                                <div className="divisoria-aberta">


                                {/*DIVISORIA ABERTA*/}
                                {/*DIVISORIA ABERTA*/}

                                    <h3 className="title-divisoria-aberta">O Processo Criativo</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis rerum dolorum animi eum repudiandae, consequuntur libero excepturi inventore eius tenetur modi voluptatibus fugit, soluta reprehenderit quasi labore enim tempora nam? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus esse praesentium soluta aliquam voluptas, fugit officiis ullam animi a. Consequuntur, minima eligendi. Non recusandae facilis assumenda, quibusdam veritatis ad dolorem. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos facere itaque iste eum fugit quia, blanditiis at cupiditate ex pariatur. Tempora distinctio atque qui fuga deleniti obcaecati animi possimus iure? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad ab facere dolor. Eligendi error reprehenderit magnam eaque corrupti. Expedita nisi iusto doloribus quibusdam quisquam veritatis, enim non quos quod a!</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet ducimus voluptate dolor ipsa qui eligendi sequi perspiciatis consequuntur quod, aut temporibus obcaecati totam tempore? Aperiam reprehenderit blanditiis ratione ab quas.
                                    Nostrum earum dolorum, aliquam nam illo dolorem accusamus, impedit et sed quae eveniet dolor explicabo quis iusto minima saepe nihil quas, quam error quos facilis vel corrupti? Quasi, deleniti quibusdam?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad ab facere dolor. Eligendi error reprehenderit magnam eaque corrupti. Expedita nisi iusto doloribus quibusdam quisquam veritatis, enim non quos quod a!</p>
                                    <Carrossel></Carrossel>
                                    
                                </div>
                            ) : (
                                <div className="divisoria-fechada">
                                
                                {/*DIVISORIA FECHADA*/}
                                {/*DIVISORIA FECHADA*/}

                                    <h4 className="divisoria-titulo-fechado">Título Fechado</h4>
                                    <h4 className="divisoria-titulo-fechado">Título Fechado</h4>
                                        <div className="divisoria-fechada-imgs-flex">
                                            <img src="img/33.jpg" alt="" />
                                            <img src="img/36.jpg" alt="" />
                                            <img src="img/45.jpg" alt="" />
                                            <img src="img/41.jpg" alt="" />
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

export default Ano2012;
