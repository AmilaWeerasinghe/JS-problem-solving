import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import {useSelector ,useDispatch} from 'react-redux';
import { useEffect } from 'react';
import { uiActions } from './store/ui-slice';
import Notification from './components/UI/Notification';

let isInitial = true;

function App() {
  const dispatch = useDispatch();
  const showCart = useSelector((state) =>  state.ui.cartIsVisible);
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state)=> state.ui.notification);

  useEffect(()=>{
    const sendCartData = async () => {
      dispatch(uiActions.showNotification({
        status:'pending',
        title: 'sending...',
        message: 'sending cart data!'
      }))
      const response = await fetch('https://react-a19cd-default-rtdb.firebaseio.com/cart.json', {method: 'PUT' , body: JSON.stringify(cart)})

      if(!response.ok){
        throw new Error('sending cart data failed');
      }

      const responseData = response.json();

      dispatch(uiActions.showNotification({
        status:'success',
        title: 'success',
        message: 'sending cart data success!'
      }))
    }

    if(isInitial) {
      isInitial = false;
      return;
    }

    try {
      sendCartData()
    } catch (error) {
      dispatch(uiActions.showNotification({
        status:'error',
        title: 'error...',
        message: 'sending cart data error!'
      }))
    }
  


    
  },[cart ,dispatch])
  return (
    <>
    {notification && <Notification status={notification.status} title={notification.title} message={notification.message} />}
    <Layout>
      {showCart && <Cart />}
      <Products />
    </Layout>
    </>
    
  );
}

export default App;
