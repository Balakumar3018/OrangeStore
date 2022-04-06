const CartReducerFunction=(cartState,{type,payload})=>{
    switch(type){
        case "AddToCart":
            return {...cartState, 
                    cart: [...cartState.cart, { ...payload, quantity: 1 }],}

        case "RemoveFromCart":
            return {
                  ...cartState,
                  cart: cartState.cart.filter((item) => item._id !== payload),};  

        case "Increase_Quantity":
            return {
                    ...cartState,
                    cart: cartState.cart.map((item) =>
                        item._id === payload ? { ...item, quantity: item.quantity + 1 } : item
                      ),};   
        case "Decrease_Quantity":
           return {
                     ...cartState,
                      cart: cartState.cart.map((item) =>
                        item._id === payload ? {
                             ...item,
                             quantity: item.quantity > 1 ? item.quantity - 1 : item.quantity,
                            }: item),
                        };                             
        default:
            return cartState;
        }
    }

 export {CartReducerFunction};