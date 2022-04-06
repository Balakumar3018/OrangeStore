import "./WishlistPage.css";
import {WishListCard} from "../../components/Wishlist/Wishlist";
import { Link } from "react-router-dom";
import { useWishlist } from "../../Contexts/Wishlist-context"

export  default function WishlistPage(){
    const {wishlistState}=useWishlist();
    return(
        <div className="wishlistPage-container">
                {
                    wishlistState.wishlist.length > 0 ? (
                        wishlistState.wishlist.map((item)=>{
                            return <WishListCard product={item} key={item._id} />
                        })
                    ):(
                        <div>
                            <p>No items in wishlist</p>
                            <Link to="/products"> Shop now </Link>
                        </div>
                    )
                }
        </div>
    )
}
