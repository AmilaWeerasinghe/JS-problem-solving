import {useState} from 'react';

const UserInput = ()=> {
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
                [inputIdentifier]:newValue
            }
        })
    }

    return(
        <section id="user-input">
            <div className="input-group">
                <p>
                <label>Initial Investment</label>
                <input value={userInput.initialInvestment} onChange={(event)=>handleChange('initialInvestment',event.target.value)} type='number' required/>
                </p>
                <p><label>Annual Investment</label>
                <input value={userInput.annualInvestment} onChange={(event)=>handleChange('annualInvestment',event.target.value)} type='number' required/>
                </p>
                </div>
                <div className="input-group">
                <p>
                <label>Expected Return</label>
                <input value={userInput.expectedReturn} onChange={(event)=>handleChange('expectedReturn',event.target.value)} type='number' required/>
                </p>
                <p>
                <label>Duration</label>
                <input value={userInput.duration} onChange={(event)=>handleChange('duration',event.target.value)} type='number' required/>
                </p>
                
            </div>
        </section>
    )
}

export default UserInput;