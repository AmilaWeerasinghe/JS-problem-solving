import { useState } from "react";

const NewTask = ({onTaskAdd}) => {
    const [enteredTask, setEnteredTask] = useState('');

    const handleChange = (event) => {
        setEnteredTask(event.target.value);
    }

    const handleClick = () => {
        onTaskAdd(enteredTask);
        setEnteredTask('')
    }

    return(
        <div className="flex items-center gap-4">
             <input onChange={handleChange} type="text" className="w-64 px-2 py-1 rounded-sm bg-stone-200"/>
             <button onClick={handleClick} className="text-stone-700 hover:text-red-500">Add task</button>
        </div>
       
    )
}

export default NewTask;