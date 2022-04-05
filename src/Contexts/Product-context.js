import {useContext,createContext,useReducer} from "react";
import { ProductReducerFunction } from "../ReducerFunctions/ProductReducerFunction";
const ProductContext=createContext();

const ProductProvider=({children})=>{
    const [state,dispatch]=useReducer(ProductReducerFunction,
        {sortby:"null",
        rating:"null",
        Showcategory:"All"
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