import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from '../store/counter-slice';

const Counter = () => {
 const counter = useSelector(state => state.counter.counter);
 const dispatch = useDispatch();
 const show = useSelector(state => state.counter.showCounter);

 const incrementHandler = () => {
  dispatch(counterActions.increment())
 }

 const decrementHandler = () => {
  dispatch(counterActions.decrement())
 }

 const increaseHandler = () => {
  dispatch(counterActions.increase(5))
 }

  const toggleCounterHandler = () => {
    dispatch({
      type: 'toggle'
    })
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
        <button onClick={increaseHandler}>Increase by 5</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
