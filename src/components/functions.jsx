export function rightRender(title, subtitle, right) {
    /*Se isRight == True, cria uma classe css right na qual o título fica na direita*/
    const isRight = right === "True";
    return (
        <div className="section-title-subtitle">
            {
            isRight ? (<><h3>{subtitle}</h3><h2 className="right">{title}</h2></>)
            :
            (<><h2 className="not-right">{title}</h2><h3>{subtitle}</h3><div className="subtitle-line"></div></>)}
        </div>
    );
}

export function renderTitleSubtitle(title, subtitle) {
    return (
        <div className="section-title-subtitle">
            <h2 className="not-right">{title}</h2>
            <h3>{subtitle}</h3>
            <div className="subtitle-line"></div>
        </div>
    );
}

export function imgRender(img, id) {
    /*Se a imagem existir, itera sobre o json e coloca as imagens na página numa css classe imgs-section-[ID] 
    com subclasse chamada img-container*/
    if (img.imgExists !== "True") return null;

    return (
        <div className={`imgs-section-${id}`}>
            {Object.entries(img)
                .filter(([key]) => key !== "imgExists")
                .map(([key, value]) => (
                    <div className="img-container" key={key}>
                        <img src={value.path} alt={value.name || ""} />
                        {value.name && <h3>{value.name}</h3>}
                    </div>
                ))}
        </div>
    );
}

export function placeImageFromSheetByID(id, sheet, objClass = null, ObjID = null) {
    const image = sheet.find(item => item.id === id);
    
    if (!image) {
        console.warn(`Imagem com ID ${id} não encontrada.`);
        return <p>Imagem não encontrada</p>;
    }

    return (
        <img 
            src={`img/${image.item}`} 
            alt={image.desc || "Imagem"} 
            title={image.desc || "Imagem"} 
            className={objClass || undefined} 
            id={ObjID || undefined} 
        />
    );
}

