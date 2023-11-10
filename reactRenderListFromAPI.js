import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  //use states
  const [actualdata, setactualData] = useState(null);
  // use fetch to get api data
  // const response = await fetch(https://catfact.ninja/breeds);

  // use effect to subscribe to
  useEffect(() => {
    fetch(`https://catfact.ninja/breeds`)
      .then((response) => response.json())
      .then((actualData) => {
        setactualData(JSON.stringify(actualData.data))
        console.log("actual",JSON.stringify(actualData.data));
      });
  }, []);
  return (
    <div className="App">
      <ul>{this.actualData}</ul>
      <h1>Hello CodeSandbox</h1>
      <h2>{this.actualData}</h2>
    </div>
  );
}
