import { useState } from "react"

const TaskList = ({tasklist})=>{
    const [tasks,setTasks] = useState(tasklist|| []);
    return(
        <section>
            <h2>Task List</h2>
            New Tasks
            <p>This does not have tasks yet</p>
            <input/><button>Add task</button>
            <ul>
            {tasks.map((task,index) => {
                return(<>
                 <li id={index}>
                    {task}
                </li>
                <button>Clear</button>
                </>)
            })}
            </ul>
            
        </section>
    )
}

export default TaskList;