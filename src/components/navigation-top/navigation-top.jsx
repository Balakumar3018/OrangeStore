import "./navigation-top.css";
import { OrangeStoreLogo } from "../../assets"
import { Link } from "react-router-dom";
export function NavigationTop(){
    return(
            <div className="navigation-bar">
                <div className="nav-logo-LinkItems">
                    <Link to="/home"><img className="image-logo" src={OrangeStoreLogo} alt="orangeStore-logo" /> </Link>
                    <Link to="/home" className="text-logo">Home</Link>
                    <Link to="/products" className="text-logo">Shop now</Link>
                </div>
                <div className="nav-search-icons">
                    <div className="search-bar2">
                        <input type="search" className="input-area" id="search-bar" placeholder="type to search"/>
                    </div>
                    <Link to="/wishlist" className="heart-icon">
                        <i className="fa-solid fa-heart"></i>
                        <span className="heart-badge"></span>
                    </Link>
                    <Link to="/cart"  className="cart-icon">
                        <i className="fa-solid fa-cart-shopping fa-lg"></i>
                        <span className="cart-badge "></span>
                    </Link>
                    <Link to="/login">
                        <button class="btn btn-primary">Account</button>
                    </Link>
                </div>
            </div>		
    )
}