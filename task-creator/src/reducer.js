// reducers/taskSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tasks: [],
  taskIdCounter: 1,
};

const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
      state.taskIdCounter += 1;
    },
  },
});

export const { addTask } = taskSlice.actions;

export const selectTasks = (state) => state.tasks.tasks;

export default taskSlice.reducer;
