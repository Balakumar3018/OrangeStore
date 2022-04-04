import {useContext,createContext, Children,useReducer} from "react";
import { ProductReducerFunction } from "../ReducerFunctions/ProductReducerFunction";
const ProductContext=createContext();

const ProductProvider=({Children})=>{
    const [state,dispatch]=useReducer(ProductReducerFunction,{sortby:"null"})
    return (
        <ProductContext.Provider value={{state,dispatch}}>
            {Children}
        </ProductContext.Provider>
    )
}
const useProduct=()=>{
    return useContext(ProductContext);
}

export {useProduct,ProductProvider};