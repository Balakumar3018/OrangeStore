import "./navigation-top.css";
import { OrangeStoreLogo } from "../../assets"
import { Link } from "react-router-dom";
import { useCart } from "../../Contexts/Cart-context";
import { useWishlist } from "../../Contexts/Wishlist-context";

export function NavigationTop(){

    const {cartState}=useCart();
    const {wishlistState}=useWishlist();
    return(
            <div className="navigation-bar">
                <div className="nav-logo-LinkItems">
                    <Link to="/"><img className="image-logo" src={OrangeStoreLogo} alt="orangeStore-logo" /> </Link>
                    <Link to="/" className="text-logo">Home</Link>
                    <Link to="/products" className="text-logo">Shop now</Link>
                </div>
                <div className="nav-search-icons">
                    <div className="search-bar2">
                        <input type="search" className="input-area" id="search-bar" placeholder="type to search"/>
                    </div>
                    <Link to="/wishlist" className="heart-icon">
                        <i className="fa-solid fa-heart"></i>
                        <span className="heart-badge">{wishlistState.wishlist.length >0 ? wishlistState.wishlist.length : ''}</span>
                    </Link>
                    <Link to="/cart"  className="cart-icon">
                        <i className="fa-solid fa-cart-shopping fa-lg"></i>
                        <span className="cart-badge ">{cartState.cart.length >0 ? cartState.cart.length : '' }</span>
                    </Link>
                    <Link to="/login">
                        <button class="btn btn-primary">Account</button>
                    </Link>
                </div>
            </div>		
    )
}