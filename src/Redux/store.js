import {configureStore} from '@reduxjs/toolkit';
import CartSlice from './Slices/CartSlice.jsx';
import categoryReducer from './Slices/Category'; 
import searchSlice from './Slices/searcSlice.jsx'



const store = configureStore({
  reducer:{
    cart : CartSlice,
    category: categoryReducer,
    search: searchSlice,
  }
})

export  default store;