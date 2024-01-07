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
});

const isValidInput = (userInput) => {
  return (userInput.duration > 1)
}

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
    {isValidInput(userInput) ? <Results userInput={userInput}/> : <p className="center">Please enter a duration greater than zero</p>}
    </>
    
  )
}

export default App
