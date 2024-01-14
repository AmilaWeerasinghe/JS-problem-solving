import { uiActions } from './ui-slice';
import { cartActions } from './cart-slice';

export const fetchData = ()=> {
    return async (dispatch) => {
        dispatch(uiActions.showNotification({
            status:'pending',
            title: 'fetching...',
            message: 'fetching cart data!'
          }))

          const fetchRequest = async ()=> {
            const response = await fetch('https://react-a19cd-default-rtdb.firebaseio.com/cart.json')
             if(!response.ok){
                throw new Error('fetching cart data failed');
             } 
             const data = response.json();

             return data;
          }

          try{
           const cartData = await fetchRequest();
           dispatch(cartActions.replaceCart(cartData));
           dispatch(uiActions.showNotification({
            status:'success',
            title: 'success',
            message: 'fetching cart data success!'
          }))
          } catch (error) {
            dispatch(uiActions.showNotification({
                status:'error',
                title: 'error...',
                message: 'fetching cart data error!'
              }))
          }
          
    }
}

export const sendCartData = (cart) => {
    return  async (dispatch) => {
        dispatch(uiActions.showNotification({
            status:'pending',
            title: 'sending...',
            message: 'sending cart data!'
          }))

          const sendRequest = async ()=> {
            const response = await fetch('https://react-a19cd-default-rtdb.firebaseio.com/cart.json', {method: 'PUT' , body: JSON.stringify({
                items: cart.items,
                totalQuantity: cart.totalQuantity
            })})
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