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
const getCategoryFilteredProducts=(products,iPhone,Android,Keypad)=>{
    const categoryFiltered=[];
    if(iPhone===true &&Android ===true && Keypad===true )
      return products;

    if(!iPhone){
      let newProducts=products.filter((item)=>"iPhone"===  item.categoryName);
      categoryFiltered.push(...newProducts);
    }
   
    if(!Android){
      let newProducts=products.filter((item)=> "Android"=== item.categoryName );
      categoryFiltered.push(...newProducts);
    }

    if(!Keypad){
      let newProducts=products.filter((item)=>"keypad" === item.categoryName);
      categoryFiltered.push(...newProducts);
    }
  
    return categoryFiltered;
}
const getPriceSortedProducts=(products,price)=>{
  return products.filter((item)=>item.price >= price)
}

export {  
    getCategoryFilteredProducts,
    getRatingSortedProducts,
    getSortedProducts,
    getPriceSortedProducts
};