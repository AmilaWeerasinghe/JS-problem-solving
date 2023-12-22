import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask } from './reducer/taskSlice';
import { selectTasks } from './reducer/taskSlice';

const TaskCreator = () => {
  const dispatch = useDispatch();
  const tasks = useSelector(selectTasks);

  const [taskName, setTaskName] = useState('');
  const [elapsedTime, setElapsedTime] = useState(0);
  const [timerId, setTimerId] = useState(null);

  const startTimer = () => {
    setTimerId(setInterval(() => setElapsedTime((prev) => prev + 1), 1000));
  };

  const stopTimer = () => {
    clearInterval(timerId);

    if (tasks && Array.isArray(tasks) && elapsedTime > 0) {
      const newTask = {
        id: tasks.length + 1,
        taskName: taskName || '',
        elapsedTime,
      };

      dispatch(addTask(newTask));

      setTaskName('');
      setElapsedTime(0);
    }
  };

  const handleTimeFieldFocus = () => {
    clearInterval(timerId);
  };

  const handleTimeFieldBlur = () => {
    if (!timerId) {
      startTimer();
    }
  };

  const handleTimeFieldChange = (e) => {
    const value = parseInt(e.target.value, 10) || 0;
    setElapsedTime(value);
  };

  useEffect(() => {
    return () => clearInterval(timerId);
  }, [timerId]);

  return (
    <div>
      <label htmlFor="taskName">Task Name:</label>
      <input
        type="text"
        id="taskName"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      />

      <label htmlFor="timeField">Elapsed Time:</label>
      <input
        type="text"
        id="timeField"
        value={elapsedTime}
        onFocus={handleTimeFieldFocus}
        onBlur={handleTimeFieldBlur}
        onChange={handleTimeFieldChange}
      />

      <button id="start" onClick={startTimer}>
        Start
      </button>

      <button id="stop" onClick={stopTimer}>
        Stop
      </button>
    </div>
  );
};

export default TaskCreator;
