const initialState = {
    products: [{
        name:'Pen',
        price: 10
    },
    {
        name:'Pencil',
        price: 5
    },
    {
        name:'Eraser',
        price: 10
    },
    {
        name:'Notepad',
        price: 15
    }]
};

export default function productReducer(state=initialState) {
    return state;
}