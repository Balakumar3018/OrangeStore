import { Routes, Route } from "react-router-dom";
import {LandingPage,CartPage,LoginPage,SignupPage,ProductsPage,WishlistPage} from "../pages/";

export default function StoreRoutes(){
    return(
        <Routes>
            <Route path="/" element={<LandingPage/>} />
            <Route path="/cart" element={<CartPage/>} />
            <Route path="/login" element={<LoginPage/>} />
            <Route path="/signup" element={<SignupPage/>} />
            <Route path="/products" element={<ProductsPage/>} />
            <Route path="/wishlist" element={<WishlistPage/>} />
        </Routes>
    )
}
