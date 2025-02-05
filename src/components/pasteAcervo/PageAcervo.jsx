import React, { useState } from "react";
import "./PageAcervo.css";
import { Link } from "react-router-dom";
import { renderTitleSubtitle } from "../functions";
import categorias from "../json/categorias.json";
import DATA from "../json/resultado_formatado.json";

function PageAcervo(props) {
    const [menuOpen, setMenuOpen] = useState(false);
    const [categoriasClicadas, setCategoriasClicadas] = useState([]);
    const [fullScreenActivated, setFullScreenActivated] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(null);

    const imagensFiltradas = DATA.filter(item => item.online && item.type === "imagem");

    const imagensExibidas = categoriasClicadas.length > 0 
    ? imagensFiltradas.filter(item => {
        const keywordsArray = item.keywords ? item.keywords.split(",").map(k => k.trim().toLowerCase()) : [];
        return categoriasClicadas.some(cat => keywordsArray.includes(cat.toLowerCase()));
    })
    : imagensFiltradas;

    function toggleMenuOpen() {
        setMenuOpen(prev => !prev);
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
        setCurrentIndex(prevIndex => (prevIndex > 0 ? prevIndex - 1 : imagensExibidas.length - 1));
    }

    function nextImage() {
        setCurrentIndex(prevIndex => (prevIndex < imagensExibidas.length - 1 ? prevIndex + 1 : 0));
    }

    return (
        <section>
            <div className="section-container">
                {renderTitleSubtitle(props.title, props.subtitle)}

                <button id="categorias-button" onClick={toggleMenuOpen}>
                    Selecione as categorias desejadas <i className="ri-arrow-drop-down-line"></i>
                </button>

                {menuOpen && (
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
                )}

                <div className="portfolio">
                    {imagensExibidas.map((item, index) => (
                        <img 
                            key={index} 
                            src={`img/${item.item}`} 
                            onClick={() => imgFullScreen(index)} 
                            alt={item.desc} 
                        />
                    ))}
                </div>

                {/* Fullscreen */}
                {fullScreenActivated && currentIndex !== null && (
                    <div className="fullscreen-container">
                        <button className="close-btn" onClick={closeFullScreen}><i className="ri-close-large-line"></i></button>
                        <img className="fullscreen" src={`img/${imagensExibidas[currentIndex].item}`} alt={imagensExibidas[currentIndex].desc} />
                        <button className="nav-btn left" onClick={prevImage}><i className="ri-arrow-left-line"></i></button>
                        <button className="nav-btn right" onClick={nextImage}><i className="ri-arrow-right-line"></i></button>
                        
                        <div className="thumbnails">
                            {imagensExibidas.slice(Math.max(0, currentIndex - 4), currentIndex + 5).map((item, index) => (
                                <img 
                                    key={index} 
                                    className={`thumb ${item.item === imagensExibidas[currentIndex].item ? "active" : ""}`} 
                                    src={`img/${item.item}`} 
                                    onClick={() => setCurrentIndex(imagensExibidas.indexOf(item))}
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
