import { createSlice } from "@reduxjs/toolkit";
import type {PayloadAction} from "@reduxjs/toolkit"
import { RootState } from "../store";
const item = localStorage.getItem("todos");

interface TodoState{
  data: any
}
const initialState:TodoState = {
  data: item ? JSON.parse(item) : [],
}

const TodoSlice = createSlice({
  name:"todos",
  initialState,
  reducers:{
    addTodo: (state,action : PayloadAction<object>) => {
      state.data = [...state.data, action.payload];
    },
    removeTodo: (state,action:  PayloadAction<number>) => {
      const todo = state.data.filter((item:any) => item.id != action.payload);
      state.data = todo
    },
    editTodo: (state,action:  PayloadAction<any>) => {
      const todo = state.data.find((item:any) => item.id == action.payload.id);
    }
  }
})

export const {addTodo,removeTodo,editTodo} = TodoSlice.actions;

export const selectTodo = (state:RootState ) => state.todos.data

export default TodoSlice.reducer;