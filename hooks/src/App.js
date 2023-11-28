import {useState} from 'react'
import './App.css';

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
    </>
  );
}

export default App;
