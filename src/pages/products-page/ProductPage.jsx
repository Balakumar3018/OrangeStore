import "./product.css";
import { useState, useEffect } from "react";
import axios from "axios";
import {ProductList} from "../../components/ProductList/ProductList"
import {getFinalFilteredProducts,getRatingSortedProducts,getSortedProducts} from "../../UtilityFunctions/FilterFunctions";
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
          const {sortby,rating,Showcategory}=state;
          const sortedProducts=getSortedProducts(products,sortby);
          const ratingSortedProducts=getRatingSortedProducts(sortedProducts,rating);
          const FinalFilteredProducts=getFinalFilteredProducts(ratingSortedProducts,Showcategory)

    return(
        <div className="product-page-container">
            <Filters/>
            <ProductList products={FinalFilteredProducts}/>
        </div>
    )
}   
