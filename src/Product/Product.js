import './Product.css'

export default function Product({title: productTitle, image = "logo192.png", price, count, children}) {

    let title = 'Product Card'
    return (
        <div>
            <h2>Product Card</h2>
            <div className="card">
                <img src={image} alt="Denim Jeans" />
                <h1>{productTitle}</h1>
                <p className="price">${price}</p>
                <p>It is the best smart phone for 2023 and it is the new version</p>
                {children}
                <p><button>Add To Card</button></p>
            </div>
        </div>
    )
}

/*Product.defaultProps = {
    image: 'logo192.png',
    title: '',
    price: ''
}*/