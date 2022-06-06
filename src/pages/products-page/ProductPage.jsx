import "./product.css";
import { useState, useEffect } from "react";
import axios from "axios";
import {ProductList} from "../../components/ProductList/ProductList"
import {getCategoryFilteredProducts,getRatingSortedProducts,getSortedProducts,getPriceSortedProducts} from "../../UtilityFunctions/FilterFunctions";
import { useProduct } from "../../Contexts/Product-context";
import { Filters } from "../../components/Filters/Filters";


export default function ProductPage(){
       
        const [products,setProducts]=useState([])
        
        useEffect(() => {
            const fetchProducts = async () => {
              const res = await axios.get("/api/products");
              setProducts(res.data.products);
            };
            fetchProducts();
          }, []);

          const {state}=useProduct();
          const priceFilteredProducts=getPriceSortedProducts(products,state.price)
          const sortedProducts=getSortedProducts(priceFilteredProducts,state.sortby);
          const ratingSortedProducts=getRatingSortedProducts(sortedProducts,state.rating);
          const FinalFilteredProducts=getCategoryFilteredProducts(ratingSortedProducts,!state.categories.iPhone,!state.categories.Android,!state.categories.Keypad)

    return(
        <div className="product-page-container">
            <Filters/>
            <ProductList products={FinalFilteredProducts}/>
        </div>
    )
}   