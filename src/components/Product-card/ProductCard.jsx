import { Link } from "react-router-dom";
import { useCart } from "../../Contexts/Cart-context"
import "./ProductCard.css"

export const ProductCard=({product})=>{
    const {
        _id,productName,RAM,price,rating,displayImg} =product;
        const {cartState,cartDispatch}=useCart();
    return(
            <div className="basic-card " key={productName}> 
                <img src={displayImg} width="100%" height="270px" alt={productName} />
                <div className="product-details">
                    <div className="product-name">{productName}</div>
                    <div>RAM: {RAM}</div>
                    <div>Price: {price}</div>
                    <div>Rating: {rating}</div>
                </div>
                <div className="card-buttons">{
                    cartState.cart.find((item) => item._id === _id) ? (
                    <Link to="/cart">
                        <button className="btn btn-primary">
                            Go to cart
                        </button>
                    </Link>
                    ) : (
                        <button className="btn btn-primary"
                        onClick={()=>cartDispatch({type:"AddToCart",payload:product})}>
                            Add to cart
                        </button>
                    ) }
                    
                    <button className="btn btn-secondary">Add to wishlist</button>
                </div>
            </div>    
    )
}