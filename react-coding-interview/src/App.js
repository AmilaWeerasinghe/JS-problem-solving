import {useState} from 'react';
import DataFetch from './DataFetch';
import './App.css';


function App() {
  const [count, setCount] = useState(0);
  return (
    <>
    <div className='counter'> <p>{count}</p></div>
    <div className='button'>
      <button onClick={()=>{
        setCount((count) => count+1)
      }}>Increment</button>
      </div>
    <div className="App-flexbox">
      <DataFetch/>
    </div></>
    
  );
}

export default App;
