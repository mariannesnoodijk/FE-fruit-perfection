import citroenen from "../assets/citroen_original.jpeg";

function Product( {image, title, description}) {
    return(
            <article className="product">
                <img src={image} alt={title}/>
                <h2 className="product-name">{title}</h2>
                <p className="product-description">{description}</p>
            </article>
    );
}

export default Product;

// <article>
//     <span>{productLabel}</span>
//     <img src={productImage} alt={productImageAlt}/>
//     <p>{productName}</p>
//     <h4>€{productPrice}</h4>
// </article>

