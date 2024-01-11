import NewTask from "./NewTask";

const Tasks = ({tasks, onTaskAdd, onTaskDelete})=>{

    const handleTaskDelete = () => {
        onTaskDelete();
    }
    return(
        <section>
            <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
            <NewTask onTaskAdd={onTaskAdd}/>
            {!tasks && <p className="text-stone-800 my-4">This project does not have tasks yet</p>}
            {tasks && tasks.length > 0 && <ul className="p-4 mt-8 rounded-md bg-stone-100">
            {tasks.map((task) => {
                return(<>
                 <li className="flex justify-between my-4" id={task.projectId}>
                    {task}
                </li>
                <button onClick={handleTaskDelete}className="text-stone-700 hover:text-red-500">Clear</button>
                </>)
            })}
            </ul>}
            
        </section>
    )
}

export default Tasks;