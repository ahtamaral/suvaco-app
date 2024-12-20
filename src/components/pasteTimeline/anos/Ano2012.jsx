import React, { useState } from "react";
import './Ano2012.css';
import { Link } from "react-router-dom";

function Ano2012() {
    const categorias = [
        {
            nome: "Contexto Histórico",
            texto: ["O que estava acontecendo no mundo, no Brasil, no Rio de Janeiro?", "Como isso está relacionado ao bloco"],
            imagens: ["img/Screenshot_1.png", "img/Screenshot_2.png", "img/Screenshot_3.png"],
        },
        {
            nome: "O desfile",
            texto: ["Texto 2"],
            imagens: ["img/Screenshot_7.png", "img/Screenshot_8.png", "img/Screenshot_7.png"],
        },
        {
            nome: "categoria3",
            texto: ["Texto 3"],
            imagens: ["img/Screenshot_12.png", "img/Screenshot_15.png", "img/Screenshot_1.png"],
        },
    ];

    const [divisoriasVisiveis, setDivisoriasVisiveis] = useState(
        categorias.reduce((acc, categoria) => {
            acc[categoria.nome] = false; 
            return acc;
        }, {})
    );

    const toggleDivisoriaVisibility = (nome) => {
        setDivisoriasVisiveis((prevState) => ({
            ...prevState,
            [nome]: !prevState[nome],
        }));
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

                <div className="acesso-rapido">
                    <div className="texts">
                        <span id="acesso">Acesso Rápido</span>
                    </div>

                    <div className="box">
                        <ul className="box-links">
                            {categorias.map((categoria) => (
                                <li key={categoria.nome}>{categoria.nome}</li>
                            ))}
                        </ul>
                    </div>
                </div>

                {categorias.map((categoria) => (
                    <div className="divisoria" key={categoria.nome}>
                        <div className="divisoria-header">
                            <h3 className="divisoria-title">{categoria.nome}</h3>
                            <button
                                className="divisoria-btn"
                                onClick={() => toggleDivisoriaVisibility(categoria.nome)}
                            >
                                {divisoriasVisiveis[categoria.nome]
                                    ? "CLIQUE PARA ESCONDER"
                                    : "CLIQUE PARA MOSTRAR MAIS"}
                            </button>
                        </div>

                        {divisoriasVisiveis[categoria.nome] ? (
                            <div className="divisoria-box-aberta">
                                {/* Box aberta */}
                                <h2 className="divisoria-year-aberta">{categoria.nome}</h2>
                            </div>
                        ) : (
                            <div className="divisoria-box-fechada">
                                
                                {/* Box fechada */}

                                {Array.isArray(categoria.texto) ? (
                                    categoria.texto.map((txt, index) => (
                                        <h4 className="h4-box-fechada" key={index}>{txt}</h4>
                                    ))
                                ) : (
                                    <h4 className="h4-box-fechada">{categoria.texto}</h4>
                                )}
                                <div className="divisoria-fechada-imgs">
                                    {categoria.imagens.map((src, index) => (
                                        <img src={src} alt={`${categoria.nome} imagem ${index + 1}`} key={index} />
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Ano2012;
