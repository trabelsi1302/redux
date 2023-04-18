import { createSlice } from "@reduxjs/toolkit";

const TodoSlice = createSlice({
  name: "todoList",
  initialState: [],
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload);
    },
    editTask: (state, action) => {
      return state.map((edit) =>
        edit.id === action.payload.id
          ? { ...edit, text: action.payload.text }
          : edit
      );
    },
    deleteTask: (state, action) => {
      // state.tasks = state.tasks.filter((task) => task.id !== action.payload.id);
      return state.filter((task) => task.id !== action.payload.id);
    },
    toggleDone: (state, action) => {
      return state.map((done) =>
        done.id === action.payload.id ? { ...done, isDone: !done.isDone } : done
      );
    },
  },
});

export const { addTask, editTask, deleteTask, toggleDone } = TodoSlice.actions;

export default TodoSlice.reducer;
