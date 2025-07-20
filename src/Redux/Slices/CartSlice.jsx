import {createSlice} from '@reduxjs/toolkit';

const CartSlice = createSlice({
  name:"cart",
  initialState:{
    cart:[]
  },

  reducers:{
    // reducers are functions that take the current state and an action, and return a new state
    addToCart: (state, action)=>{
      // es ftn ko hum new esliye banaya, jab bhi kisi item ko hum kitni bhi baar add kare , matlab hum ne onion pizza ko do baar add to cart kar dia . tu es se wo cart me dobara add nahi hoga balki sirf uski quantity bharee gi.

     const existingItem = state.cart.find(item => item.id === action.payload.id) ;

     if(existingItem){
      state.cart = state.cart.map((item)=> item.id === action.payload.id ? {...item , quantity: item.quantity + 1} : item);
     }else{
  // here we are adding data to the cart, state is the current state of the cart and action.payload is the data we want to add 
      state.cart.push(action.payload)
      // payload matlab data jo add karna hai
     }
    },

    removeFromCart: (state,action)=>{
      // here we are removing data from the cart, state is the current state of the cart and action.payload is the data we want to remove
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
    
    },

    incrementQuantity:(state,action)=>{
      state.cart = state.cart.map((item)=> item.id === action.payload.id ? {...item, quantity: item.quantity + 1} : item)
    },

    decrementQuantity : (state, action)=>{
      state.cart = state.cart.map((item)=> item.id === action.payload.id ? {...item, quantity: item.quantity - 1} : item)
    }
  },
});

export const{addToCart, removeFromCart, incrementQuantity, decrementQuantity} = CartSlice.actions;

//addToCart aur removeFromCart action perform kar rahe hai esliye cartSlice.actions likha hai enke saath.

export default CartSlice.reducer;