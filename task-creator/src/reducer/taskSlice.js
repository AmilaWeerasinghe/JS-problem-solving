// reducer/taskSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  tasks: [], // Ensure tasks is initialized as an empty array
};

const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },
  },
});

export const { addTask } = taskSlice.actions;

export const selectTasks = (state) => state.tasks.tasks;

export default taskSlice.reducer;
