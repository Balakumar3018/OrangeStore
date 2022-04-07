const WishlistReducerFunction=(wishlistState,{type,payload})=>{
    switch(type) {
        case 'AddToWishlist':
            return {
                ...wishlistState, wishlist: [...wishlistState.wishlist,payload,],}
        case 'RemoveFromWishlist':
            return {
                ...wishlistState, wishlist: wishlistState.wishlist.filter((item) => item._id !== payload)}
        default:
            return wishlistState;
    }
}

export { WishlistReducerFunction };