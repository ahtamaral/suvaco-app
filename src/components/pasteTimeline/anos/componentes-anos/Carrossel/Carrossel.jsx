import React, { useState } from "react";
import './Carrossel.css';

const Carrossel = ({ artistas }) => {
    const [indiceAtual, setIndiceAtual] = useState(0);
    const totalArtistas = artistas.length;
    const artistasVisiveis = artistas.slice(indiceAtual, indiceAtual + 3);

    const avancar = () => {
        if (indiceAtual + 3 < totalArtistas) {
            setIndiceAtual(indiceAtual + 3);
        }
    };

    const voltar = () => {
        if (indiceAtual - 3 >= 0) {
            setIndiceAtual(indiceAtual - 3);
        }
    };

    return (
        <div className="flex-carrossel" style={{ marginTop: "35px" }}>
            <i className="ri-arrow-left-line arrow" onClick={voltar}></i>
            {artistasVisiveis.map((artista, index) => (
                <div className="artista" key={index}>
                    <span id="artista-funcao">{artista.funcao}</span>
                    <img className="img-artista" src={artista.imagem} alt={artista.nome} />
                    <span id="artista-name">{artista.nome}</span>
                </div>
            ))}
            <i className="ri-arrow-right-line arrow" onClick={avancar}></i>
        </div>
    );
};

export default Carrossel;
