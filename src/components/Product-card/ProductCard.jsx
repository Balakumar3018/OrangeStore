import { Link } from "react-router-dom";
import { useCart } from "../../Contexts/Cart-context";
import { useWishlist } from "../../Contexts/Wishlist-context"
import "./ProductCard.css";

export const ProductCard=({product})=>{
        const {_id,productName,RAM,price,rating,displayImg} =product;
        const {cartState,cartDispatch}=useCart();
        const {wishlistState,wishlistDispatch}=useWishlist();
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
                    {
                        wishlistState.wishlist.find((item) => item._id === _id) ? (
                                <button className="btn btn-secondary"
                                onClick={()=>wishlistDispatch({type:"RemoveFromWishlist",payload:_id})}>
                                    Remove wishlist
                                </button>
                            ) : (
                                <button className="btn btn-secondary"
                                onClick={()=>wishlistDispatch({type:"AddToWishlist",payload:product})}>
                                    Add to wishlist
                                </button>
                            )
                    }
                </div>
            </div>    
    )
}