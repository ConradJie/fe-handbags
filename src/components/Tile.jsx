function Tile({imgUrl, alt, title, children}) {
    return (
        <section>
            {imgUrl && <img src={imgUrl} alt={alt}/>}
            {title && <h2>{title}</h2>}
            {children}
        </section>
    )
}

export default Tile;