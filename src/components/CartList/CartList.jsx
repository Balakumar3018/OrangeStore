import { useCart } from "../../Contexts/Cart-context";
import { useWishlist } from "../../Contexts/Wishlist-context";
import { Link } from "react-router-dom";
import "./CartList.css"

const  CartList=({product})=>{
      const {_id,productName,RAM,price,displayImg,quantity} =product;
      const {cartDispatch}=useCart(); 
      const {wishlistState,wishlistDispatch}=useWishlist();
      
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
                    <button class="btn btn-icon btn-minus" 
                       onClick={()=>cartDispatch({type:"Decrease_Quantity",payload: _id})}
                    >
                        <i class="fa-solid fa-minus"></i>
                    </button>
                    <button className="btn  quantityCount">{quantity}</button>
                    <button class="btn btn-icon btn-plus"
                    onClick={()=>cartDispatch({type:"Increase_Quantity",payload: _id})}
                    >
                        <i class="fa-solid fa-plus"></i>
                    </button>
                </div>
                <div className="card-buttons horizontal-card-buttons">{
                    wishlistState.wishlist.find((item) => item._id === _id) ? (
                        <Link to="/wishlist">
                          <button className="btn btn-primary">
                            Go to wishlist
                          </button>
                        </Link>
                      ) :(
                        <button className="btn btn-primary"
                        onClick={()=>wishlistDispatch({type:"AddToWishlist",payload:product})}>
                            Move to Wishlist
                        </button>
                      )
                }
                    
                    <button className="btn btn-secondary"
                        onClick={()=>cartDispatch({type:"RemoveFromCart", payload:_id})}
                    >Remove from cart</button>
                </div>
                </div>
            </div>
        </div>
        
    )
}

export {CartList}