import {createSlice} from '@reduxjs/toolkit';
import { uiActions } from './ui-slice';

const cartSlice = createSlice({
    name:'cart',
    initialState: {
        items: [],
        totalQuantity: 0,
    },
    reducers:{
        AddItemToCart (state,action){
            const newItem = action.payload;
            const existingItem = state.items.find((item) => item.id===newItem.id)
            state.totalQuantity++;
            if(!existingItem){
                state.items.push({id: newItem.id, price:newItem.price,quantity:1, title:newItem.title,totalPrice: newItem.price});
            } else {
                existingItem.quantity++;
                existingItem.totalPrice+=newItem.price;
            }
        },
        removeItemFromCart (state,action){
            const id = action.payload;
            const existingItem = state.items.find((item) => item.id===id);
            state.totalQuantity--;
            if(existingItem.quantity ===1){
                state.items = state.items.filter((item) => item.id !== id);
            }else {
                existingItem.quantity--;
                existingItem.totalPrice=-existingItem.price;
            }
        }
    }
})

export const sendCartData = (cart) => {
    return  async (dispatch) => {
        dispatch(uiActions.showNotification({
            status:'pending',
            title: 'sending...',
            message: 'sending cart data!'
          }))

          const sendRequest = async ()=> {
            const response = await fetch('https://react-a19cd-default-rtdb.firebaseio.com/cart.json', {method: 'PUT' , body: JSON.stringify(cart)})
             if(!response.ok){
                throw new Error('sending cart data failed');
             } 
          }

          try {
            await sendRequest();
            dispatch(uiActions.showNotification({
                status:'success',
                title: 'success',
                message: 'sending cart data success!'
              }))
          } catch (error) {
            dispatch(uiActions.showNotification({
                status:'error',
                title: 'error...',
                message: 'sending cart data error!'
              }))
          }
    }
}

export default cartSlice;

export const cartActions = cartSlice.actions;

