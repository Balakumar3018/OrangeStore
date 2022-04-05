import "./product.css";
import { useState, useEffect } from "react";
import axios from "axios";
import {ProductList} from "../../components/ProductList/ProductList"
import {getFinalFilteredProducts,getRatingSortedProducts,getSortedProducts} from "../../UtilityFunctions/FilterFunctions";
// import { useProduct } from "../../Contexts/Product-context";
// import { Filters } from "../../components/Filters/Filters";


export default function ProductPage(){
        const [products,setProducts]=useState([])
        useEffect(() => {
            const fetchProducts = async () => {
              const res = await axios.get("/api/products");
              setProducts(res.data.products);
            };
            fetchProducts();
          }, []);

          const ProductReducerFunction=(state,action)=>{
            switch(action.type){
                case "sort":
                    return {...state, sortby: action.payload}
                case "rating":
                    return {...state, rating:action.payload} 
                case "category":
                    return {...state, Showcategory:action.payload}    
                case "clear":
                    return {
                        sortby:"null",
                        rating:"null"
                    }      
                default:
                    return state;    
            }
          }
          const [{sortby,rating,Showcategory},dispatch]=useReducer(ProductReducerFunction,
            {sortby:"null",
            rating:"null",
            Showcategory:"All"
            });
          
          const sortedProducts=getSortedProducts(state.products,state.sortby);
          const ratingSortedProducts=getRatingSortedProducts(sortedProducts,state.rating);
          const FinalFilteredProducts=getFinalFilteredProducts(ratingSortedProducts,state.Showcategory)

    return(
        <div className="product-page-container">
            <div className="product-sidebar">
                <div className="filters-container">
                    <p className="filter-text ">Filters</p>
                    <p className="filter-clear" onClick={()=>dispatch({type:"clear"})}>Clear filters</p>
                </div>
                <h3 className="filter-text">Category</h3>
                <div className="category-container">
                        <label  className="category">
                            <input type="checkbox" className="category1" name="category1"
                            onChange={()=>dispatch({type:"category", payload:"All"})}
                            checked={state.Showcategory==="All"}
                            />
                            All
                        </label>
                        <label  className="category">
                            <input type="checkbox" className="category2" name="category2"
                            onChange={()=>dispatch({type:"category", payload:"iPhone"})}
                            checked={state.Showcategory==="iPhone"}
                            />
                            iPhone
                        </label>
                        <label  className="category">
                            <input type="checkbox" className="category3" name="category3"
                            onChange={()=>dispatch({type:"category", payload:"Android"})}
                            checked={state.Showcategory==="Android"}
                            />
                            Android
                        </label>
                        <label  className="category">
                            <input type="checkbox" className="category4" name="category4"
                            onChange={()=>dispatch({type:"category", payload:"Keypad"})}
                            checked={state.Showcategory==="Keypad"}
                            />
                            Keypad
                        </label>
                </div>
                <h3 className="filter-text">Rating</h3>
                <div className="rating-container">
                        <label  className="rating">
                            <input type="radio" className="rating4" name="rating4"
                            onChange={()=>dispatch({type :"rating", payload:"4RatingAbove"})}
                            checked={state.rating==="4RatingAbove"}
                            />
                            4 rating & above
                        </label>
                        <label  className="rating">
                            <input type="radio" className="rating3" name="category3" 
                            onChange={()=>dispatch({type :"rating", payload:"3RatingAbove"})}
                            checked={state.rating==="3RatingAbove"}
                            />
                            3 rating & above
                        </label>
                        <label  className="rating">
                            <input type="radio" className="rating2" name="rating2"
                            onChange={()=>dispatch({type :"rating", payload:"2RatingAbove"})}
                            checked={state.rating==="2RatingAbove"}
                             />
                            2 rating & above
                        </label>
                </div>
                <h3 className="filter-text">Sort by</h3>
                <div className="sortby-container">
                        <label  className="sortby" >
                            <input type="radio" name="pricelowtohigh" value="PriceLowToHigh"
                            onChange={()=>dispatch({type:"sort",payload:"PriceLowToHigh"})} 
                            checked={state.sortby==="PriceLowToHigh"}
                            />
                            Price low to high
                        </label>
                        <label  className="sortby" >
                            <input type="radio" name="pricehightolow" value="PriceHighToLow"
                            onChange={()=>dispatch({type:"sort",payload:"PriceHighToLow"})} 
                            checked={state.sortby==="PriceHighToLow"}
                            />
                            Price high to low
                        </label>
                </div>
            </div>
            <ProductList products={FinalFilteredProducts}/>
        </div>
    )
}   
