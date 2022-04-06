import {ProductCard} from "../../components/Product-card/ProductCard"
import "./ProductList.css"

export const ProductList=({products})=>{

    return(
        <div className="product-list">
                {
                    products.length > 0 ? ( 
                        products.map((item)=>   <ProductCard  product={item} key={item._id}  />
                    )):(
                            <p>No products found try again after some time</p>
                    )   
                }
        </div>
       
    )
}