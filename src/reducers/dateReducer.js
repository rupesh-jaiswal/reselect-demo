const initialState = {
    currentTime:undefined
};

export default function dateReducer(state = initialState, action) {
    switch(action.type) {
        case 'SET_DATE': return {...state, currentTime: action.time};
        default: return state;
    }
}