import { createSlice } from "@reduxjs/toolkit";
import { getRandomColor } from "../../utils/get-random-color";
import { ITodo } from "../interfaces";
import { RootState } from "../store";

interface State {
  todoHistory: ITodo[];
}

export const todoReducer = createSlice({
  name: "todo",
  initialState: {
    todoHistory: [],
  } as State,

  reducers: {
    setTodo: (state, action) => {
      const newItem: ITodo = {
        id: state.todoHistory.length + 1,
        color: getRandomColor(),
      };
      state.todoHistory = [...state.todoHistory,  newItem]
    },
    setDeleteTodo: (state, action) => {
      state.todoHistory.pop();
    },
  },
});

export const { setDeleteTodo, setTodo } = todoReducer.actions;

// selectors
export const todoSelector = (state: RootState) => state.todo.todoHistory;

export default todoReducer.reducer;
