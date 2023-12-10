import {useState} from 'react'
import './App.css';
import MyComponent from './MyComponent';
import MyRefComponent from './MyRefComponent';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from './state';

function App() {
  const [count,setCount] = useState(0);

  // from store state return only the necessary value for a variable
  const state = useSelector((state)=> state.account);
  const dispatch = useDispatch();

  // destucture action creator functions
  const { depositMoney , withdrawMoney }= bindActionCreators(actionCreators, dispatch);

  const decrementCount = ()=>{
    setCount(count-1);
  }

  const incrementCount = ()=> {
    setCount((prevCount) => {
     return prevCount+1;
    });
  }
  return (
    <>
    <div>
      <h3>{state}</h3>
    <div>
      <button onClick={()=> depositMoney(1000)}> Deposit</button>
    </div>
    <div>
      <button onClick={()=> withdrawMoney(500)}> Withdraw</button>
    </div>
    </div>
    
    <button onClick={decrementCount}>-</button>
    <span>{count}</span>
    <button onClick={incrementCount}>+</button>
    <MyRefComponent/>
    <MyComponent/>

    </>
  );
}

export default App;
