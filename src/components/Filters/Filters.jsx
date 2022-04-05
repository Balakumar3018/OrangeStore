import "./Filters.css";
import { useProduct } from "../../Contexts/Product-context";
export  const Filters=()=>{
    const {state,dispatch}=useProduct();
    const {sortby,rating,Showcategory}=state;

    return(
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
                            checked={Showcategory==="All"}
                            />
                            All
                        </label>
                        <label  className="category">
                            <input type="checkbox" className="category2" name="category2"
                            onChange={()=>dispatch({type:"category", payload:"iPhone"})}
                            checked={Showcategory==="iPhone"}
                            />
                            iPhone
                        </label>
                        <label  className="category">
                            <input type="checkbox" className="category3" name="category3"
                            onChange={()=>dispatch({type:"category", payload:"Android"})}
                            checked={Showcategory==="Android"}
                            />
                            Android
                        </label>
                        <label  className="category">
                            <input type="checkbox" className="category4" name="category4"
                            onChange={()=>dispatch({type:"category", payload:"Keypad"})}
                            checked={Showcategory==="Keypad"}
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
    )
}