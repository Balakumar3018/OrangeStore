import { Link } from "react-router-dom";
import { useCart } from "../../Contexts/Cart-context"
import "./ProductList.css"

export const ProductList=({products})=>{
    const {_id}=products;
    const {cartState,cartDispatch}=useCart();
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
                <div className="card-buttons">{
                    cartState.cart.find((item) => item._id === _id) ? (
                    <Link to="/cart">
                        <button className="btn btn-primary">
                            Go to cart
                        </button>
                    </Link>
                    ) : (
                        <button className="btn btn-primary"
                        onClick={()=>cartDispatch({type:"AddToCart",payload:item})}>
                            Add to cart
                        </button>
                    ) }
                    
                    <button className="btn btn-secondary">Add to wishlist</button>
                </div>
            </div>    
            ) )
        }
        </div>
        </div>
    )
}