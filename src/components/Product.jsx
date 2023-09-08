function Product({action, imgUrl, alt, description, price}) {
    return (
        <article>
            <span>{action}</span>
            <img src={imgUrl} alt={alt}/>
            <p>{description}</p>
            <h4>{price}</h4>
        </article>
    )
}

export default Product;