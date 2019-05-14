const initialState = {
    cartItems: []
};

export default function shoppingCartReducer(state=initialState, action) {
    switch(action.type){
        case 'ADD_TO_CART': return {...state, cartItems: state.cartItems.concat([action.index])};
        default: return state;
    }
}
