import React from 'react';
import { useSelector } from 'react-redux';
import { selectTasks } from './reducer/taskSlice';

const TasksList = () => {
  const tasks = useSelector(selectTasks);

  const getTotalTime = () => {
    return tasks?.reduce((total, task) => total + task.elapsedTime, 0) || 0;
  };

  return (
    <div>
      <h2>Task List</h2>
      <ul id="tasks">
        {tasks?.map((task) => (
          <li key={task.id} className="task">
            <span className="id">Task ID {task.id}</span>
            <span className="name">Task Name {task.taskName}</span>
            <span className="time">Task Elapsed Time {task.elapsedTime}</span>
          </li>
        ))}
      </ul>

      <div id="total">Total Tracked Time {getTotalTime()}</div>
    </div>
  );
};

export default TasksList;
