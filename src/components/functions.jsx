export function rightRender(title, subtitle, right) {
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
