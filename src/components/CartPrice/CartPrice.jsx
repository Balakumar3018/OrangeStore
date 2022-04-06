import { useCart } from "../../Contexts/Cart-context";
import "./CartPrice.css"
export const CartPrice=()=>{
    const{cartState}=useCart();
    const itemPrice = cartState.cart.reduce(
        (acc, curr) => acc + Number(curr.price) * Number(curr.quantity),
        0
      );
    return (
        <div class="total-container">
                <div class="total-price-card">
                    <h3>Price details</h3>
                    <div class="price-details">
                        <p>Price of items</p>
                        <p>₹{cartState.cart.length}</p>
                    </div>
                    <div class="price-details">
                        <p>Price of item</p>
                        <p>₹{itemPrice}</p>
                    </div>
                    <div class="price-details">
                        <p>Flat Discount</p>
                        <p>- ₹4000</p>
                    </div>
                    <div class="price-details">
                        <p>Delivery charge</p>
                        <p>₹0</p>
                    </div>
                    <div class="price-details">
                        <p>Total amount</p>
                        <p>{itemPrice ? itemPrice-4000 : 0 }</p>
                    </div>
                    <p>You will save ₹4000 on every order</p>
                    <button class="btn btn-primary">Proceed to pay</button>
                </div>
            </div>
    )
}