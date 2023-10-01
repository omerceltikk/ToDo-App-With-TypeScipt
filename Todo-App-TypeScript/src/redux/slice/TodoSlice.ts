import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
const dataBase = localStorage.getItem("todos");

interface TodoState {
  data: any;
  categoryStatus:string,
  doneStatus:string
}
const initialState: TodoState = {
  data: dataBase ? JSON.parse(dataBase) : [],
  categoryStatus:"all",
  doneStatus:"all"
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
    doneTodo:(state,action : PayloadAction<any>) => {
      const finded = state.data.find((item: any) => item.id == action.payload.id);
      finded.isDone = action.payload.isDone;
      localStorage.setItem("todos", JSON.stringify(state.data));
      
    },
    editTodo: (state, action: PayloadAction<any>) => {
      const todo = state.data.find((item: any) => item.id == action.payload.id);
      todo.title = action.payload.title;
      todo.description = action.payload.description
      localStorage.setItem("todos", JSON.stringify(state.data));
    },
    filterCategory: (state, action: PayloadAction<string>) => {
      state.categoryStatus=action.payload;
    },
    filterDone: (state,action: PayloadAction<string>) => {
      state.doneStatus=action.payload;
    }
  },
});

export const { addTodo, removeTodo, editTodo, filterCategory,filterDone,doneTodo} =
  TodoSlice.actions;

export const selectTodo = (state: RootState) => state.todos.data;

export default TodoSlice.reducer;
