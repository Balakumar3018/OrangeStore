import { Routes, Route } from "react-router-dom";
import {LandingPage,CartPage,LoginPage,LogoutPage,ProductsPage,WishlistPage} from "../pages";

export default function StoreRoutes(){
    return(
        <Routes>
            <Route path="/home" element={<LandingPage/>} />
            <Route path="/cart" element={<CartPage/>} />
            <Route path="/login" element={<LoginPage/>} />
            <Route path="/logout" element={<LogoutPage/>} />
            <Route path="/products" element={<ProductsPage/>} />
            <Route path="/wishlist" element={<WishlistPage/>} />
        </Routes>
    )
}