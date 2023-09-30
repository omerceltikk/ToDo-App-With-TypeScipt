import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
const dataBase = localStorage.getItem("todos");

interface TodoState {
  data: any;
  filtered: any;
  categoryStatus:boolean,
  dateStatus:boolean,
}
const initialState: TodoState = {
  data: dataBase ? JSON.parse(dataBase) : [],
  filtered: [],
  categoryStatus:false,
  dateStatus:false,
};

const TodoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<object>) => {
      state.data = [...state.data, action.payload];
    },
    removeTodo: (state, action: PayloadAction<number>) => {
      const todo = state.data.filter((item: any) => item.id != action.payload);
      state.data = todo;
      localStorage.setItem("todos", JSON.stringify(todo));
    },
    editTodo: (state, action: PayloadAction<any>) => {
      const todo = state.data.find((item: any) => item.id == action.payload.id);

      // localStorage.setItem("todos", JSON.stringify(todo))
    },
    filterCategory: (state, action: PayloadAction<string>) => {
        state.categoryStatus=true;
        const newState = state.data.filter(
          (e: any) => e.category == action.payload
          );
          state.filtered = newState
      }
    },
  },
);

export const { addTodo, removeTodo, editTodo, filterCategory } =
  TodoSlice.actions;

export const selectTodo = (state: RootState) => state.todos.data;

export default TodoSlice.reducer;
