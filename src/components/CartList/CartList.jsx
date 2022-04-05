import "./CartList.css"

const  CartList=({product})=>{
      const {
           _id,productName,
        brand,RAM,price,rating,
        reviews,tag,inStock,
        displayImg,categoryName} =product;
        console.log(product);
    return (
        <div className="cart-page-list">
            <div className="horizontal-card">
                <div className="card-image-button">
                    <img className="card-image" src={displayImg} alt={price}/>
                </div>
                <div className="horizonatalcard-text-container">
                <div className="card-description" >
                    <h4>{productName}</h4>
                    <p>RAM : {RAM} </p>
                    <p>Rs. {price} </p> 
                </div>
                <div className="quantity-buttons">
                    <button class="btn btn-icon btn-minus">
                        <i class="fa-solid fa-minus"></i>
                    </button>
                    <button className="btn  quantityCount">1</button>
                    <button class="btn btn-icon btn-plus">
                    <i class="fa-solid fa-plus"></i>
                    </button>
                </div>
                <div className="card-buttons horizontal-card-buttons">
                    <button className="btn btn-primary">Move to Wishlist</button>
                    <button className="btn btn-secondary">Remove from cart</button>
                </div>
                </div>
            </div>
        </div>
        
    )
}

export {CartList}