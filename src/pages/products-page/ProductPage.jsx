import "./product.css";
import { useState, useEffect,useReducer } from "react";
import axios from "axios";

export default function ProductPage(){
        const [products,setProducts]=useState([])
        useEffect(() => {
            const fetchProducts = async () => {
              const res = await axios.get("/api/products");
              setProducts(res.data.products);
            };
            fetchProducts();
          }, []);

          //use reducer functions
          const ProductReducerFunction=(state,action)=>{
            switch(action.type){
                case "sort":
                    return {...state, sortby: action.payload}
                case "rating":
                    return {...state, rating:action.payload} 
                case "category":
                    return {...state, category:action.payload}    
                case "clear":
                    return {
                        sortby:"null",
                        rating:"null"
                    }      
                default:
                    return state;    
            }
          }
          
          //filter functions
          const getSortedProducts=(products,sortby)=>{
              if(sortby==="PriceLowToHigh"){
                  return products.sort((a,b)=> a.price - b.price);
              }
              if(sortby==="PriceHighToLow"){
                return products.sort((a,b)=> b.price - a.price);
            }
              return products;
          }
          const getRatingSortedProducts=(products,rating)=>{
              if(rating==="4RatingAbove"){
                  return products.filter((item)=> item.rating >= 4.0);
              }
              if(rating==="3RatingAbove"){
                return products.filter((item)=> item.rating >= 3.0);
              }
              if(rating==="2RatingAbove"){
                return products.filter((item)=> item.rating >= 2.0);
              }
              return products;
          }
          const getFinalFilteredProducts=(products,category)=>{
              if(category==="All"){
                  
                  return products;
              }
              if(category==="iPhone"){
                  return products.filter((item)=> item.categoryName==="iPhone")
              }
              if(category==="Android"){
                return products.filter((item)=> item.categoryName==="Android")
              }
              if(category==="Keypad"){
                return products.filter((item)=> item.categoryName==="keypad")
              }
            return products;
          }
          //init variables
          const [{sortby,rating,category},dispatch]=useReducer(ProductReducerFunction,
            {sortby:"null",
            rating:"null",
            category:"All"
            });
          
          const sortedProducts=getSortedProducts(products,sortby);
          const ratingSortedProducts=getRatingSortedProducts(sortedProducts,rating);
          const FinalFilteredProducts=getFinalFilteredProducts(ratingSortedProducts,category)

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
                            checked={category==="All"}
                            />
                            All
                        </label>
                        <label  className="category">
                            <input type="checkbox" className="category2" name="category2"
                            onChange={()=>dispatch({type:"category", payload:"iPhone"})}
                            checked={category==="iPhone"}
                            />
                            iPhone
                        </label>
                        <label  className="category">
                            <input type="checkbox" className="category3" name="category3"
                            onChange={()=>dispatch({type:"category", payload:"Android"})}
                            checked={category==="Android"}
                            />
                            Android
                        </label>
                        <label  className="category">
                            <input type="checkbox" className="category4" name="category4"
                            onChange={()=>dispatch({type:"category", payload:"Keypad"})}
                            checked={category==="Keypad"}
                            />
                            Keypad
                        </label>
                </div>
                <h3 className="filter-text">Rating</h3>
                <div className="rating-container">
                        <label  className="rating">
                            <input type="radio" className="rating4" name="rating4"
                            onChange={()=>dispatch({type :"rating", payload:"4RatingAbove"})}
                            checked={rating==="4RatingAbove"}
                            />
                            4 rating & above
                        </label>
                        <label  className="rating">
                            <input type="radio" className="rating3" name="category3" 
                            onChange={()=>dispatch({type :"rating", payload:"3RatingAbove"})}
                            checked={rating==="3RatingAbove"}
                            />
                            3 rating & above
                        </label>
                        <label  className="rating">
                            <input type="radio" className="rating2" name="rating2"
                            onChange={()=>dispatch({type :"rating", payload:"2RatingAbove"})}
                            checked={rating==="2RatingAbove"}
                             />
                            2 rating & above
                        </label>
                </div>
                <h3 className="filter-text">Sort by</h3>
                <div className="sortby-container">
                        <label  className="sortby" >
                            <input type="radio" name="pricelowtohigh" value="PriceLowToHigh"
                            onChange={()=>dispatch({type:"sort",payload:"PriceLowToHigh"})} 
                            checked={sortby==="PriceLowToHigh"}
                            />
                            Price low to high
                        </label>
                        <label  className="sortby" >
                            <input type="radio" name="pricehightolow" value="PriceHighToLow"
                            onChange={()=>dispatch({type:"sort",payload:"PriceHighToLow"})} 
                            checked={sortby==="PriceHighToLow"}
                            />
                            Price high to low
                        </label>
                </div>
            </div>
            <div className="product-list">
        <div className="product-cards">{
            FinalFilteredProducts.map((item)=> (
            <div className="basic-card " key={item.productName}> 
                <img src={item.displayImg} width="100%" height="270px" alt={item.productName} />
                <div className="product-details">
                    <div className="product-name">{item.productName}</div>
                    <div>RAM: {item.RAM}</div>
                    <div>Price: {item.price}</div>
                    <div>Rating: {item.rating}</div>
                    {/* {item.inStock && <div >Instock</div>} */}
                    {/* {!item.inStock && <div>Out of stock</div>} */}
                </div>
                <div className="card-buttons">
                    <button className="btn btn-primary">Add to cart</button>
                    <button className="btn btn-secondary">Add to wishlist</button>
                </div>
            </div>    
            ) )
        }
        </div>
        </div>
        </div>
    )
}   
