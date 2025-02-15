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

    const categoriaAnos = [...new Set(DATA.map(item => item.year).filter(Boolean))].sort();

    const imagensExibidas = DATA.filter(item => {
        if (!item.online || item.type !== "imagem") return false;
    
        const keywordsArray = item.keywords ? item.keywords.split(",").map(k => k.trim().toLowerCase()) : [];
        const anoSelecionado = categoriasClicadas.filter(cat => !isNaN(cat)).length > 0;
        const categoriaSelecionada = categoriasClicadas.filter(cat => isNaN(cat)).length > 0;
    
        const correspondeAno = categoriasClicadas.includes(item.year.toString());
        const correspondeCategoria = categoriasClicadas.some(cat => keywordsArray.includes(cat.toLowerCase()));
    
        if (anoSelecionado && !categoriaSelecionada) {
            return correspondeAno;
        }
        if (!anoSelecionado && categoriaSelecionada) {
            return correspondeCategoria;
        }
        if (anoSelecionado && categoriaSelecionada) {
            return correspondeAno && correspondeCategoria;
        }
        
        return true;
    });
    
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

    function pushAnoClicado(e) {
        const ano = e.target.innerText;
        setCategoriasClicadas(prevState =>
            prevState.includes(ano)
                ? prevState.filter(item => item !== ano)
                : [...prevState, ano]
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
                    
                    <div className="dropdown-flex">
                            
                            <div className="dropdown1">
                            <span className="filter-title">Características</span>
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
                                </div>

                                <div className="dropdown2">

                            <span className="filter-title">Anos</span>
                                <div className="dropdown">
                                {categoriaAnos.map((ano, index) => (
                                    <li 
                                        onClick={pushAnoClicado} 
                                        className={`categoria-item ${categoriasClicadas.includes(ano.toString()) ? "selecionada" : ""}`}
                                        key={index}
                                    >
                                        {ano}
                                    </li>
                                ))}

                                </div>
                                </div>
                    
                    
                        
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
                        <img className="fullscreen" src={`img/${imagensExibidas[currentIndex].item}`} alt={imagensExibidas[currentIndex].desc} />
                        
                       
                       
                        
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
                        <div className="flex-acervo-botoes">
                            <button className="nav-btn left" onClick={prevImage}><i className="ri-arrow-left-line"></i></button>
                            <button className="close-btn" onClick={closeFullScreen}><i className="ri-close-large-line"></i></button>
                            <button className="nav-btn right" onClick={nextImage}><i className="ri-arrow-right-line"></i></button>
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
