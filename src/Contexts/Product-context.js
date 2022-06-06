import {useContext,createContext,useReducer} from "react";
import { ProductReducerFunction } from "../Reducers/ProductReducerFunction";
const ProductContext=createContext();

const ProductProvider=({children})=>{
    const [state,dispatch]=useReducer(ProductReducerFunction,
        {
        categories:{
            iPhone: false,
            Android:false,
            Keypad: false
        },
        sortby:"null",
        rating:"null",
        price:1000
    });

    return (
        <ProductContext.Provider value={{state,dispatch}}>
            {children}
        </ProductContext.Provider>
    )
}
const useProduct=()=>{
    return useContext(ProductContext);
}

export {useProduct,ProductProvider};