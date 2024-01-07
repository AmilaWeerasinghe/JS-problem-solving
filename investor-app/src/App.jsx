import Header from "./components/Header";
import UserInput from "./components/UserInput";
import { useState } from "react";
import Results from "./components/Results";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment:1000,
    annualInvestment:1200,
    expectedReturn: 1000,
    duration:5
})

const handleChange = (inputIdentifier, newValue)=>{
  setUserInput((prevUserInput) => {
      return{
          ...prevUserInput,
          [inputIdentifier]:Number(newValue)
      }
  })
}

  return (
    <>
    <Header/>
    <UserInput userInput={userInput} onChange={handleChange}/>
    <Results userInput={userInput}/>
    </>
    
  )
}

export default App
