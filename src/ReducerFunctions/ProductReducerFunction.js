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
                rating:"null",
                category:"All"
            }      
        default:
            return state;    
    }
  }

export {ProductReducerFunction};