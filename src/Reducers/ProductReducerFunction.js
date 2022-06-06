 const ProductReducerFunction=(state,action)=>{
    switch(action.type){
        case "Price":
            return {...state,price: action.price_value};
        case "sort":
            return {...state, sortby: action.payload}
        case "rating":
            return {...state, rating:action.payload} 
        case "iPhone":
            return {...state, categories:{
                ...state["categories"], iPhone: !state.categories.iPhone,
            },
        }
        case "Android":
            return {...state, categories:{
                ...state["categories"], Android: !state.categories.Android,
            },
        }    
        case "Keypad":
            return {...state, categories:{
                ...state["categories"], Keypad: !state.categories.Keypad,
            },
        }        
        case "clear":
            return {
                ...state,
                categories:{
                    iPhone: false,
                    Android:false,
                    Keypad: false
                },
                sortby:"null",
                rating:"null",
                price:1000
            }      
        default:
            return state;    
    }
  }

export {ProductReducerFunction};