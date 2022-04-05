import { Link } from "react-router-dom"
import { useCart } from "../../Contexts/Cart-context"
import {CartList} from "../../components/CartList/CartList"
export default function CartPage(){

    const {cartState} =useCart();
    return (
        <div className="cartPage-container">
            <div>
                {
                    cartState.cart.length > 0 ? (
                        cartState.cart.map((item)=>{
                            console.log(item)
                            return <CartList product={item} key={item._id} />
                        })
                    ):(
                        <div>
                            <p>No products found in cart</p>
                            <Link to="/products"> Shop now </Link>
                        </div>
                    )
                }
            </div>
        </div>
    )
}
