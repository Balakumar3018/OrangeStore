import {useContext,createContext,useReducer} from "react";
import { CartReducerFunction } from "../ReducerFunctions/CartReducerFunction";

const CartContext=createContext();

const CartProvider=({children})=>{
    const [cartState,cartDispatch]=useReducer(CartReducerFunction,{cart:[]});

    return (
        <CartContext.Provider value={{cartState,cartDispatch}}>
            {children}
        </CartContext.Provider>
    )
}
const useCart=()=>{
    return useContext(CartContext);
}

export { useCart, CartProvider};