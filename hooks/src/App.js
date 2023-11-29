import {useState} from 'react'
import './App.css';
import MyComponent from './MyComponent';
import MyRefComponent from './MyRefComponent';

function App() {
  const [count,setCount] = useState(0);
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
    <button onClick={decrementCount}>-</button>
    <span>{count}</span>
    <button onClick={incrementCount}>+</button>
    <MyRefComponent/>
    <MyComponent/>

    </>
  );
}

export default App;
