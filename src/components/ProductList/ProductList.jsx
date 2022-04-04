import "./ProductList.css"

export const ProductList=({products})=>{
    return(
        <div className="product-list">
        <div className="product-cards">{
            products.map((item)=> (
            <div className="basic-card " key={item.productName}> 
                <img src={item.displayImg} width="100%" height="270px" alt={item.productName} />
                <div className="product-details">
                    <div className="product-name">{item.productName}</div>
                    <div>RAM: {item.RAM}</div>
                    <div>Price: {item.price}</div>
                    <div>Rating: {item.rating}</div>
                    {/* {item.inStock && <div >Instock</div>} */}
                    {/* {!item.inStock && <div>Out of stock</div>} */}
                </div>
                <div className="card-buttons">
                    <button className="btn btn-primary">Add to cart</button>
                    <button className="btn btn-secondary">Add to wishlist</button>
                </div>
            </div>    
            ) )
        }
        </div>
        </div>
    )
}