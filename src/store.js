import { createStore, combineReducers } from 'redux';
import productReducer from './reducers/productReducer';
import shoppingCartReducer from './reducers/shoppingCartReducer';
import dateReducer from './reducers/dateReducer';

export default createStore(combineReducers({productReducer, shoppingCartReducer, dateReducer}));