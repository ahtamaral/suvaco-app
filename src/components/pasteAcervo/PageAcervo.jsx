import React, { useState } from "react";
import "./PageAcervo.css";
import { Link } from "react-router-dom";
import { renderTitleSubtitle } from "../functions";
import categorias from "../json/categorias.json";


function PageAcervo(props) {
    const [menuOpen, setMenuOpen] = useState(false);
    const [categoriasClicadas, setCategoriasClicadas] = useState([]);
    
    const [fullScreenActivated, setFullScreenActivated] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(null);

    const images = Array.from({ length: 106 }, (_, i) => `img/${i + 1}.jpg`);
    /* ira ser alterado a linha de cima, foi apenas pra testes
    o certo aqui é criar um meio de pegar os dados da planilha e os arquivos pra depois criar um json
    com as imagens e as categorias*/

    function toggleMenuOpen() {
        setMenuOpen(prev => !prev);
        console.log(menuOpen);
    }

    function pushCategoriaClicada(e) {
        const categoria = e.target.innerText;
        setCategoriasClicadas(prevState =>
            prevState.includes(categoria)
                ? prevState.filter(item => item !== categoria)
                : [...prevState, categoria]
        );
    }

    function imgFullScreen(index) {
        setFullScreenActivated(true);
        setCurrentIndex(index);
    }

    function closeFullScreen() {
        setFullScreenActivated(false);
        setCurrentIndex(null);
    }

    function prevImage() {
        setCurrentIndex(prevIndex => (prevIndex > 0 ? prevIndex - 1 : images.length - 1));
    }

    function nextImage() {
        setCurrentIndex(prevIndex => (prevIndex < images.length - 1 ? prevIndex + 1 : 0));
    }

    return (
        <section>
            <div className="section-container">
                {renderTitleSubtitle(props.title, props.subtitle)}

                <button id="categorias-button" onClick={toggleMenuOpen}>
                    Selecione as categorias desejadas <i className="ri-arrow-drop-down-line"></i> 
                    <span id="warning">ainda não habilitado</span>
                </button>

                <div className="dropdown">
                    {categorias.map((nome, index) => (
                        <li 
                            onClick={pushCategoriaClicada} 
                            className={`categoria-item ${categoriasClicadas.includes(nome) ? "selecionada" : ""}`}
                            key={index}
                        >
                            {nome}
                        </li>
                    ))}
                </div>

                <div className="portfolio">
                    {images.map((src, index) => (
                        <img 
                            key={index} 
                            src={src}
                            onClick={() => imgFullScreen(index)} 
                            alt={`Imagem ${index + 1}`} 
                        />
                    ))}
                </div>

                {/* Fullscreen */}
                {fullScreenActivated && currentIndex !== null && (
                    <div className="fullscreen-container">
                        
                        
                        
                        <button className="close-btn" onClick={closeFullScreen}><i className="ri-close-large-line"></i></button>
                        <img className="fullscreen" src={images[currentIndex]} alt={`Imagem ${currentIndex + 1}`} />
                        <button className="nav-btn left" onClick={prevImage}>{<i class="ri-arrow-left-line"></i>}</button>
                        <button className="nav-btn right" onClick={nextImage}>{<i class="ri-arrow-right-line"></i>}</button>

                        <div className="thumbnails">
                            {images.slice(Math.max(0, currentIndex - 4), currentIndex + 5).map((src, index) => (
                                <img 
                                    key={index} 
                                    className={`thumb ${src === images[currentIndex] ? "active" : ""}`} 
                                    src={src} 
                                    onClick={() => setCurrentIndex(images.indexOf(src))}
                                    alt="Miniatura" 
                                />
                            ))}
                        </div>
                    </div>
                )}


            <div className="footer-section">
                                    <Link id="link-txt" to="/">VOLTAR</Link>
                                    <div className="line"></div>
            </div>
            </div>

            
        </section>
    );
}

export default PageAcervo;
